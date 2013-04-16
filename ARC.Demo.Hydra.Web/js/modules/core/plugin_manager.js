define(["hydra", "require", "jqueryui"], function (hydra, require) {
    var oContainer = $('#pluginHolder');
    var tabTemplate = '<li type="#{type}"><a href="#{href}">#{label}</a> <span class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>';
    
    hydra.module.register('pluginHolder', function (bus) {
        return {
            events: {
                plugin: {
                    'plugin:loading': function (plugin) {
                        loadPlugin(plugin);
                    },
                    'plugin:render': function (plugin) {
                        console.log('Rendering a plugin ' + plugin);
                    },
                    'plugin:unloading': function (plugin) {
                        console.log('Unloading a plugin ' + plugin);
                    }
                }
            },
            init: function () {
                oContainer.tabs({ show: { effect: "slideDown", duration: 150 } });
                oContainer.find(".ui-tabs-nav").sortable({
                    axis: "X",
                    stop: function () {
                        oContainer.tabs("refresh");
                    }
                });
            }
        };
    }).start();

    function loadPlugin(plugin) {
        if (plugin.isSingleInstance) {
            var pluginName = plugin.name.replace(/ /g, '');
            var index = $('#tabs li').index($('li[type="' + pluginName + '"]'));
            if (index>=0) {
                oContainer.tabs({ active: index });
            } else {
                createNewTab(plugin, false);
            }
        } else {
            createNewTab(plugin, true);
        }
    }

    function createNewTab(plugin, requireId) {
        require([plugin.path], function (module) {
            var pluginName = plugin.name.replace(/ /g, '');
            var tabsSize = $('#tabs li', oContainer).size();
            var tabsSameTypeCount = $('#tabs li[type^="' + pluginName + '"]', oContainer).size();
            var tabName = requireId ? pluginName + '-' + tabsSameTypeCount : pluginName;
            var liTab = $(tabTemplate.replace(/#\{type\}/g, pluginName).replace(/#\{href\}/g, "#" + tabName).replace(/#\{label\}/g, plugin.name));
            
            $('#tabs', oContainer).append(liTab);
            var moduleCache = new module();
            oContainer.append('<div id="' + tabName + '">' + moduleCache.render() + '</div>');
            oContainer.tabs("refresh");
            oContainer.tabs({ active: tabsSize });
        });
    }
    
    oContainer.delegate("span.ui-icon-close", "click", function () {
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        oContainer.tabs("refresh");
    });
});
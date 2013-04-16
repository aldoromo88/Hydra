define(["hydra", "require", "jqueryui"], function (hydra, require) {
    //var oTempalte = _.template(template);
    var oHolder = $('#menuHolder');
    var oContainer = $('#menuContent');
    var menuParentTempalte = '<li><a href="#"><span class="#{icon}"></span>#{description}</a></li>';
    hydra.module.register('menu', function (bus) {
        return {
            events: {
                itemSelected: {
                    'item:click': function (menuItem) {
                        bus.publish('plugin', 'plugin:loading', menuItem);
                    }
                }
            },
            init: function () {
                require(["./../proxies/menu_proxy"], function (module) {
                    var $ulMain = $('<ul/>');

                    var menuItems = new module().getMenuItems(0);
                    menuItems.forEach(function (menuItem) {
                        var $liParent = $(menuParentTempalte.replace(/#\{icon\}/g, menuItem.icon).replace(/#\{description\}/g, menuItem.description));
                        var $ul = $('<ul/>');
                        menuItem.menuChilds.forEach(function (subMenuItem) {
                            var $li = $(menuParentTempalte.replace(/#\{icon\}/g, subMenuItem.icon).replace(/#\{description\}/g, subMenuItem.description));
                            $li.click(function () {
                                bus.publish('itemSelected', 'item:click', subMenuItem);
                                $ulMain.menu("collapseAll", null, true);
                            });
                            $ul.append($li);
                        });
                        $liParent.append($ul);
                        $ulMain.append($liParent);
                    });

                    oContainer.append($ulMain);

                    $ulMain.menu();

                    oHolder.hover(
                        function () { },
                        function () { $ulMain.menu("collapseAll", null, true); }
                    );

                });

                //oContainer.addEventListener('click', function () {
                //    bus.publish('itemSelected', 'item:click', {});
                //});
            }
        };
    }).start();
});
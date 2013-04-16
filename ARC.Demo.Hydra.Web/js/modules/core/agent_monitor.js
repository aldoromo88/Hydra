define(["hydra", "text!templates/core/agent_monitor.htm"], function (hydra, template) {
    var oTempalte = _.template(template);
    var oContainer = document.getElementById('agentMonitorContent');
    hydra.module.register('agentMonitor', function (bus) {
        return {
            events: {
                itemSelected: {
                    'calendar:click': function () {
                        console.log('Click on calendar');
                    },
                    'event_detail:click': function () {
                        console.log('Click on event detail triggered but showed from calendar');
                    }
                }
            },
            init: function () {
                oContainer.innerHTML += oTempalte();
                oContainer.addEventListener('click', function () {
                    bus.publish('schedule', 'calendar:click', {});
                });
            }
        };
    }).start();
});
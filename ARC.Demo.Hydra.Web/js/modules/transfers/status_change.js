define(["hydra", "text!templates/transfers/status_change.htm"], function (hydra, template) {
    var oTempalte = _.template(template);
    function statusChange() {
        hydra.module.register('statusChange', function (bus) {
            return {
                events: {

                },
                init: function () {

                }
            };
        }).start();
    }

    statusChange.prototype = {
        render: function () {
            return oTempalte();
        }
    };
    return (statusChange);
});
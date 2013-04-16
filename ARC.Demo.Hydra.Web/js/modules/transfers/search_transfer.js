define(["hydra", "text!templates/transfers/search_transfer.htm"], function (hydra, template) {
    var oTempalte = _.template(template);
    function searchTransfer() {
        hydra.module.register('searchTransfer', function (bus) {
            return {
                events: {

                },
                init: function () {

                }
            };
        }).start();
    }

    searchTransfer.prototype = {
        render: function() {
            return oTempalte();
        }
    };
    return searchTransfer;
});
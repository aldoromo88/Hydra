define(["jquery"], function () {
    function menuProxy() {
    }

    menuProxy.prototype = {
        getMenuItems: function (idUser) {
            var menuItems = [];

            menuItems.push({
                description: 'Transfer',
                icon: 'ui-icon ui-icon-disk',
                menuChilds: [
                    { description: 'Search Transfer', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Transfer Search', isSingleInstance: false },
                    { description: 'Status Change', path: './../transfers/status_change',icon: 'ui-icon ui-icon-disk', name: 'Status Change', isSingleInstance: true }
                ]
            });

            menuItems.push({
                description: 'Process',
                icon: 'ui-icon ui-icon-zoomin',
                menuChilds: [
                    { description: 'Signature Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Signature Hold', isSingleInstance: true },
                    { description: 'Denay Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Denay Hold', isSingleInstance: true },
                    { description: 'OFAC Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'OFAC Hold', isSingleInstance: true },
                    { description: 'KYC Hold', path: './../transfers/status_change', icon: 'ui-icon ui-icon-disk', name: 'KYC Hold', isSingleInstance: true },
                    { description: 'Deposit Hold', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Deposit Hold', isSingleInstance: true }
                ]
            });

            menuItems.push({
                description: 'Application',
                icon: 'ui-icon ui-icon-zoomout',
                menuChilds: [
                    { description: 'Users', path: './../transfers/search_transfer', icon: 'ui-icon ui-icon-disk', name: 'Users', isSingleInstance: true },
                    { description: 'Logout', path: './../transfers/status_change', icon: 'ui-icon ui-icon-disk', name: 'Logut', isSingleInstance: true }
                ]
            });

            return menuItems;
        }
    };
    return menuProxy;
});
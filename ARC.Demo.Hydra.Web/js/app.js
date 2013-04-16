require.config({
    baseUrl: "/js/",
    paths: {
        jquery: 'libs/JQuery/jquery-1.9.1',
        jqueryui: 'libs/JQuery/jquery-ui-1.10.2.custom',
        hydra: 'libs/Hydra/hydra',
        underscore: 'libs/Underscore/underscore',
        text: "libs/Helpers/text",
        css: "libs/Helpers/css"
    },
    shim: {
        jqueryui: {
            deps: ['jquery'],
            exports: '$'
        },
        underscore: {
            exports: "_"
        },
        hydra: {
            deps: ['underscore'],
            exports: 'Hydra'
        }
    }
});
define(['modules/core/menu_loader', 'modules/core/agent_monitor', 'modules/core/plugin_manager']);
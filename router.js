BR.AppRouter = Backbone.Router.extend({
    routes: {
        "home": 'homeRoute',
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
    homeRoute: function() {
        var appView = new BR.AppView({
            el: $('#app-container'),
            model: new BR.AppModel()
        })
    },
    defaultRoute: function() {
        BR.router.navigate('home', {
            trigger: true
        });
    }
});
// Initiate the router
BR.router = new BR.AppRouter;
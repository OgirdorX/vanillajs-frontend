class Router {
    constructor(app) {
        console.log('Router.constructor()');
        this.app = app;
        this.routes = [];
        this.hashChange = this.hashChange.bind(this);

        window.addEventListener('hashchange', this.hashChange);
        window.addEventListener('DOMContentLoaded', this.hashChange);
    }
    addRoute(name, url) {
        console.log('addRoute()', `name: ${name}`, `url: ${url}`);
        this.routes.push({
            name,
            url
        });
    }
    hashChange() {
        console.log('hashChange()', this.routes);
        const hash = window.location.hash;
        console.log('hash', hash);
        console.log('hash', typeof (hash));
        let selectedRoute = {};
        if (hash === '') {
            selectedRoute = {
                name: 'home',
                url: '',
            }
        } else {
            selectedRoute = this.routes.find(route => {
                console.log('route', route);
                return hash.match(new RegExp(route.url));
            });
        }

        console.log('selectedRoute', selectedRoute);

        if (selectedRoute) {
            this.params = new RegExp(selectedRoute.url).exec(hash);
            console.log('this.params', this.params);
            console.log('ROUTE NAME', selectedRoute);
            this.app.showComponent(selectedRoute.name);
        } else {
            this.app.showComponent();
        }
    }
}


/* 'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.contructor(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    contructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function (scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
    },
    hasChanged: function (scope, r) {
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.default) {
                    scope.goToRoute(route.htmlName)
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function (scope) {
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
}; */
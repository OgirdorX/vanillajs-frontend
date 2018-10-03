export default class App {
    constructor(selector) {
        this.appElement = document.querySelector(selector);
        this.componentsByName = {};
    }
    addComponent(component) {
        /* Component {
           name,
           view,
           model,
           controller
       } */
        //console.log('addComponent()', `component: `);
        //console.log(component);
        this.componentsByName[component.name] = component;
        //console.log('componentsbyName');
        //console.log(this.componentsByName);
        component.model = this.proxify(component.model);
        //this.updateView();
        console.log('componentsByName');
        console.log(this.componentsByName);
    }
    showComponent(name) {
        this.currentComponent = this.componentsByName[name];

        if (this.currentComponent) {
            this.currentComponent.controller(this.currentComponent.model);
        }
        this.updateView();
    }
    updateView() {
        //console.log('updateView()', this.currentComponent);
        if (this.currentComponent) {
            this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
        } else {
            this.appElement.innerHTML = '<h3>Not Found</h3>';
        }
    }
    proxify(model) {
        const self = this;
        return new Proxy(model, {
            set(target, property, value) {
                //console.log('Changing', property, 'from', target[property], 'to', value);
                target[property] = value;
                self.updateView();
                return true;
            }
        });
    }
}










/* 'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('create', 'create.html'),
            new Route('edit', 'edit.html')
        ]);
    }
    init();
}()); */
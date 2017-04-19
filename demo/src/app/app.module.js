"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var myList_1 = require("../pages/myList/myList");
var ionic2_elastic_header_1 = require("ionic2-elastic-header");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            myList_1.MyList
        ],
        imports: [
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
            ionic2_elastic_header_1.ElasticHeaderModule
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            myList_1.MyList
        ],
        providers: [{ provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }]
    })
], AppModule);
exports.AppModule = AppModule;

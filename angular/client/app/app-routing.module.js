"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var accueil_component_1 = require('./accueil.component');
var instruction_component_1 = require('./instruction.component');
var tableaubord_component_1 = require('./tableaubord.component');
var questionrapide_component_1 = require('./questionrapide.component');
var examen_component_1 = require('./examen.component');
var ajouterquestion_component_1 = require('./ajouterquestion.component');
var examentermine_component_1 = require('./examentermine.component');
var routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: accueil_component_1.AccueilComponent },
    { path: 'instruction', component: instruction_component_1.InstructionComponent },
    { path: 'tableauBord', component: tableaubord_component_1.TableaubordComponent },
    { path: 'questionRapide', component: questionrapide_component_1.QuestionrapideComponent },
    { path: 'examen', component: examen_component_1.ExamenComponent },
    { path: 'ajouterQuestion', component: ajouterquestion_component_1.AjouterquestionComponent },
    { path: 'examenTermine', component: examentermine_component_1.ExamentermineComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var accueil_component_1 = require('./accueil.component');
var instruction_component_1 = require('./instruction.component');
var tableaubord_component_1 = require('./tableaubord.component');
var questionrapide_component_1 = require('./questionrapide.component');
var ajouterquestion_component_1 = require('./ajouterquestion.component');
var examentermine_component_1 = require('./examentermine.component');
var examen_component_1 = require('./examen.component');
var question_service_1 = require('./question.service');
var stat_service_1 = require('./stat.service');
var exam_service_1 = require('./exam.service');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, accueil_component_1.AccueilComponent, instruction_component_1.InstructionComponent, tableaubord_component_1.TableaubordComponent, questionrapide_component_1.QuestionrapideComponent, examen_component_1.ExamenComponent, ajouterquestion_component_1.AjouterquestionComponent, examentermine_component_1.ExamentermineComponent],
            providers: [question_service_1.QuestionService, stat_service_1.StatService, exam_service_1.ExamService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
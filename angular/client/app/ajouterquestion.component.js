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
var question_service_1 = require('./question.service');
var AjouterquestionComponent = (function () {
    function AjouterquestionComponent(questionService) {
        this.questionService = questionService;
        this.displayMessage = false;
        this.mode = 'Promise';
    }
    AjouterquestionComponent.prototype.addQuestion = function (sujet, rep, q, c1, c2, c3, c4) {
        this.questionService
            .ajouterQuestion(sujet, rep, q, c1, c2, c3, c4)
            .then(function () { });
        this.displayMessage = true;
    };
    AjouterquestionComponent.prototype.hideMessage = function () {
        this.displayMessage = false;
    };
    AjouterquestionComponent = __decorate([
        core_1.Component({
            selector: 'ajouterquestion',
            templateUrl: 'templates/ajouterQuestion'
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], AjouterquestionComponent);
    return AjouterquestionComponent;
}());
exports.AjouterquestionComponent = AjouterquestionComponent;
//# sourceMappingURL=ajouterquestion.component.js.map
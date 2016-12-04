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
var QuestionrapideComponent = (function () {
    function QuestionrapideComponent(questionService) {
        this.questionService = questionService;
        this.mode = 'Promise';
    }
    QuestionrapideComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    QuestionrapideComponent.prototype.getQuestion = function () {
        var _this = this;
        this.questionService
            .getQuestion()
            .then(function (question) { _this.text = question.question_text; _this.choix_un = question.choix_un; _this.choix_deux = question.choix_deux; _this.choix_trois = question.choix_trois; _this.choix_quatre = question.choix_quatre; });
    };
    QuestionrapideComponent = __decorate([
        core_1.Component({
            selector: 'questionrapide',
            templateUrl: 'templates/question'
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], QuestionrapideComponent);
    return QuestionrapideComponent;
}());
exports.QuestionrapideComponent = QuestionrapideComponent;
//# sourceMappingURL=questionrapide.component.js.map
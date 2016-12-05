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
var exam_service_1 = require('./exam.service');
var question_service_1 = require('./question.service');
var ExamenComponent = (function () {
    function ExamenComponent(examService, questionService) {
        this.examService = examService;
        this.questionService = questionService;
        this.isAnswered = false;
        this.goodAnswer = -1;
        this.examNumber = -1;
        this.questionRestante = 1000;
        this.question = {
            question_text: "default",
            choix_un: "default",
            choix_deux: "default",
            choix_trois: "default",
            choix_quatre: "default",
            subject: "default",
            _id: -1,
        };
        this.mode = 'Promise';
    }
    ExamenComponent.prototype.ngOnInit = function () {
        this.createExam();
        this.getQuestion();
    };
    ExamenComponent.prototype.getQuestion = function () {
        var _this = this;
        this.isAnswered = false;
        this.examService
            .getQuestion()
            .then(function (question) {
            _this.question.question_text = question[0].question_text;
            _this.question.choix_un = question[0].choix_un;
            _this.question.choix_deux = question[0].choix_deux;
            _this.question.choix_trois = question[0].choix_trois;
            _this.question.choix_quatre = question[0].choix_quatre;
            _this.question.subject = question[0].subject;
            _this.question._id = question[0]._id;
        });
    };
    ExamenComponent.prototype.validate = function (optionId) {
        var _this = this;
        this.examService
            .validate(optionId, this.question._id, this.examNumber)
            .then(function (rep) {
            _this.isAnswered = true;
            _this.goodAnswer = rep.reponse;
            _this.questionRestante = rep.restant;
            console.log(_this.questionRestante);
        });
        this.examService
            .validateExam(optionId, this.question._id)
            .then(function () {
        });
    };
    ExamenComponent.prototype.createExam = function () {
        var _this = this;
        this.examService
            .createExam()
            .then(function (response) { return _this.examNumber = response; });
    };
    ExamenComponent = __decorate([
        core_1.Component({
            selector: 'questionrapide',
            templateUrl: 'templates/examen'
        }), 
        __metadata('design:paramtypes', [exam_service_1.ExamService, question_service_1.QuestionService])
    ], ExamenComponent);
    return ExamenComponent;
}());
exports.ExamenComponent = ExamenComponent;
//# sourceMappingURL=examen.component.js.map
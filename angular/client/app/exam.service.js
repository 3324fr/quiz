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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ExamService = (function () {
    function ExamService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.appUrl = '/ajax';
        this.sujet = "html";
        this.nombreQuestion = 2;
    }
    ExamService.prototype.getQuestion = function () {
        if (this.sujet == "html") {
            return this.http.get(this.appUrl + '/examenhtml')
                .toPromise()
                .then(function (res) { return res.json(); });
        }
        else if (this.sujet == "css") {
            return this.http.get(this.appUrl + '/examencss')
                .toPromise()
                .then(function (res) { return res.json(); });
        }
        else if (this.sujet == "js") {
            return this.http.get(this.appUrl + '/examenjs')
                .toPromise()
                .then(function (res) { return res.json(); });
        }
    };
    ExamService.prototype.validate = function (id, quest, examNumber) {
        return this.http.post(this.appUrl + '/examen', JSON.stringify({ reponse: id, question: quest, exam: examNumber }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ExamService.prototype.validateExam = function (id, quest) {
        return this.http.post(this.appUrl + '/validateExam', JSON.stringify({ id: quest, answer: id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ExamService.prototype.createExam = function () {
        return this.http.post(this.appUrl + '/createExam', JSON.stringify({ sujet: this.sujet, nbQuestions: this.nombreQuestion }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ExamService.prototype.updateSujet = function (suj) {
        this.sujet = suj;
    };
    ExamService.prototype.updateNb = function (nb) {
        this.nombreQuestion = nb;
    };
    ExamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ExamService);
    return ExamService;
}());
exports.ExamService = ExamService;
//# sourceMappingURL=exam.service.js.map
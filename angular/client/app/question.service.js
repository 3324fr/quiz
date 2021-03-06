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
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.appUrl = '/ajax';
    }
    QuestionService.prototype.getQuestion = function () {
        return this.http.get(this.appUrl + '/random')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    QuestionService.prototype.validate = function (id) {
        return this.http.post(this.appUrl + '/validate', JSON.stringify({ id: id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    QuestionService.prototype.validateQuestion = function (id, optionId) {
        return this.http.post(this.appUrl + '/validateQuestion', JSON.stringify({ id: id, answer: optionId }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    QuestionService.prototype.ajouterQuestion = function (sujet, rep, q, c1, c2, c3, c4) {
        return this.http.post(this.appUrl + '/ajouterQuestion', JSON.stringify({
            sujet: sujet,
            textquestion: q,
            reponse: rep,
            choixun: c1,
            choixdeux: c2,
            choixtrois: c3,
            choixquatre: c4
        }), { headers: this.headers })
            .toPromise()
            .then(function () { });
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map
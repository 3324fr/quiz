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
var stat_service_1 = require('./stat.service');
var exam_service_1 = require('./exam.service');
var TableaubordComponent = (function () {
    function TableaubordComponent(statService, examService) {
        this.statService = statService;
        this.examService = examService;
    }
    TableaubordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statService
            .getExams()
            .then(function (exams) { return _this.exams = exams; });
        this.statService
            .getStats()
            .then(function (stats) { _this.stats = stats[0]; console.log(_this.stats); });
    };
    TableaubordComponent.prototype.resetStats = function () {
        this.statService
            .resetStats()
            .then(function () { });
    };
    TableaubordComponent.prototype.resetExams = function () {
        this.statService
            .resetExams()
            .then(function () { });
    };
    TableaubordComponent.prototype.updateSubject = function (sujet) {
        this.examService.updateSujet(sujet);
    };
    TableaubordComponent.prototype.updateNb = function (nb) {
        this.examService.updateNb(nb);
    };
    TableaubordComponent = __decorate([
        core_1.Component({
            selector: 'tableaubord',
            templateUrl: 'templates/tableaubord'
        }), 
        __metadata('design:paramtypes', [stat_service_1.StatService, exam_service_1.ExamService])
    ], TableaubordComponent);
    return TableaubordComponent;
}());
exports.TableaubordComponent = TableaubordComponent;
//# sourceMappingURL=tableaubord.component.js.map
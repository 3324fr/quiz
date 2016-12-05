import { Component  } from '@angular/core';
import { StatService } from './stat.service';
import { ExamService } from './exam.service';
import { OnInit } from '@angular/core';
import { Exam } from './exam';
import { Stats } from './stats';

@Component({
  selector: 'tableaubord',
  templateUrl: 'templates/tableaubord'
})

export class TableaubordComponent implements OnInit {
    nbQuestion: number;
    exams: Exam[];
    stats: Stats;



    constructor(
        private statService: StatService,
        private examService: ExamService
    ) { }

    ngOnInit(): void {
        this.statService
            .getExams()
            .then(exams => this.exams = exams);

        this.statService
            .getStats()
            .then(stats => { this.stats = stats[0]; console.log(this.stats) });
    }

    resetStats(): void {
        this.statService
            .resetStats()
            .then(() => {});
    }

    resetExams(): void {
        this.statService
            .resetExams()
            .then(() => { });
    }

    updateSubject(sujet): void {
        this.examService.updateSujet(sujet);
    }

    updateNb(nb): void {
        this.examService.updateNb(nb);
    }
}

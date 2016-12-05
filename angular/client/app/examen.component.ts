import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ExamService } from './exam.service';
import { QuestionService } from './question.service';
import { Question } from './question';


@Component({
    selector: 'questionrapide',
    templateUrl: 'templates/examen'
})

export class ExamenComponent implements OnInit {
    isAnswered: boolean = false;
    goodAnswer: number = -1;
    examNumber: number = -1;
    questionRestante: number = 1000;
    question: Question = {
        question_text: "default",
        choix_un: "default",
        choix_deux: "default",
        choix_trois: "default",
        choix_quatre: "default",
        subject: "default",
        _id: -1,
    };
    mode = 'Promise';

    constructor(
        private examService: ExamService,
        private questionService: QuestionService
    ) { }

    ngOnInit(): void {
        this.createExam();
        this.getQuestion();
    }

    getQuestion(): void {
      this.isAnswered = false;
      this.examService
          .getQuestion()
          .then(question => {
              this.question.question_text = question[0].question_text;
              this.question.choix_un = question[0].choix_un;
              this.question.choix_deux = question[0].choix_deux;
              this.question.choix_trois = question[0].choix_trois;
              this.question.choix_quatre = question[0].choix_quatre;
              this.question.subject = question[0].subject;
              this.question._id = question[0]._id;
          });
    }

    validate(optionId): void {
        this.examService
            .validate(optionId, this.question._id, this.examNumber)
            .then(rep => {
                this.isAnswered = true;
                this.goodAnswer = rep.reponse;
                this.questionRestante = rep.restant;
                console.log(this.questionRestante);
            });
        this.examService
            .validateExam(optionId, this.question._id)
            .then(() =>{
            });
    }

    createExam(): void {
        this.examService
            .createExam()
            .then(response => this.examNumber = response );
    }
}

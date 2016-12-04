import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { QuestionService } from './question.service';
import { Question } from './question';


@Component({
    selector: 'questionrapide',
    templateUrl: 'templates/question'
})

export class QuestionrapideComponent implements OnInit {
    isAnswered: boolean = false;
    goodAnswer: number = -1;
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
        private questionService: QuestionService
    ) { }

    ngOnInit(): void {
       this.getQuestion();
    }

    getQuestion(): void {
      this.isAnswered = false;
      this.questionService
          .getQuestion()
          .then(question => {
              console.log(question);
              this.question.question_text = question.question_text;
              this.question.choix_un = question.choix_un;
              this.question.choix_deux = question.choix_deux;
              this.question.choix_trois = question.choix_trois;
              this.question.choix_quatre = question.choix_quatre;
              this.question._id = question._id;
          });
    }

    validate(optionId): void {
        this.questionService
            .validate(this.question._id)
            .then(reponse => {
                this.isAnswered = true;
                this.goodAnswer = reponse;
            });
    }
}

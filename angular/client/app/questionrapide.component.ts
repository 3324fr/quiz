import { Component  } from '@angular/core';
import { OnInit } from '@angular/core';

import { QuestionService } from './question.service';
import { Question } from './question';


@Component({
    selector: 'questionrapide',
    templateUrl: 'templates/question'
})

export class QuestionrapideComponent implements OnInit {
    question: Question;

    constructor(
        private questionService: QuestionService
    ) { }

    ngOnInit(): void {
        this.getQuestion();
    }

    getQuestion(): void {
        this.questionService
            .getQuestion()
            .then(question => this.question = question);
    }
}
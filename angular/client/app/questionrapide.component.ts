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
    mode = 'Promise';

    constructor(
        private questionService: QuestionService
    ) { }

    ngOnInit(): void {
       this.getQuestion();
    }

    getQuestion(): void {
      this.questionService
            .getQuestion()
            .then(question => {this.text  = question.question_text; this.choix_un  = question.choix_un;this.choix_deux  = question.choix_deux;this.choix_trois  = question.choix_trois;this.choix_quatre  = question.choix_quatre;});
    }

}

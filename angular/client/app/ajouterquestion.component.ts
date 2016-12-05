import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { QuestionService } from './question.service';
import { Question } from './question';


@Component({
    selector: 'ajouterquestion',
    templateUrl: 'templates/ajouterQuestion'
})

export class AjouterquestionComponent {
    displayMessage: boolean = false;
    textquestion: string;
    choixun: string;
    choixdeux: string;
    choixtrois: string;
    choixquatre: string;
    mode = 'Promise';

    constructor(
        private questionService: QuestionService
    ) { }


    addQuestion(sujet, rep, q, c1, c2, c3, c4): void {
        this.questionService
            .ajouterQuestion(sujet, rep, q, c1, c2, c3, c4)
            .then(() => { });
        this.displayMessage = true;
    }

    hideMessage() {
        this.displayMessage = false;
    }
}

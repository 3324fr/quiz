import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question } from './question';
import { Reponse } from './reponse';

@Injectable()
export class ExamService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private appUrl = '/ajax'
    private sujet = "html";
    private nombreQuestion = 2;

    constructor(private http: Http) { }

    getQuestion(): Promise<Question> {
        if (this.sujet == "html") {
            return this.http.get(this.appUrl + '/examenhtml')
                .toPromise()
                .then(res => res.json());
        }
        else if (this.sujet == "css") {
            return this.http.get(this.appUrl + '/examencss')
                .toPromise()
                .then(res => res.json());
        }
        else if (this.sujet == "js") {
            return this.http.get(this.appUrl + '/examenjs')
                .toPromise()
                .then(res => res.json());
        }
    }

    validate(id: Number, quest:Number, examNumber: number): Promise<Reponse> {
        return this.http.post(this.appUrl + '/examen', JSON.stringify({ reponse: id, question: quest, exam: examNumber }), { headers: this.headers })
            .toPromise()
            .then(res => res.json());
    }

    validateExam(id: Number, quest: Number): Promise<Reponse> {
        return this.http.post(this.appUrl + '/validateExam', JSON.stringify({ id: quest, answer: id }), { headers: this.headers })
            .toPromise()
            .then(res => res.json());
    }

    createExam(): Promise<number> {
        return this.http.post(this.appUrl + '/createExam', JSON.stringify({ sujet: this.sujet, nbQuestions: this.nombreQuestion }), { headers: this.headers })
            .toPromise()
            .then(res => res.json());
    }

    updateSujet(suj: string) {
        this.sujet = suj;
    }

    updateNb(nb: number){
        this.nombreQuestion = nb;
    }
}

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question } from './question';

@Injectable()
export class QuestionService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private appUrl = '/ajax'

    constructor(private http: Http) { }


    getQuestion(): Promise<Question> {
        return this.http.get(this.appUrl + '/random')
            .toPromise()
            .then(res => res.json());
    }

    validate(id: Number): Promise<number> {
        return this.http.post(this.appUrl + '/validate', JSON.stringify({ id: id }), { headers: this.headers })
            .toPromise()
            .then(res => res.json());
    }

    validateQuestion(id: Number, optionId: number): Promise<number> {
        return this.http.post(this.appUrl + '/validateQuestion', JSON.stringify({ id: id, answer: optionId }), { headers: this.headers })
            .toPromise()
            .then(res => res.json());
    }

    ajouterQuestion(sujet, rep, q, c1, c2, c3, c4): Promise<void> {
        return this.http.post(this.appUrl + '/ajouterQuestion', JSON.stringify
            ({
                sujet: sujet,
                textquestion: q,
                reponse: rep,
                choixun: c1,
                choixdeux: c2,
                choixtrois: c3,
                choixquatre: c4
            }), { headers: this.headers })
            .toPromise()
            .then(() => { });
    }
}

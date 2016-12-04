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
}

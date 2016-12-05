import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Exam } from './exam';
import { Stats } from './stats';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class StatService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private appUrl = '/ajax';

    constructor(private http: Http) { }

    resetStats(): Promise<void> {
        return this.http.post(this.appUrl + '/resetStats', { headers: this.headers })
            .toPromise()
            .then(() => { });
    }

    resetExams(): Promise<void> {
        return this.http.post(this.appUrl + '/resetExams', { headers: this.headers })
            .toPromise()
            .then(() => { });
    }

    getExams(): Promise<Exam[]> {
        return this.http.get(this.appUrl + '/getExams')
            .toPromise()
            .then(res => res.json());
    }

    getStats(): Promise<Stats> {
        return this.http.get(this.appUrl + '/getStats')
            .toPromise()
            .then(res => res.json());
    }
}

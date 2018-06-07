import { Injectable } from '@angular/core';
import { IReview } from '../shared/review';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReviewService {
    constructor(private http: Http,
                private processHTTPMsgService:ProcessHTTPMsgService){}
    getReviews(id: string):Observable<Array<IReview>>{
        return this.http.get(baseURL + 'reviews?business_id=' + id)
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }
}
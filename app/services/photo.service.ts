import { Injectable } from '@angular/core';
import { IPhoto } from '../shared/photo';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class PhotoService {
    constructor(private http: Http,
        private processHTTPMsgService: ProcessHTTPMsgService) { }
    getPhoto(id: string):Observable<Array<IPhoto>>{
        return this.http.get(baseURL + 'photo?business_id=' + id)
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }
}
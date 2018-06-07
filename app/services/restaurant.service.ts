import { Injectable } from '@angular/core';
import { IRestaurant } from '../shared/restaurant';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantService {
    constructor(private http: Http,
                private processHTTPMsgService: ProcessHTTPMsgService) { }
    getRestaurants():Observable<Array<IRestaurant>>{
        return this.http.get(baseURL + 'restaurants/')
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }
    getRestaurant(id:string):Observable<IRestaurant>{
        return this.http.get(baseURL + 'restaurants?business_id=' + id)
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }
    getNearby(lat:number, long:number):Observable<Array<IRestaurant>>{
        return this.http.get(baseURL + 'restaurants?latitude=' + lat +'&longitude=' +long)
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }
    getMostLiked():Observable<Array<IRestaurant>>{
        return this.http.get(baseURL + 'restaurants?stars=' + 5)
            .map((res) => this.processHTTPMsgService.extractData(res))
            .catch((err) => this.processHTTPMsgService.handleError(err));
    }

}
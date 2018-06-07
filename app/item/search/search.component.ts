import { Component, ChangeDetectionStrategy , Inject, OnInit} from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { RestaurantService } from "../../services/restaurant.service";
import { IRestaurant } from "../../shared/restaurant";

import { Page } from "ui/page";
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Component({
    selector: "search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls:["./search.component.css"],
    
})
export class SearchComponent implements  OnInit {
    
    restaurants: Array<IRestaurant>;
    restaurantErrMsg: string;
    constructor(private page: Page, 
                private restaurantService: RestaurantService, 
                @Inject("BaseURL") private baseURL){}
    ngOnInit(){
        this.restaurantService.getRestaurants()
            .subscribe((res) => this.restaurants = res,
                        (err) => this.restaurantErrMsg = err);
    }
    
    
}

import { Component,   ChangeDetectorRef , Inject , OnInit } from "@angular/core";
import { RestaurantService } from "../../services/restaurant.service";
import { IRestaurant } from "../../shared/restaurant";

import { ScrollView } from "ui/scroll-view";

import { Page } from "ui/page";


@Component({
    selector: "home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:["./home.component.css"],
    
})
export class HomeComponent implements OnInit {
    
    popularRestaurants: Array<IRestaurant>;
    popularErrMsg: string;
    nearbyRestaurants: Array<IRestaurant>;
    nearbyErrMsg: string;

    constructor(private page: Page, 
                private changeDetectorRef:ChangeDetectorRef,
                private restaurantService: RestaurantService, 
                @Inject("BaseURL") private baseURL) {

            
    }
    ngOnInit() {
        this.restaurantService.getMostLiked()
            .subscribe((popRes) => this.popularRestaurants = popRes,
                        (poperr) => this.popularErrMsg = poperr);
        this.restaurantService.getNearby(41.4827824, -81.73622569999999)
            .subscribe((nearRes) => this.nearbyRestaurants = nearRes,
                        (nearbyerrmsg) => this.nearbyErrMsg = nearbyerrmsg);
    }
    onScrollLoaded(args) { 
        // scroll to specific position of the horizontal scroll list
        let scrollOffset = 330;
        (<ScrollView>args.object).scrollToHorizontalOffset(scrollOffset, true);
    }
   

}
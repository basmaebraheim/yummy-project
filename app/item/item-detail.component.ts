import { Component, Inject , OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { RestaurantService } from '../services/restaurant.service';
import { IRestaurant } from '../shared/restaurant';
@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    restaurant: IRestaurant;
    err: string;
    constructor(private restaurantService: RestaurantService,
        @Inject("BaseURL") private baseURL,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,) { }

    ngOnInit(){
        this.route.queryParams
        .filter((params) => params.business_id)
        .switchMap((params) => this.restaurantService.getRestaurant(params["business_id"]))
        .subscribe((restaurant) => this.restaurant = restaurant, 
                    (errmess) => { this.restaurant = null; this.err = <any>errmess; });
    }
}

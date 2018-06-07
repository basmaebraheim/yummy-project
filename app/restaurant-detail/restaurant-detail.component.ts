import { Component, Inject , OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";

import { RestaurantService } from "../services/restaurant.service";
import { ReviewService } from "../services/reviews.service";
import { PhotoService } from "../services/photo.service";
import { IRestaurant } from "../shared/restaurant";
import { IReview } from "../shared/review";
import { IPhoto } from "../shared/photo";

import { Page } from "ui/page";
import { ScrollView } from "ui/scroll-view";


@Component({
    selector: "restaurant-detail",
    moduleId: module.id,
    templateUrl: "./restaurant-detail.component.html",
    styleUrls: ['restaurant-detail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
    restaurant: IRestaurant;
    reviews: Array<IReview>;
    photos: Array<IPhoto>;
    restauranterrMsg: string;
    reviewerrMsg: string;
    photoerrMsg: string;
    id: string;
    value: number = 0;
    max: number = 5;
    stars: number;
    reviewcount: number;
    

    constructor(
                private restaurantService: RestaurantService,
                private reviewService: ReviewService,
                private photoService: PhotoService,
                private route: ActivatedRoute,
                private routerExtensions: RouterExtensions,
                @Inject("BaseURL") private baseURL) {
                
    }

    ngOnInit() {
        this.restaurantService.getRestaurants()
        .subscribe((res) => this.restaurant = res[0] ,
                    (err) => this.restauranterrMsg = err);
        
        this.route.queryParams
        .filter((params) => params.business_id)
        .switchMap((params) => this.photoService.getPhoto(params["business_id"]))
        .subscribe((photos) => this.photos = photos,
                    (errmsg) =>{this.photos = null; this.photoerrMsg = errmsg; });


        this.route.queryParams
        .filter((params) => params.business_id)
        .switchMap((params) => this.reviewService.getReviews(params["business_id"]))
        .subscribe((reviews) =>{ 
            this.reviews = reviews;
        },
            (errmess) => this.reviewerrMsg = <any>errmess);
        
    }

    onScrollLoaded(args) { 
        // scroll to specific position of the horizontal scroll list
        let scrollOffset = 330;
        (<ScrollView>args.object).scrollToHorizontalOffset(scrollOffset, true);
    }
    goBack(): void {
        this.routerExtensions.back();
    }
}

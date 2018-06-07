import { Component, OnInit, Inject, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { RestaurantService } from "../../../services/restaurant.service";
import { IRestaurant } from "../../../shared/restaurant";

import { Page } from "ui/page";
import { ObservableArray } from 'tns-core-modules/data/observable-array';

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { FilterModalComponent } from "./filtermodal/filtermodal.component";
@Component({
    selector: "filter",
    moduleId: module.id,
    templateUrl: "./filter.component.html",
    styleUrls:["./filter.component.css"],
    
})
export class FilterComponent implements  OnInit {
    
    restaurants: Array<IRestaurant>;
    restaurantErrMsg: string;
    constructor(private modalService: ModalDialogService, 
                private vcRef: ViewContainerRef,
                private page: Page, 
                private restaurantService: RestaurantService, 
                @Inject("BaseURL") private baseURL){}
    ngOnInit(){
        this.restaurantService.getRestaurants()
            .subscribe((res) => this.restaurants = res,
                        (err) => this.restaurantErrMsg = err);
    }
    createModalView() {
        
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };

        this.modalService.showModal(FilterModalComponent, options)
            .then((result: any) => {
                console.log(result);
            });

    }
    
}

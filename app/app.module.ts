import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./item/home/home.component";
import { SearchComponent } from "./item/search/search.component";
import { RestaurantdetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { FilterComponent } from "./item/search/filter/filter.component";
import { FilterModalComponent } from "./item/search/filter/filtermodal/filtermodal.component";
//services
import { PhotoService } from "./services/photo.service";
import { ProcessHTTPMsgService } from "./services/process-httpmsg.service";
import { RestaurantService } from "./services/restaurant.service";
import { ReviewService } from "./services/reviews.service";
//NativeScriptHttpModule
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { baseURL } from './shared/baseurl';
//form module
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        HomeComponent,
        SearchComponent,
        RestaurantdetailComponent,
        FilterComponent,
        FilterModalComponent
    ],
    entryComponents: [FilterModalComponent],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        ItemService,
        PhotoService,
        ProcessHTTPMsgService,
        RestaurantService,
        ReviewService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

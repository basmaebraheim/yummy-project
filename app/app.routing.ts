import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./item/home/home.component";
import { SearchComponent } from "./item/search/search.component";
import { RestaurantdetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { FilterComponent } from "./item/search/filter/filter.component";
import { FilterModalComponent } from "./item/search/filter/filtermodal/filtermodal.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "home", component: HomeComponent },
    { path: "search", component: SearchComponent },
    { path: "restaurantdetail", component: RestaurantdetailComponent },
    { path: "filter", component: FilterComponent },
    { path: "filterm", component: FilterModalComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
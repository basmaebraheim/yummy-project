"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var home_component_1 = require("./item/home/home.component");
var search_component_1 = require("./item/search/search.component");
var restaurant_detail_component_1 = require("./restaurant-detail/restaurant-detail.component");
var filter_component_1 = require("./item/search/filter/filter.component");
var filtermodal_component_1 = require("./item/search/filter/filtermodal/filtermodal.component");
//services
var photo_service_1 = require("./services/photo.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var restaurant_service_1 = require("./services/restaurant.service");
var reviews_service_1 = require("./services/reviews.service");
//NativeScriptHttpModule
var http_1 = require("nativescript-angular/http");
var baseurl_1 = require("./shared/baseurl");
//form module
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                home_component_1.HomeComponent,
                search_component_1.SearchComponent,
                restaurant_detail_component_1.RestaurantdetailComponent,
                filter_component_1.FilterComponent,
                filtermodal_component_1.FilterModalComponent
            ],
            entryComponents: [filtermodal_component_1.FilterModalComponent],
            providers: [
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                item_service_1.ItemService,
                photo_service_1.PhotoService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                restaurant_service_1.RestaurantService,
                reviews_service_1.ReviewService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsNkRBQTJEO0FBQzNELG1FQUFpRTtBQUNqRSwrRkFBNEY7QUFDNUYsMEVBQXdFO0FBQ3hFLGdHQUE4RjtBQUM5RixVQUFVO0FBQ1YsMERBQXdEO0FBQ3hELDhFQUEyRTtBQUMzRSxvRUFBa0U7QUFDbEUsOERBQTJEO0FBQzNELHdCQUF3QjtBQUN4QixrREFBbUU7QUFDbkUsNENBQTJDO0FBQzNDLGFBQWE7QUFDYixvREFBcUU7QUFDckUsd0NBQXFEO0FBd0NyRDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF0Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2FBRXRCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsdURBQXlCO2dCQUN6QixrQ0FBZTtnQkFDZiw0Q0FBb0I7YUFDdkI7WUFDRCxlQUFlLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztZQUN2QyxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCw0QkFBWTtnQkFDWiwrQ0FBcUI7Z0JBQ3JCLHNDQUFpQjtnQkFDakIsK0JBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RhdXJhbnRkZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN0YXVyYW50LWRldGFpbC9yZXN0YXVyYW50LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vc2VhcmNoL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vc2VhcmNoL2ZpbHRlci9maWx0ZXJtb2RhbC9maWx0ZXJtb2RhbC5jb21wb25lbnRcIjtcbi8vc2VydmljZXNcbmltcG9ydCB7IFBob3RvU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Bob3RvLnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Jlc3RhdXJhbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgUmV2aWV3U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Jldmlld3Muc2VydmljZVwiO1xuLy9OYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuL3NoYXJlZC9iYXNldXJsJztcbi8vZm9ybSBtb2R1bGVcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50LFxuICAgICAgICBSZXN0YXVyYW50ZGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgIEZpbHRlck1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtGaWx0ZXJNb2RhbENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnQmFzZVVSTCcsIHVzZVZhbHVlOiBiYXNlVVJMfSxcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIFBob3RvU2VydmljZSxcbiAgICAgICAgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLFxuICAgICAgICBSZXN0YXVyYW50U2VydmljZSxcbiAgICAgICAgUmV2aWV3U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
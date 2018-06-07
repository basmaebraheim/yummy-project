"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/switchMap");
var restaurant_service_1 = require("../services/restaurant.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(restaurantService, baseURL, route, routerExtensions) {
        this.restaurantService = restaurantService;
        this.baseURL = baseURL;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .filter(function (params) { return params.business_id; })
            .switchMap(function (params) { return _this.restaurantService.getRestaurant(params["business_id"]); })
            .subscribe(function (restaurant) { return _this.restaurant = restaurant; }, function (errmess) { _this.restaurant = null; _this.err = errmess; });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
        }),
        __param(1, core_1.Inject("BaseURL")),
        __metadata("design:paramtypes", [restaurant_service_1.RestaurantService, Object, router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0Qsb0NBQWtDO0FBQ2xDLHVDQUFxQztBQUdyQyxxRUFBbUU7QUFPbkU7SUFHSSw2QkFBb0IsaUJBQW9DLEVBQ3pCLE9BQU8sRUFDMUIsS0FBcUIsRUFDckIsZ0JBQWtDO1FBSDFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUssQ0FBQztJQUVwRCxzQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7YUFDckIsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUEzRCxDQUEyRCxDQUFDO2FBQ2xGLFNBQVMsQ0FBQyxVQUFDLFVBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUE1QixDQUE0QixFQUMzQyxVQUFDLE9BQU8sSUFBTyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQWRRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQztRQUtPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURpQixzQ0FBaUIsVUFFckMsdUJBQWM7WUFDSCx5QkFBZ0I7T0FOckMsbUJBQW1CLENBZS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJlc3RhdXJhbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmVzdGF1cmFudC5zZXJ2aWNlJztcbmltcG9ydCB7IElSZXN0YXVyYW50IH0gZnJvbSAnLi4vc2hhcmVkL3Jlc3RhdXJhbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXN0YXVyYW50OiBJUmVzdGF1cmFudDtcbiAgICBlcnI6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RhdXJhbnRTZXJ2aWNlOiBSZXN0YXVyYW50U2VydmljZSxcbiAgICAgICAgQEluamVjdChcIkJhc2VVUkxcIikgcHJpdmF0ZSBiYXNlVVJMLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5maWx0ZXIoKHBhcmFtcykgPT4gcGFyYW1zLmJ1c2luZXNzX2lkKVxuICAgICAgICAuc3dpdGNoTWFwKChwYXJhbXMpID0+IHRoaXMucmVzdGF1cmFudFNlcnZpY2UuZ2V0UmVzdGF1cmFudChwYXJhbXNbXCJidXNpbmVzc19pZFwiXSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3RhdXJhbnQpID0+IHRoaXMucmVzdGF1cmFudCA9IHJlc3RhdXJhbnQsIFxuICAgICAgICAgICAgICAgICAgICAoZXJybWVzcykgPT4geyB0aGlzLnJlc3RhdXJhbnQgPSBudWxsOyB0aGlzLmVyciA9IDxhbnk+ZXJybWVzczsgfSk7XG4gICAgfVxufVxuIl19
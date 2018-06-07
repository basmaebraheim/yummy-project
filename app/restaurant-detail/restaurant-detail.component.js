"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/switchMap");
var restaurant_service_1 = require("../services/restaurant.service");
var reviews_service_1 = require("../services/reviews.service");
var photo_service_1 = require("../services/photo.service");
var RestaurantdetailComponent = (function () {
    function RestaurantdetailComponent(restaurantService, reviewService, photoService, route, routerExtensions, baseURL) {
        this.restaurantService = restaurantService;
        this.reviewService = reviewService;
        this.photoService = photoService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.baseURL = baseURL;
        this.value = 0;
        this.max = 5;
    }
    RestaurantdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.getRestaurants()
            .subscribe(function (res) { return _this.restaurant = res[0]; }, function (err) { return _this.restauranterrMsg = err; });
        this.route.queryParams
            .filter(function (params) { return params.business_id; })
            .switchMap(function (params) { return _this.photoService.getPhoto(params["business_id"]); })
            .subscribe(function (photos) { return _this.photos = photos; }, function (errmsg) { _this.photos = null; _this.photoerrMsg = errmsg; });
        this.route.queryParams
            .filter(function (params) { return params.business_id; })
            .switchMap(function (params) { return _this.reviewService.getReviews(params["business_id"]); })
            .subscribe(function (reviews) {
            _this.reviews = reviews;
        }, function (errmess) { return _this.reviewerrMsg = errmess; });
    };
    RestaurantdetailComponent.prototype.onScrollLoaded = function (args) {
        // scroll to specific position of the horizontal scroll list
        var scrollOffset = 330;
        args.object.scrollToHorizontalOffset(scrollOffset, true);
    };
    RestaurantdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    RestaurantdetailComponent = __decorate([
        core_1.Component({
            selector: "restaurant-detail",
            moduleId: module.id,
            templateUrl: "./restaurant-detail.component.html",
            styleUrls: ['restaurant-detail.component.css']
        }),
        __param(5, core_1.Inject("BaseURL")),
        __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
            reviews_service_1.ReviewService,
            photo_service_1.PhotoService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions, Object])
    ], RestaurantdetailComponent);
    return RestaurantdetailComponent;
}());
exports.RestaurantdetailComponent = RestaurantdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdGF1cmFudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdGF1cmFudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0Qsb0NBQWtDO0FBQ2xDLHVDQUFxQztBQUVyQyxxRUFBbUU7QUFDbkUsK0RBQTREO0FBQzVELDJEQUF5RDtBQWV6RDtJQWNJLG1DQUNvQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2YsT0FBTztRQUwxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBWjlDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztJQWFoQixDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFO2FBQ3RDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixFQUNoQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7YUFDckIsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQzthQUN4RSxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsRUFDL0IsVUFBQyxNQUFNLElBQUssS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVzthQUNyQixNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsV0FBVyxFQUFsQixDQUFrQixDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDZixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLEVBQ0csVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLE9BQU8sRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBRXZELENBQUM7SUFFRCxrREFBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLDREQUE0RDtRQUM1RCxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBckRRLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDO1FBcUJlLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUxTLHNDQUFpQjtZQUNyQiwrQkFBYTtZQUNkLDRCQUFZO1lBQ25CLHVCQUFjO1lBQ0gseUJBQWdCO09BbkI3Qyx5QkFBeUIsQ0FzRHJDO0lBQUQsZ0NBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbmltcG9ydCB7IFJlc3RhdXJhbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Jlc3RhdXJhbnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZXZpZXdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Jldmlld3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQaG90b1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGhvdG8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUmVzdGF1cmFudCB9IGZyb20gXCIuLi9zaGFyZWQvcmVzdGF1cmFudFwiO1xyXG5pbXBvcnQgeyBJUmV2aWV3IH0gZnJvbSBcIi4uL3NoYXJlZC9yZXZpZXdcIjtcclxuaW1wb3J0IHsgSVBob3RvIH0gZnJvbSBcIi4uL3NoYXJlZC9waG90b1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJlc3RhdXJhbnQtZGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXN0YXVyYW50LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3Jlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzdGF1cmFudGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICByZXN0YXVyYW50OiBJUmVzdGF1cmFudDtcclxuICAgIHJldmlld3M6IEFycmF5PElSZXZpZXc+O1xyXG4gICAgcGhvdG9zOiBBcnJheTxJUGhvdG8+O1xyXG4gICAgcmVzdGF1cmFudGVyck1zZzogc3RyaW5nO1xyXG4gICAgcmV2aWV3ZXJyTXNnOiBzdHJpbmc7XHJcbiAgICBwaG90b2Vyck1zZzogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4OiBudW1iZXIgPSA1O1xyXG4gICAgc3RhcnM6IG51bWJlcjtcclxuICAgIHJldmlld2NvdW50OiBudW1iZXI7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVzdGF1cmFudFNlcnZpY2U6IFJlc3RhdXJhbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZXZpZXdTZXJ2aWNlOiBSZXZpZXdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwaG90b1NlcnZpY2U6IFBob3RvU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJhc2VVUkxcIikgcHJpdmF0ZSBiYXNlVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRTZXJ2aWNlLmdldFJlc3RhdXJhbnRzKClcclxuICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMucmVzdGF1cmFudCA9IHJlc1swXSAsXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycikgPT4gdGhpcy5yZXN0YXVyYW50ZXJyTXNnID0gZXJyKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zXHJcbiAgICAgICAgLmZpbHRlcigocGFyYW1zKSA9PiBwYXJhbXMuYnVzaW5lc3NfaWQpXHJcbiAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zKSA9PiB0aGlzLnBob3RvU2VydmljZS5nZXRQaG90byhwYXJhbXNbXCJidXNpbmVzc19pZFwiXSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgocGhvdG9zKSA9PiB0aGlzLnBob3RvcyA9IHBob3RvcyxcclxuICAgICAgICAgICAgICAgICAgICAoZXJybXNnKSA9Pnt0aGlzLnBob3RvcyA9IG51bGw7IHRoaXMucGhvdG9lcnJNc2cgPSBlcnJtc2c7IH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtc1xyXG4gICAgICAgIC5maWx0ZXIoKHBhcmFtcykgPT4gcGFyYW1zLmJ1c2luZXNzX2lkKVxyXG4gICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtcykgPT4gdGhpcy5yZXZpZXdTZXJ2aWNlLmdldFJldmlld3MocGFyYW1zW1wiYnVzaW5lc3NfaWRcIl0pKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJldmlld3MpID0+eyBcclxuICAgICAgICAgICAgdGhpcy5yZXZpZXdzID0gcmV2aWV3cztcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJybWVzcykgPT4gdGhpcy5yZXZpZXdlcnJNc2cgPSA8YW55PmVycm1lc3MpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsTG9hZGVkKGFyZ3MpIHsgXHJcbiAgICAgICAgLy8gc2Nyb2xsIHRvIHNwZWNpZmljIHBvc2l0aW9uIG9mIHRoZSBob3Jpem9udGFsIHNjcm9sbCBsaXN0XHJcbiAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IDMzMDtcclxuICAgICAgICAoPFNjcm9sbFZpZXc+YXJncy5vYmplY3QpLnNjcm9sbFRvSG9yaXpvbnRhbE9mZnNldChzY3JvbGxPZmZzZXQsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
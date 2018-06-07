"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var restaurant_service_1 = require("../../services/restaurant.service");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(page, changeDetectorRef, restaurantService, baseURL) {
        this.page = page;
        this.changeDetectorRef = changeDetectorRef;
        this.restaurantService = restaurantService;
        this.baseURL = baseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.getMostLiked()
            .subscribe(function (popRes) { return _this.popularRestaurants = popRes; }, function (poperr) { return _this.popularErrMsg = poperr; });
        this.restaurantService.getNearby(41.4827824, -81.73622569999999)
            .subscribe(function (nearRes) { return _this.nearbyRestaurants = nearRes; }, function (nearbyerrmsg) { return _this.nearbyErrMsg = nearbyerrmsg; });
    };
    HomeComponent.prototype.onScrollLoaded = function (args) {
        // scroll to specific position of the horizontal scroll list
        var scrollOffset = 330;
        args.object.scrollToHorizontalOffset(scrollOffset, true);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"],
        }),
        __param(3, core_1.Inject("BaseURL")),
        __metadata("design:paramtypes", [page_1.Page,
            core_1.ChangeDetectorRef,
            restaurant_service_1.RestaurantService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUNqRix3RUFBc0U7QUFLdEUsZ0NBQStCO0FBVS9CO0lBT0ksdUJBQW9CLElBQVUsRUFDVixpQkFBbUMsRUFDbkMsaUJBQW9DLEVBQ2pCLE9BQU87UUFIMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBRzlDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLEVBQWhDLENBQWdDLEVBQzNDLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzNELFNBQVMsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLEVBQWhDLENBQWdDLEVBQzVDLFVBQUMsWUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZiw0REFBNEQ7UUFDNUQsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQTFCUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztTQUVyQyxDQUFDO1FBV2UsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBSEosV0FBSTtZQUNRLHdCQUFpQjtZQUNoQixzQ0FBaUI7T0FUL0MsYUFBYSxDQTZCekI7SUFBRCxvQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCAgIENoYW5nZURldGVjdG9yUmVmICwgSW5qZWN0ICwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmVzdGF1cmFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVzdGF1cmFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSZXN0YXVyYW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXN0YXVyYW50XCI7XHJcblxyXG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIHBvcHVsYXJSZXN0YXVyYW50czogQXJyYXk8SVJlc3RhdXJhbnQ+O1xyXG4gICAgcG9wdWxhckVyck1zZzogc3RyaW5nO1xyXG4gICAgbmVhcmJ5UmVzdGF1cmFudHM6IEFycmF5PElSZXN0YXVyYW50PjtcclxuICAgIG5lYXJieUVyck1zZzogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZXN0YXVyYW50U2VydmljZTogUmVzdGF1cmFudFNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChcIkJhc2VVUkxcIikgcHJpdmF0ZSBiYXNlVVJMKSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVzdGF1cmFudFNlcnZpY2UuZ2V0TW9zdExpa2VkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocG9wUmVzKSA9PiB0aGlzLnBvcHVsYXJSZXN0YXVyYW50cyA9IHBvcFJlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBvcGVycikgPT4gdGhpcy5wb3B1bGFyRXJyTXNnID0gcG9wZXJyKTtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRTZXJ2aWNlLmdldE5lYXJieSg0MS40ODI3ODI0LCAtODEuNzM2MjI1Njk5OTk5OTkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKG5lYXJSZXMpID0+IHRoaXMubmVhcmJ5UmVzdGF1cmFudHMgPSBuZWFyUmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobmVhcmJ5ZXJybXNnKSA9PiB0aGlzLm5lYXJieUVyck1zZyA9IG5lYXJieWVycm1zZyk7XHJcbiAgICB9XHJcbiAgICBvblNjcm9sbExvYWRlZChhcmdzKSB7IFxyXG4gICAgICAgIC8vIHNjcm9sbCB0byBzcGVjaWZpYyBwb3NpdGlvbiBvZiB0aGUgaG9yaXpvbnRhbCBzY3JvbGwgbGlzdFxyXG4gICAgICAgIGxldCBzY3JvbGxPZmZzZXQgPSAzMzA7XHJcbiAgICAgICAgKDxTY3JvbGxWaWV3PmFyZ3Mub2JqZWN0KS5zY3JvbGxUb0hvcml6b250YWxPZmZzZXQoc2Nyb2xsT2Zmc2V0LCB0cnVlKTtcclxuICAgIH1cclxuICAgXHJcblxyXG59Il19
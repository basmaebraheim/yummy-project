"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var restaurant_service_1 = require("../../services/restaurant.service");
var page_1 = require("ui/page");
var SearchComponent = (function () {
    function SearchComponent(page, restaurantService, baseURL) {
        this.page = page;
        this.restaurantService = restaurantService;
        this.baseURL = baseURL;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.getRestaurants()
            .subscribe(function (res) { return _this.restaurants = res; }, function (err) { return _this.restaurantErrMsg = err; });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "search",
            moduleId: module.id,
            templateUrl: "./search.component.html",
            styleUrls: ["./search.component.css"],
        }),
        __param(2, core_1.Inject("BaseURL")),
        __metadata("design:paramtypes", [page_1.Page,
            restaurant_service_1.RestaurantService, Object])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFFbkYsd0VBQXNFO0FBR3RFLGdDQUErQjtBQVUvQjtJQUlJLHlCQUFvQixJQUFVLEVBQ1YsaUJBQW9DLEVBQ2pCLE9BQU87UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFFLENBQUM7SUFDakQsa0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRTthQUNsQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBdEIsQ0FBc0IsRUFDOUIsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVhRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBQyxDQUFDLHdCQUF3QixDQUFDO1NBRXZDLENBQUM7UUFPZSxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FGSixXQUFJO1lBQ1Msc0NBQWlCO09BTC9DLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSAsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgUmVzdGF1cmFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVzdGF1cmFudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElSZXN0YXVyYW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yZXN0YXVyYW50XCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vc2VhcmNoLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzICBPbkluaXQge1xyXG4gICAgXHJcbiAgICByZXN0YXVyYW50czogQXJyYXk8SVJlc3RhdXJhbnQ+O1xyXG4gICAgcmVzdGF1cmFudEVyck1zZzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVzdGF1cmFudFNlcnZpY2U6IFJlc3RhdXJhbnRTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCYXNlVVJMXCIpIHByaXZhdGUgYmFzZVVSTCl7fVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRTZXJ2aWNlLmdldFJlc3RhdXJhbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLnJlc3RhdXJhbnRzID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB0aGlzLnJlc3RhdXJhbnRFcnJNc2cgPSBlcnIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iXX0=
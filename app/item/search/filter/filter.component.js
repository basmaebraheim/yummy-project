"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var restaurant_service_1 = require("../../../services/restaurant.service");
var page_1 = require("ui/page");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var filtermodal_component_1 = require("./filtermodal/filtermodal.component");
var FilterComponent = (function () {
    function FilterComponent(modalService, vcRef, page, restaurantService, baseURL) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.page = page;
        this.restaurantService = restaurantService;
        this.baseURL = baseURL;
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.getRestaurants()
            .subscribe(function (res) { return _this.restaurants = res; }, function (err) { return _this.restaurantErrMsg = err; });
    };
    FilterComponent.prototype.createModalView = function () {
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(filtermodal_component_1.FilterModalComponent, options)
            .then(function (result) {
            console.log(result);
        });
    };
    FilterComponent = __decorate([
        core_1.Component({
            selector: "filter",
            moduleId: module.id,
            templateUrl: "./filter.component.html",
            styleUrls: ["./filter.component.css"],
        }),
        __param(4, core_1.Inject("BaseURL")),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page,
            restaurant_service_1.RestaurantService, Object])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFFL0YsMkVBQXlFO0FBR3pFLGdDQUErQjtBQUcvQixrRUFBMkY7QUFDM0YsNkVBQTJFO0FBUTNFO0lBSUkseUJBQW9CLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLElBQVUsRUFDVixpQkFBb0MsRUFDakIsT0FBTztRQUoxQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFFLENBQUM7SUFDakQsa0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRTthQUNsQyxTQUFTLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBdEIsQ0FBc0IsRUFDOUIsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELHlDQUFlLEdBQWY7UUFFSSxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDRDQUFvQixFQUFFLE9BQU8sQ0FBQzthQUNyRCxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUExQlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFDLENBQUMsd0JBQXdCLENBQUM7U0FFdkMsQ0FBQztRQVNlLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUpJLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDakIsV0FBSTtZQUNTLHNDQUFpQjtPQVAvQyxlQUFlLENBNEIzQjtJQUFELHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBSZXN0YXVyYW50U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9yZXN0YXVyYW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVJlc3RhdXJhbnQgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3Jlc3RhdXJhbnRcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgRmlsdGVyTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9maWx0ZXJtb2RhbC9maWx0ZXJtb2RhbC5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJmaWx0ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZpbHRlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vZmlsdGVyLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzICBPbkluaXQge1xyXG4gICAgXHJcbiAgICByZXN0YXVyYW50czogQXJyYXk8SVJlc3RhdXJhbnQ+O1xyXG4gICAgcmVzdGF1cmFudEVyck1zZzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVzdGF1cmFudFNlcnZpY2U6IFJlc3RhdXJhbnRTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoXCJCYXNlVVJMXCIpIHByaXZhdGUgYmFzZVVSTCl7fVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJlc3RhdXJhbnRTZXJ2aWNlLmdldFJlc3RhdXJhbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLnJlc3RhdXJhbnRzID0gcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB0aGlzLnJlc3RhdXJhbnRFcnJNc2cgPSBlcnIpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTW9kYWxWaWV3KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEZpbHRlck1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==
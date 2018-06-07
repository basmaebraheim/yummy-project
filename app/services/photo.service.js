"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var PhotoService = (function () {
    function PhotoService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PhotoService.prototype.getPhoto = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'photo?business_id=' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    PhotoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBob3RvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0Msc0NBQStDO0FBQy9DLDZDQUE0QztBQUM1QyxxRUFBa0U7QUFDbEUsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxtQ0FBaUM7QUFHakM7SUFDSSxzQkFBb0IsSUFBVSxFQUNsQixxQkFBNEM7UUFEcEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUM3RCwrQkFBUSxHQUFSLFVBQVMsRUFBVTtRQUFuQixpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLG9CQUFvQixHQUFHLEVBQUUsQ0FBQzthQUNwRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO2FBQ3pELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBUFEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO1lBQ0ssK0NBQXFCO09BRi9DLFlBQVksQ0FReEI7SUFBRCxtQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGhvdG8gfSBmcm9tICcuLi9zaGFyZWQvcGhvdG8nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcclxuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGhvdG9TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCxcclxuICAgICAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cclxuICAgIGdldFBob3RvKGlkOiBzdHJpbmcpOk9ic2VydmFibGU8QXJyYXk8SVBob3RvPj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdwaG90bz9idXNpbmVzc19pZD0nICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycikpO1xyXG4gICAgfVxyXG59Il19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var RestaurantService = (function () {
    function RestaurantService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    RestaurantService.prototype.getRestaurants = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'restaurants/')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    RestaurantService.prototype.getRestaurant = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'restaurants?business_id=' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    RestaurantService.prototype.getNearby = function (lat, long) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'restaurants?latitude=' + lat + '&longitude=' + long)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    RestaurantService.prototype.getMostLiked = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'restaurants?stars=' + 5)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    RestaurantService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], RestaurantService);
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdGF1cmFudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdGF1cmFudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUErQztBQUMvQyw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBQ2xFLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsbUNBQWlDO0FBR2pDO0lBQ0ksMkJBQW9CLElBQVUsRUFDVixxQkFBNEM7UUFENUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBQ3JFLDBDQUFjLEdBQWQ7UUFBQSxpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLGNBQWMsQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO2FBQ3pELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QseUNBQWEsR0FBYixVQUFjLEVBQVM7UUFBdkIsaUJBSUM7UUFIRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRywwQkFBMEIsR0FBRyxFQUFFLENBQUM7YUFDMUQsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQzthQUN6RCxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELHFDQUFTLEdBQVQsVUFBVSxHQUFVLEVBQUUsSUFBVztRQUFqQyxpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLHVCQUF1QixHQUFHLEdBQUcsR0FBRSxhQUFhLEdBQUUsSUFBSSxDQUFDO2FBQzdFLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUM7YUFDekQsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCx3Q0FBWSxHQUFaO1FBQUEsaUJBSUM7UUFIRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxvQkFBb0IsR0FBRyxDQUFDLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQzthQUN6RCxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXRCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtZQUNhLCtDQUFxQjtPQUZ2RCxpQkFBaUIsQ0F3QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElSZXN0YXVyYW50IH0gZnJvbSAnLi4vc2hhcmVkL3Jlc3RhdXJhbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcclxuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVzdGF1cmFudFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6IFByb2Nlc3NIVFRQTXNnU2VydmljZSkgeyB9XHJcbiAgICBnZXRSZXN0YXVyYW50cygpOk9ic2VydmFibGU8QXJyYXk8SVJlc3RhdXJhbnQ+PntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ3Jlc3RhdXJhbnRzLycpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycikpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzdGF1cmFudChpZDpzdHJpbmcpOk9ic2VydmFibGU8SVJlc3RhdXJhbnQ+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAncmVzdGF1cmFudHM/YnVzaW5lc3NfaWQ9JyArIGlkKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcykpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnIpKTtcclxuICAgIH1cclxuICAgIGdldE5lYXJieShsYXQ6bnVtYmVyLCBsb25nOm51bWJlcik6T2JzZXJ2YWJsZTxBcnJheTxJUmVzdGF1cmFudD4+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAncmVzdGF1cmFudHM/bGF0aXR1ZGU9JyArIGxhdCArJyZsb25naXR1ZGU9JyArbG9uZylcclxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyKSk7XHJcbiAgICB9XHJcbiAgICBnZXRNb3N0TGlrZWQoKTpPYnNlcnZhYmxlPEFycmF5PElSZXN0YXVyYW50Pj57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdyZXN0YXVyYW50cz9zdGFycz0nICsgNSlcclxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyKSk7XHJcbiAgICB9XHJcblxyXG59Il19
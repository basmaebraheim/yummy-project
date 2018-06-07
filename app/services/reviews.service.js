"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var ReviewService = (function () {
    function ReviewService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    ReviewService.prototype.getReviews = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'reviews?business_id=' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (err) { return _this.processHTTPMsgService.handleError(err); });
    };
    ReviewService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmV2aWV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUErQztBQUMvQyw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBQ2xFLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsbUNBQWlDO0FBR2pDO0lBQ0ksdUJBQW9CLElBQVUsRUFDVixxQkFBMkM7UUFEM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7SUFBRSxDQUFDO0lBQ2xFLGtDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQXJCLGlCQUlDO1FBSEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO2FBQ3RELEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUM7YUFDekQsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFQUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUk7WUFDWSwrQ0FBcUI7T0FGdEQsYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElSZXZpZXcgfSBmcm9tICcuLi9zaGFyZWQvcmV2aWV3JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XHJcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJldmlld1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6UHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKXt9XHJcbiAgICBnZXRSZXZpZXdzKGlkOiBzdHJpbmcpOk9ic2VydmFibGU8QXJyYXk8SVJldmlldz4+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAncmV2aWV3cz9idXNpbmVzc19pZD0nICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycikpO1xyXG4gICAgfVxyXG59Il19
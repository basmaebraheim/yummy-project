"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var router_1 = require("@angular/router");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var ItemsComponent = (function () {
    function ItemsComponent(router) {
        this.router = router;
        this.style = "height:0px";
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, "Search", "search", "#f1efef", new nativescript_bottombar_1.Notification("blue", "white", "")),
            new nativescript_bottombar_1.BottomBarItem(1, "Recommend", "recommend", "#f1efef", new nativescript_bottombar_1.Notification("green", "blue", "")),
            new nativescript_bottombar_1.BottomBarItem(2, "Others", "people", "#f1efef", new nativescript_bottombar_1.Notification("pink", "yellow", "")),
            new nativescript_bottombar_1.BottomBarItem(3, "Me", "me", "#f1efef", new nativescript_bottombar_1.Notification("green", "red", ""))
        ];
        this.tabname = "Search";
    }
    ;
    ItemsComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "#5c5553";
        this.accentColor = "#d14216";
    };
    ItemsComponent.prototype.tabSelected = function (args) {
        console.log(args.newIndex);
        if (args.newIndex !== args.oldIndex) {
            this._bar.setNotification("", args.newIndex);
        }
        if (args.newIndex == 0) {
            this.condition = true;
            this.tabname = "Search";
            this.style = "height:0px";
        }
        if (args.newIndex == 1) {
            this.condition = false;
            this.tabname = "Recommend";
            this.style = "height:10%";
        }
        if (args.newIndex == 2) {
            this.tabname = "Others";
            this.style = "height:10%";
        }
        if (args.newIndex == 3) {
            this.tabname = "Me";
            this.style = "height:10%";
        }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./items.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDZEQUF1RDtBQUN2RCxpRUFBNEg7QUFDNUgsMENBQXlDO0FBQ3pDLHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxrQ0FBUyxFQUFULENBQVMsQ0FBQyxDQUFDO0FBUTlDO0lBU0ksd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xDLFVBQUssR0FBVyxZQUFZLENBQUM7UUFFdEIsVUFBSyxHQUF5QjtZQUNqQyxJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFGLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEcsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUkscUNBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGLENBQUM7UUFSa0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7SUFBQSxDQUFDO0lBQUEsQ0FBQztJQVU3RCxrQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSwyQkFBK0IsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQW1DO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzlCLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFFOUIsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUM5QixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBcERRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1NBQ3RDLENBQUM7eUNBVThCLGVBQU07T0FUekIsY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczpbXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuICAgIHB1YmxpYyBjb2xvcmVkOiBib29sZWFuO1xuICAgIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcbiAgICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xuICAgIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIHRhYm5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29uZGl0aW9uOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe3RoaXMudGFibmFtZSA9IFwiU2VhcmNoXCJ9O1xuICAgIHN0eWxlOiBzdHJpbmcgPSBgaGVpZ2h0OjBweGA7XG4gXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJTZWFyY2hcIiwgXCJzZWFyY2hcIiwgXCIjZjFlZmVmXCIsIG5ldyBOb3RpZmljYXRpb24oXCJibHVlXCIsIFwid2hpdGVcIiwgXCJcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIlJlY29tbWVuZFwiLCBcInJlY29tbWVuZFwiLCBcIiNmMWVmZWZcIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwiYmx1ZVwiLCBcIlwiKSksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiT3RoZXJzXCIsIFwicGVvcGxlXCIsIFwiI2YxZWZlZlwiLCBuZXcgTm90aWZpY2F0aW9uKFwicGlua1wiLCBcInllbGxvd1wiLCBcIlwiKSksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDMsIFwiTWVcIiwgXCJtZVwiLCBcIiNmMWVmZWZcIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwicmVkXCIsIFwiXCIpKVxuICAgIF07XG4gXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5TSE9XX1dIRU5fQUNUSVZFO1xuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBcIiM1YzU1NTNcIjtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFwiI2QxNDIxNlwiO1xuICAgIH1cbiAgICBcbiAgICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcblxuICAgICAgICBpZiAoYXJncy5uZXdJbmRleCAhPT0gYXJncy5vbGRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fYmFyLnNldE5vdGlmaWNhdGlvbihcIlwiLCBhcmdzLm5ld0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZihhcmdzLm5ld0luZGV4ID09IDApe1xuICAgICAgICAgICAgdGhpcy5jb25kaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YWJuYW1lID0gXCJTZWFyY2hcIjtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBgaGVpZ2h0OjBweGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXJncy5uZXdJbmRleCA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhYm5hbWUgPSBcIlJlY29tbWVuZFwiO1xuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IGBoZWlnaHQ6MTAlYDtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoYXJncy5uZXdJbmRleCA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMudGFibmFtZSA9IFwiT3RoZXJzXCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gYGhlaWdodDoxMCVgO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFyZ3MubmV3SW5kZXggPT0gMyl7XG4gICAgICAgICAgICB0aGlzLnRhYm5hbWUgPSBcIk1lXCI7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gYGhlaWdodDoxMCVgO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19
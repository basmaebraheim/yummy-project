"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
//import form module
var forms_1 = require("@angular/forms");
var FilterModalComponent = (function () {
    function FilterModalComponent(params, formBuilder, page) {
        this.params = params;
        this.formBuilder = formBuilder;
        this.page = page;
        this.categoryArray = ["Pizza", "Fast food", "Sandwiches", "Breakfast", "Nightlife", "Chineese", "Soupe", "Sea food", "Chicken winges"];
        this.filter = this.formBuilder.group({
            category: '',
            price: false,
            distance: false,
            rating: false,
            cost1: false,
            cost2: false,
            cost3: false,
            cost4: false
        });
    }
    FilterModalComponent.prototype.ngOnInit = function () {
    };
    FilterModalComponent.prototype.select = function (arg) {
        switch (arg) {
            case 'price': {
                //statements; 
                break;
            }
            case 'distance': {
                //statements; 
                break;
            }
            case 'cost1': {
                //statements; 
                break;
            }
            case 'cost2': {
                //statements; 
                break;
            }
            case 'cost3': {
                //statements; 
                break;
            }
            case 'cost4': {
                //statements; 
                break;
            }
        }
    };
    FilterModalComponent.prototype.submit = function () {
        var picker = this.page.getViewById('categoryPicker');
        this.params.closeCallback(this.categoryArray[picker.selectedIndex]);
    };
    FilterModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './filtermodal.component.html',
            styleUrls: ['./filtermodal.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            forms_1.FormBuilder,
            page_1.Page])
    ], FilterModalComponent);
    return FilterModalComponent;
}());
exports.FilterModalComponent = FilterModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVybW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsdGVybW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtFQUFzRTtBQUV0RSxnQ0FBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLHdDQUFtRTtBQVFuRTtJQUtJLDhCQUFvQixNQUF5QixFQUNqQyxXQUF3QixFQUN4QixJQUFVO1FBRkYsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUx0QixrQkFBYSxHQUFDLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXhILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNELHFDQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ04sTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNULEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ1osY0FBYztnQkFDZCxLQUFLLENBQUM7WUFDVCxDQUFDO1lBQ0QsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDZixjQUFjO2dCQUNkLEtBQUssQ0FBQztZQUNULENBQUM7WUFDRCxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUNYLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUFBLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDO1lBQ04sQ0FBQztZQUFBLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDO1lBQ04sQ0FBQztZQUFBLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDO1lBQ04sQ0FBQztRQUNKLENBQUM7SUFHTixDQUFDO0lBQ00scUNBQU0sR0FBYjtRQUNJLElBQUksTUFBTSxHQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBYSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQXJEUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBQyxDQUFDLDZCQUE2QixDQUFDO1NBRTVDLENBQUM7eUNBTThCLGdDQUFpQjtZQUNwQixtQkFBVztZQUNsQixXQUFJO09BUGIsb0JBQW9CLENBc0RoQztJQUFELDJCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSAndWkvbGlzdC1waWNrZXInO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbi8vaW1wb3J0IGZvcm0gbW9kdWxlXHJcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXJtb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6WycuL2ZpbHRlcm1vZGFsLmNvbXBvbmVudC5jc3MnXVxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmaWx0ZXI6IEZvcm1Hcm91cDtcclxuICAgIGNhdGVnb3J5QXJyYXk9W1wiUGl6emFcIiwgXCJGYXN0IGZvb2RcIiwgXCJTYW5kd2ljaGVzXCIsIFwiQnJlYWtmYXN0XCIsIFwiTmlnaHRsaWZlXCIsIFwiQ2hpbmVlc2VcIiwgXCJTb3VwZVwiLCBcIlNlYSBmb29kXCIsIFwiQ2hpY2tlbiB3aW5nZXNcIl07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb3N0MTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb3N0MjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb3N0MzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb3N0NDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2VsZWN0KGFyZyl7XHJcbiAgICAgICAgc3dpdGNoKGFyZykgeyBcclxuICAgICAgICAgICAgY2FzZSAncHJpY2UnOiB7IFxyXG4gICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNhc2UgJ2Rpc3RhbmNlJzogeyBcclxuICAgICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBjYXNlICdjb3N0MSc6IHsgXHJcbiAgICAgICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9Y2FzZSAnY29zdDInOiB7IFxyXG4gICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIH1jYXNlICdjb3N0Myc6IHsgXHJcbiAgICAgICAgICAgIC8vc3RhdGVtZW50czsgXHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgfWNhc2UgJ2Nvc3Q0JzogeyBcclxuICAgICAgICAgICAgLy9zdGF0ZW1lbnRzOyBcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxMaXN0UGlja2VyPignY2F0ZWdvcnlQaWNrZXInKTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMuY2F0ZWdvcnlBcnJheVtwaWNrZXIuc2VsZWN0ZWRJbmRleF0pO1xyXG4gICAgfVxyXG59Il19
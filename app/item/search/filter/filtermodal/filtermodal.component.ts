import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { ListPicker } from 'ui/list-picker';
import { Page } from 'ui/page';
//import form module
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './filtermodal.component.html',
    styleUrls:['./filtermodal.component.css']
    
})
export class FilterModalComponent implements OnInit {
    filter: FormGroup;
    categoryArray=["Pizza", "Fast food", "Sandwiches", "Breakfast", "Nightlife", "Chineese", "Soupe", "Sea food", "Chicken winges"];


    constructor(private params: ModalDialogParams,
        private formBuilder: FormBuilder,
        private page: Page) {
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

    ngOnInit() {

    }
    select(arg){
        switch(arg) { 
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
            }case 'cost2': { 
            //statements; 
            break; 
            }case 'cost3': { 
            //statements; 
            break; 
            }case 'cost4': { 
            //statements; 
            break; 
            }
         } 

        
    }
    public submit() {
        let picker = <ListPicker> this.page.getViewById<ListPicker>('categoryPicker');
        this.params.closeCallback(this.categoryArray[picker.selectedIndex]);
    }
}
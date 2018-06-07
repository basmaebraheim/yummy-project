import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { Router } from '@angular/router';
registerElement('BottomBar', () => BottomBar);
 
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls:["./items.component.css"],
})
export class ItemsComponent {
    public hidden: boolean;
    public colored: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;
    public tabname: string;
    public condition: boolean;
    constructor(private router: Router){this.tabname = "Search"};
    style: string = `height:0px`;
 
    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Search", "search", "#f1efef", new Notification("blue", "white", "")),
        new BottomBarItem(1, "Recommend", "recommend", "#f1efef", new Notification("green", "blue", "")),
        new BottomBarItem(2, "Others", "people", "#f1efef", new Notification("pink", "yellow", "")),
        new BottomBarItem(3, "Me", "me", "#f1efef", new Notification("green", "red", ""))
    ];
 
    tabLoaded(event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "#5c5553";
        this.accentColor = "#d14216";
    }
    
    tabSelected(args: SelectedIndexChangedEventData) {
        console.log(args.newIndex);

        if (args.newIndex !== args.oldIndex) {
            this._bar.setNotification("", args.newIndex);
        }
        if(args.newIndex == 0){
            this.condition = true;
            this.tabname = "Search";
            this.style = `height:0px`;
        }
        if(args.newIndex == 1){
            this.condition = false;
            this.tabname = "Recommend";
            this.style = `height:10%`;
        
        }
        if(args.newIndex == 2){
            this.tabname = "Others";
            this.style = `height:10%`;
        }
        if(args.newIndex == 3){
            this.tabname = "Me";
            this.style = `height:10%`;
        }
    }

}
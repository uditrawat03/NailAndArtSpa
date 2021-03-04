import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-promotions-section',
    templateUrl: './promotions.component.html'
})
export class PromotionsComponent implements OnInit{

    fromDate: string;
    toDate: string;

    ngOnInit(){
        const today = new Date()
        this.fromDate = today.toDateString();
        today.setDate(today.getDate() + 6);
        this.toDate = today.toDateString();
    }
}
import { Component, OnInit } from '@angular/core';
import { ClrSelectedState } from '@clr/angular';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  groceries = [
    {
        name: "Festivals",
        selected: ClrSelectedState.INDETERMINATE,
        items: [
            {
                name: "Diwali",
                selected: ClrSelectedState.UNSELECTED,
            },
            {
                name: "Christmas",
                selected: ClrSelectedState.SELECTED,
            }
        ]
    },
    {
        name: "Vegetables",
        selected: ClrSelectedState.UNSELECTED,
        items: [
            {
                name: "Carrots",
                selected: ClrSelectedState.UNSELECTED,
            },
            {
                name: "Potatoes",
                selected: ClrSelectedState.UNSELECTED,
            },
            {
                name: "Beans",
                selected: ClrSelectedState.UNSELECTED,
            }
        ]
    }
];

getSelectedItems() {
    //this.groceries[1].selected = ClrSelectedState.SELECTED;
    //this.selected.length = 0;
    //this.selected = this.groceries.filter(item => item.selected);
    
    console.log("-----selected-------" + JSON.stringify(this.groceries));
}
}

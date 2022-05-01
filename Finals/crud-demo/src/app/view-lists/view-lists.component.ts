import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../item-listings';

@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {

  items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = ITEMS;
  }

}

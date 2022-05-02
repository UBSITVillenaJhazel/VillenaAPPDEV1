import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { SELLERS } from '../seller-listings';
import { Item } from '../item';
import { ITEMS } from '../item-listings';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {
  sellers = SELLERS;

  selectedSeller?: Seller;

  items = ITEMS;

  selectedItem?: Item;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.selectedSeller = SELLERS.find( selectedSeller => selectedSeller.id === id);
    const id2=this.route.snapshot.paramMap.get('id');
    this.selectedItem = ITEMS.find( selectedItem => selectedItem.id === id2);
  }

}

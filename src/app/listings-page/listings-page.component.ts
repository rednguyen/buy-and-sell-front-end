import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings} from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    // fetch out listings
    this.listingsService.getListings()
      .subscribe(listings => this.listings = listings);
  }

}

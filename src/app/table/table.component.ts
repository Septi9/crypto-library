import { Component, OnInit } from '@angular/core';
import { StockMarketData } from '../models/stock-market.model';
import { StockMarketService } from '../services/stock-market.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private stockMarketService: StockMarketService) {}

  stockMarketData?: StockMarketData[];
  searchText: string = '';

  ngOnInit(): void {
    this.stockMarketService.getData().subscribe((stockMarketData) => this.stockMarketData = stockMarketData);
  }

  ngDoCheck(): void {
    // console.log('data', this.stockMarketData);
  }

  onEnteredTextChanged(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}

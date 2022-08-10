import { Component, OnInit } from '@angular/core';
import { StockMarketData } from './models/stock-market.model';
import { StockMarketService } from './services/stock-market.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private stockMarketService: StockMarketService) {}

  stockMarketData?: StockMarketData[];

  ngOnInit(): void {
    this.stockMarketService.getData().subscribe((stockMarketData) => this.stockMarketData = stockMarketData);
  }

  ngDoCheck(): void {
    console.log('data', this.stockMarketData);
  }
}

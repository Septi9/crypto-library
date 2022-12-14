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

  stockMarketData: StockMarketData[] = [];
  percents: StockMarketData[] = [];
  searchText: string = '';
  greenOrRed?: boolean;
  sortByName?: number = 0;
  sortByPrice?: number = 0;
  sortByMarketCap?: number = 0;
  sortByTotalVolume?: number = 0;
  sortBy24h?: number = 0;
  sortByNameContent?: string = "Sort from A";
  sortByPriceContent?: string = "Highest price";
  sortByMarketCapContent?: string = "Lowest market cap";
  sortByTotalVolumeContent?: string = "Highest total volume";
  sortBy24hContent?: string = "Highest increase";

  //pagination
  COINS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 15, 20];

  ngOnInit(): void {
    this.stockMarketService.getData().subscribe((stockMarketData) => this.stockMarketData = stockMarketData);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.ngOnInit();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
  }

  // ngDoCheck(): void {
  //   console.log(this.stockMarketData)
  // }

  onEnteredTextChanged(searchValue: string) {
    this.searchText = searchValue;
  }

  nameAlphabetically(): number {
    if(this.sortByName == 0) {
      this.stockMarketData.sort((a, b) => a.name.localeCompare(b.name));
      this.sortByNameContent = "Sort from Z"
      this.sortByName++;
      return 0;
    } else if(this.sortByName == 1) {
      this.stockMarketData.sort((a, b) => b.name.localeCompare(a.name));
      this.sortByNameContent = "Initial display"
      this.sortByName++;
      return 0;
    } else if(this.sortByName == 2) {
      this.ngOnInit();
      this.sortByNameContent = "Sort from A"
      this.sortByName = 0;
      return 0;
    } 
      return 0;
  }

  priceSort(): number {
    if(this.sortByMarketCap == 0) {
      this.stockMarketData.sort((a, b) => a.current_price < b.current_price ? 1 : -1);
      this.sortByPriceContent = "Lowest Price";
      this.sortByMarketCap++;
      return 0;
    } else if(this.sortByMarketCap == 1) {
      this.stockMarketData.sort((a, b) => a.current_price > b.current_price ? 1 : -1);
      this.sortByPriceContent = "Initial display";
      this.sortByMarketCap++;
      return 0;
    } else if(this.sortByMarketCap == 2) {
      this.ngOnInit();
      this.sortByPriceContent = "Highest price";
      this.sortByMarketCap = 0;
      return 0;
    }
    return 0;
  }

  marketCapSort(): number {
     if(this.sortByPrice == 0) {
      this.stockMarketData.sort((a, b) => a.market_cap > b.market_cap ? 1 : -1);
      this.sortByMarketCapContent = "Highest market cap";
      this.sortByPrice++;
      return 0;
    } else if(this.sortByPrice == 1) {
      this.ngOnInit();
      this.sortByMarketCapContent = "Lowest market cap";
      this.sortByPrice = 0;
      return 0;
    }
    return 0;
  }

  totalVolumeSort(): number {
    if(this.sortByTotalVolume == 0) {
      this.stockMarketData.sort((a, b) => a.total_volume < b.total_volume ? 1 : -1);
      this.sortByTotalVolumeContent = "Lowest Price";
      this.sortByTotalVolume++;
      return 0;
    } else if(this.sortByTotalVolume == 1) {
      this.stockMarketData.sort((a, b) => a.total_volume > b.total_volume ? 1 : -1);
      this.sortByTotalVolumeContent = "Initial display";
      this.sortByTotalVolume++;
      return 0;
    } else if(this.sortByTotalVolume == 2) {
      this.ngOnInit();
      this.sortByTotalVolumeContent = "Highest price";
      this.sortByTotalVolume = 0;
      return 0;
    }
    return 0;
  }

  dailySort(): number {
    if(this.sortBy24h == 0) {
      this.stockMarketData.sort((a, b) => a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1);
      this.sortBy24hContent = "Lowest Price";
      this.sortBy24h++;
      return 0;
    } else if(this.sortBy24h == 1) {
      this.stockMarketData.sort((a, b) => a.price_change_percentage_24h > b.price_change_percentage_24h ? 1 : -1);
      this.sortBy24hContent = "Initial display";
      this.sortBy24h++;
      return 0;
    } else if(this.sortBy24h == 2) {
      this.ngOnInit();
      this.sortBy24hContent = "Highest price";
      this.sortBy24h = 0;
      return 0;
    }
    return 0;
  }
}

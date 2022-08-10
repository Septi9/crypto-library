import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StockMarketData } from '../models/stock-market.model';

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  constructor(private http: HttpClient){ }

  getData(): Observable<StockMarketData[]>  {
    return this.http.get<StockMarketData[]>(environment.stockMarketBaseUrl);
  }
}

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { RecentOrders } from '../model/recent-orders.interface';

@Injectable({
  providedIn: 'root'
})
export class RecentOrdersService {

  constructor(private http: HttpClient) {}

  public getRecentOrders(): Observable<Array<RecentOrders>> {
    return this.http
      .get('https://1.api.fy23ey05.careers.ifelsecloud.com/')
      .pipe(
        map((x:any) => {
          return x['recent_orders'];
        }),
       
      );
  }
}
 
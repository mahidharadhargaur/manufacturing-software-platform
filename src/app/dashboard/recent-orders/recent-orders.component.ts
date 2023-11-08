import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopCardsService } from 'src/app/service/top-cards.service';
import { RecentOrders } from 'src/app/model/recent-orders.interface';
import { RecentOrdersService } from 'src/app/service/recent-orders.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
  

  public recentOrders: Observable<Array<RecentOrders>> = of([]);
  constructor(private recentOrderService: RecentOrdersService) { }

  ngOnInit() {
    this.getTileData();
  }

  private getTileData(): void {
    this.recentOrders = this.recentOrderService.getRecentOrders();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardTiles } from '../model/dashboard-tiles.interface';

@Injectable({
  providedIn: 'root'
})
export class TopCardsService {

  constructor(private http: HttpClient) {}

  public getTiles(): Observable<Array<DashboardTiles>> {
    return this.http
      .get('https://1.api.fy23ey05.careers.ifelsecloud.com/')
      .pipe(
        map((x:any) => {
          return x['top_cards'];
        }),
        map((x) => {
          return x.map((item:any) => {
            return {
              ...item,
              subHeader: item['sub_header'],
              icon: 'music_note'
            };
          });
        })
      );
  }
}


import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopCardsService } from 'src/app/service/top-cards.service';
import { DashboardTiles } from 'src/app/model/dashboard-tiles.interface';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.scss']
})
export class DashboardTilesComponent implements OnInit {
  @Input() public value: number = 0;
  @Input() public header: string = '';
  @Input() public subHeader: string = '';
  @Input() public icon: string = '';

  public tiles: Observable<Array<DashboardTiles>> = of([
    {
      icon: 'music_note',
      value: 30,
      header: 'sdkfjalskdjfasdfa',
      subHeader: 'asdlkfjasd fklasdf a',
    },
  ]);
  constructor(private tilesService: TopCardsService) {}

  ngOnInit() {
    this.getTileData();
  }

  private getTileData(): void {
    this.tiles = this.tilesService.getTiles();
  }


}



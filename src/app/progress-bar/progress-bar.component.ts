import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number = 0;
  color: string = '#cccccc';

  ngOnInit(): void {
    this.initColor();
  }

  initColor(): void {
    if (this.value > 20 && this.value < 40) {
      this.color = '#00008b';
    }
    if (this.value >=40 && this.value <60){
      this.color = '#ffa500';
    }
    if (this.value >=60 && this.value <80){
      this.color = '#ffff00';
    }
    if (this.value >=80 && this.value <100){
      this.color = '#506de2';
    }
  }
}

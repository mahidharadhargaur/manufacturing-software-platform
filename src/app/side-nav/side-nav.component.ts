import { Component } from '@angular/core';
import { faChartSimple, faCopy, faGear, faCube, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faCube = faCube;
  faChartSimple = faChartSimple;
  faCopy = faCopy;
  faCheck = faCheck;
  faGear = faGear;
  faDownload = faDownload;
}


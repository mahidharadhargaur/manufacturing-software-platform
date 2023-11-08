import { Component } from '@angular/core';
import { faSearch, faMagnifyingGlass, faCaretDown, faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  fasearch = faSearch;
  famagnifyingglass = faMagnifyingGlass;
  facaretdown = faCaretDown;
  facommentdots =faCommentDots;
  fabell = faBell;

}

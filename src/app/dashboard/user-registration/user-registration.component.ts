import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopCardsService } from 'src/app/service/top-cards.service';
import { NewUsers } from 'src/app/model/new-users.interface';
import { NewUsersService } from 'src/app/service/new-users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public users: Observable<Array<NewUsers>> = of([

  ]);
  constructor(private userService: NewUsersService) { }

  ngOnInit() {
    this.getUserData();
  }

  private getUserData(): void {
    this.users = this.userService.getUser();
  }

}



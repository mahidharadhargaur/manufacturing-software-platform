import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { NewUsers } from '../model/new-users.interface';


@Injectable({
  providedIn: 'root'
})
export class NewUsersService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<Array<NewUsers>> {
    return this.http
      .get('https://1.api.fy23ey05.careers.ifelsecloud.com/')
      .pipe(
        map((x: any) => {
          return x['new_users'];
        }),
      );
  }
}


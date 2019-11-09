import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [{
      firstName: 'Alex',
      lastName: 'Ivanov',
      email: 'shmalexander@gmail.com',
      image: 'http://lorempixel.com/600/600/people/3',
      isactive: true,
      registered: new Date('01/02/2018 08:30:00'),
      hide: true
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'alexfrom@hotmail.com',
      image: 'http://lorempixel.com/600/600/people/1',
      isactive: false,
      registered: new Date('11/03/2017 11:30:00'),
      hide: true
    },
    {
      firstName: 'Dmitri',
      lastName: 'Pupkin',
      email: 'dp@gmail.com',
      image: 'http://lorempixel.com/600/600/people/2',
      isactive: true,
      registered: new Date('09/10/2018 11:30:00'),
      hide: true
    }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }
}

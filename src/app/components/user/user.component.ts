import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  user: User;

  constructor() {
  }

  ngOnInit() {
    // this.user = {
    //   firstName: 'Alex',
    //   lastName: 'Ivanov',
    //   address: {
    //     street: 'olei HaGardom 48',
    //     city: 'Rishon',
    //     country: 'Israel'
    //   }
    // };
  }
}

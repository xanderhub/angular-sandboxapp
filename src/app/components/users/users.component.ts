import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentStyles: {};
  showUserForm: boolean = false;
  @ViewChild('userForm', { static: false }) form: any;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this.loaded = true;
    this.setCurrentStyles();

  }

  addUser() {
    this.user.isactive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '35'
    };
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Frm is not valid');
    } else {
      value.isactive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  nonSubmit() {
    console.log('no submit');
  }
}

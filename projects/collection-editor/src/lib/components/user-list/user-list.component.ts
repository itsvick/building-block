import { Component, OnInit } from '@angular/core';
import filter from 'lodash-es/filter'

@Component({
  selector: 'lib-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  adultUsers: any = [];
  users = [
    {
      name: 'John Doe',
      age: 21,
      address: 'US'
    },
    {
      name: 'James Jonas',
      age: 15,
      address: 'Germany'
    },
    {
      name: 'Ashok Kumar',
      age: 25,
      address: 'India'
    },
    {
      name: 'Asama Shaikh',
      age: 22,
      address: 'Pakistan'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.adultUsers = filter(this.users, (user) => user.age > 18);
    console.log("adultUsers", this.adultUsers);
  }

}

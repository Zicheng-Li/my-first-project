import { Component, OnInit } from '@angular/core';
import { SalePerson } from './sale-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sale person objects

  salesPersonsList : SalePerson[] = [
    new SalePerson('Raj','Mumbai',"email@rbc.com",10000),
    new SalePerson('fff','dfdfd',"fmail@rbc.com",10),
    new SalePerson('wwww','qqqq',"qmail@rbc.com",440),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

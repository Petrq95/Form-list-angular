import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Yanni' },
    { id: 3, name: 'Susan' },
    { id: 4, name: 'Sandy' }
  ];


  constructor() { }

  ngOnInit() {
  }
  deletePerson(id: number) {
    this.persons = this.persons.filter(person => person.id !== id);
  }
  }

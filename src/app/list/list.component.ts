import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
persons;


  constructor() { }

  ngOnInit() {
    this.persons = [
      { name: 'Peter' },
      { name: 'Yanni' },
      { name: 'Susan' },
      { name: 'Sandy' }
    ];
  }
  deletePerson(name){
      console.log(name)

      for(let i=0; i < this.persons.length; i++) {
        
      if(this.persons[i]["name"] == name){
        this.persons.splice(i, 1);
      }
    }
  }

}

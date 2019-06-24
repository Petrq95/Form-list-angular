import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const persons = [
      { id: 1, name: 'Peter' },
      { id: 2, name: 'Yanni' },
      { id: 3, name: 'Susan' },
      { id: 4, name: 'Sally' },
    ];
    return { persons };
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Observable<any[]> {
    return of([
      { id: 1, name: 'Pasta', description: 'Deliciosa pasta con salsa de tomate', price: 10 },
      { id: 2, name: 'Pizza', description: 'Pizza con ingredientes frescos', price: 12 },
    ]);
  }
}

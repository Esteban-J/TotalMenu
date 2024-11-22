import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Interfaz de los artículos del pedido
interface OrderItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderItemsSubject = new BehaviorSubject<OrderItem[]>([]); // Lista de artículos
  orderItems$ = this.orderItemsSubject.asObservable(); // Observable para que otros componentes se suscriban

  // Obtener los artículos del pedido
  getOrderItems() {
    return this.orderItemsSubject.value;
  }

  // Agregar un artículo al pedido
  addItem(item: OrderItem) {
    const currentItems = this.orderItemsSubject.value;
    const existingItem = currentItems.find(i => i.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1; // Si ya existe, incrementar la cantidad
    } else {
      currentItems.push(item); // Si no existe, añadir un nuevo artículo
    }

    this.orderItemsSubject.next([...currentItems]); // Actualizar el estado
  }

  // Limpiar el pedido
  clearOrder() {
    this.orderItemsSubject.next([]); // Limpiar la lista de artículos
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar el módulo común
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel

// Definir la interfaz para los elementos del pedido
interface OrderItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

// Definir la interfaz para los elementos del menú
interface MenuItem {
  name: string;
  description: string;
  price: number;
}

// Definir la interfaz para las categorías del menú
interface MenuCategory {
  name: string;
  items: MenuItem[];
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegurarse de incluir FormsModule
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css'],
})
export class MenuDisplayComponent {
  // Definir el array de items del pedido con el tipo adecuado
  orderItems: OrderItem[] = [
    { name: 'Pizza', description: 'Cheese and tomato', price: 10, quantity: 1 },
    { name: 'Burger', description: 'Beef with lettuce', price: 8, quantity: 2 }
  ];
  orderNotes = '';

  // Definir categorías de menú con tipo adecuado
  menuCategories: MenuCategory[] = [
    { name: 'Main', items: [] },
    { name: 'Desserts', items: [] },
    { name: 'Drinks', items: [] },
    { name: 'Side dishes', items: [] },
    { name: 'Label', items: [] }
  ];

  // Asignar una categoría seleccionada
  selectedCategory: MenuCategory = this.menuCategories[0];

  selectCategory(category: MenuCategory) {
    this.selectedCategory = category;
  }

  prevCategory() {
    const currentIndex = this.menuCategories.indexOf(this.selectedCategory);
    this.selectedCategory =
      this.menuCategories[(
        currentIndex - 1 + this.menuCategories.length) %
        this.menuCategories.length
      ];
  }

  nextCategory() {
    const currentIndex = this.menuCategories.indexOf(this.selectedCategory);
    this.selectedCategory =
      this.menuCategories[(currentIndex + 1) % this.menuCategories.length];
  }

  addItem(item: MenuItem) {
    console.log('Adding item:', item);
  }

  editItem(item: OrderItem) {
    console.log('Editing item:', item);
  }

  deleteItem(item: OrderItem) {
    this.orderItems = this.orderItems.filter((i) => i !== item);
  }

  cancelOrder() {
    console.log('Order canceled');
  }

  confirmOrder() {
    console.log('Order confirmed');
  }
}

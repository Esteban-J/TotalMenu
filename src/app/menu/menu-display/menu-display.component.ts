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

  // Datos iniciales para las categorías
  menuCategories: MenuCategory[] = [
    {
      name: 'Main',
      items: [
        { name: 'Pizza', description: 'Cheese and tomato', price: 10 },
        { name: 'Burger', description: 'Beef with lettuce', price: 8 }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'IceCream', description: 'Vanilla scoop', price: 5 },
        { name: 'Cake', description: 'Chocolate cake slice', price: 4 }
      ]
    },
    {
      name: 'Drinks',
      items: [
        { name: 'Soda', description: 'Coke or Pepsi', price: 2 },
        { name: 'Water', description: 'Bottled water', price: 1 }
      ]
    },
    {
      name: 'Side dishes',
      items: [
        { name: 'Fries', description: 'French fries', price: 3 },
        { name: 'Salad', description: 'Fresh salad', price: 4 }
      ]
    },
    {
      name: 'Label',
      items: [
        { name: 'Special', description: 'Chef special of the day', price: 15 }
      ]
    }
  ];

  // Asignar una categoría seleccionada
  selectedCategory: MenuCategory = this.menuCategories[0];

  selectCategory(category: MenuCategory) {
    this.selectedCategory = category;
  }
  
  // Calcular el precio total del pedido
  get totalPrice(): number {
    return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Calcular la cantidad total de artículos en el pedido
  get totalQuantity(): number {
    return this.orderItems.reduce((total, item) => total + item.quantity, 0);
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
    // Buscar si el artículo ya está en el pedido
    const existingItem = this.orderItems.find(orderItem => orderItem.name === item.name);
  
    if (existingItem) {
      // Incrementar la cantidad si ya existe
      existingItem.quantity += 1;
    } else {
      // Añadir como un nuevo artículo
      this.orderItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: 1
      });
    }
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

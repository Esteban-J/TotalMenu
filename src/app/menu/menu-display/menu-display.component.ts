import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar el módulo común

@Component({
  standalone: true,
  imports: [CommonModule], // Asegurarse de incluir CommonModule
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css'],
})
export class MenuDisplayComponent {
  categories = [
    { name: 'Starters', items: [{ name: 'Soup', description: 'A warm soup', price: 5 }] },
    {
      name: 'Main Course',
      items: [
        { name: 'Steak', description: 'Juicy grilled steak', price: 15 },
        { name: 'Pasta', description: 'Creamy Alfredo pasta', price: 12 },
      ],
    },
    { name: 'Desserts', items: [{ name: 'Ice Cream', description: 'Vanilla scoop', price: 3 }] },
  ];

  selectedCategory: { name: string; items: any[] } | null = null;

  selectCategory(category: { name: string; items: any[] }) {
    this.selectedCategory = category;
  }
}

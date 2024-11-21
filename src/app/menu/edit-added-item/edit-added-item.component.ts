import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

interface OrderItem {
  name: string;
  description: string,
  price: number,
  quantity: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-edit-added-item',
  templateUrl: './edit-added-item.component.html',
  styleUrls: ['./edit-added-item.component.css'],
})
export class EditAddedItemComponent {
  @Input() item: OrderItem = { name: '', description: '', price: 0, quantity: 1 };
   // Recibir el ítem desde el componente padre
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<OrderItem>();

  saveChanges() {
    this.onSave.emit(this.item); // Emitir el ítem actualizado al componente padre
    this.closeModal();
  }

  closeModal() {
    this.onClose.emit(); // Cerrar la ventana emergente
  }
}

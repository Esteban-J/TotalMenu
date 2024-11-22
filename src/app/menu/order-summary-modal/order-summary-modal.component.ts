import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-order-summary-modal',
  imports: [CommonModule],
  template: `
    <div class="modal-overlay">
      <div class="modal-container">
        <h2>Order Summary</h2>
        <div *ngFor="let item of orderItems" class="order-item">
          <p>{{ item.name }} (x{{ item.quantity }}) - {{ item.price * item.quantity | currency }}</p>
        </div>
        <div class="order-total">
          <strong>Total: {{ totalPrice | currency }}</strong>
        </div>
        <div class="modal-actions">
          <button (click)="confirmOrder()">Confirm</button>
          <button (click)="cancelOrder()">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal-container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 400px;
        text-align: center;
      }
      .order-item {
        margin: 5px 0;
      }
      .order-total {
        margin-top: 15px;
        font-size: 1.2em;
      }
      .modal-actions {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
      }
      button {
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
      }
    `,
  ],
})
export class OrderSummaryModalComponent {
  @Input() orderItems: { name: string; quantity: number; price: number }[] = [];
  @Input() totalPrice: number = 0;

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  confirmOrder() {
    this.onConfirm.emit();
  }

  cancelOrder() {
    this.onCancel.emit();
  }
}

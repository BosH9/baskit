import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'baskit-order-info',
  imports: [CommonModule],
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderInfoComponent {}

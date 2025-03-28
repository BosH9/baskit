import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'baskit-home',
  imports: [CommonModule, SliderComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

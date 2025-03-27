import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { Carousel } from 'primeng/carousel';
import { Button } from 'primeng/button';

@Component({
  selector: 'baskit-slider',
  imports: [CommonModule, Image, Carousel, Button],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  public images = [
    { source: '2880x900/0b52de/fff&text=Blazers+and+Sport+Coats+Cylias' },
    { source: '2880x900/d42dd4/fff&text=Jeans+Madame' },
    { source: '2880x900/e00b28/fff&text=Sweater+Nadia' },
    { source: '2880x900/57886c/fff&text=T-Shirt+Nanzo' },
    { source: '2880x900/000/fff&text=Coat+Buck' },
  ];
}

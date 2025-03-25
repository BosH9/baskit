import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'baskit-nx-welcome',
  imports: [CommonModule],
  template: ` <div class="bg-gray-100 p-4">
    <h1 class="text-3xl font-bold underline text-red-500 bg-red-500 ">
      Hello world!
    </h1>

    <i class="pi pi-check"></i>
    <i class="pi pi-times"></i>
    <span class="pi pi-search"></span>
    <span class="pi pi-user"></span>
  </div>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

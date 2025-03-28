import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '@baskit/api';
import { from } from 'rxjs';

@Component({
  selector: 'baskit-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private _productsService = inject(ProductsService);

  constructor() {
    // this.getProducts();
    this.getArticles();
  }

  public getProducts() {
    from(this._productsService.getProducts('Apparel')).subscribe((res) =>
      console.log(res)
    );
  }

  public getArticles() {
    from(this._productsService.getArticles('Apparel')).subscribe((res) =>
      console.log(res)
    );
  }
}

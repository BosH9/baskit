import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoriesService, CategoryTypes } from '@baskit/api';
import { removeSpecialCharactersConvertToLowerCase } from '@baskit/utils';
import { Card } from 'primeng/card';
import { from, map } from 'rxjs';

@Component({
  selector: 'baskit-categories',
  imports: [CommonModule, Card],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categoriesService = inject(CategoriesService);
  public categories: CategoryTypes[] = [];

  constructor() {
    this.getCategories();
  }
  getCategories() {
    const categories = from(this.categoriesService.getCategories());

    // categories.subscribe((res) => {
    //   if (res) {
    //     this.categories = res
    //       .sort((category, c2) => category.category.localeCompare(c2.category))
    //       .map((category) => {
    //         category.path = removeSpecialCharactersWithLowerCase(
    //           category.category
    //         );
    //         return category;
    //       });
    //     console.log(this.categories);
    //   }
    // });

    categories
      .pipe(
        map((categories: CategoryTypes[]) => {
          categories.map(
            (category) =>
              (category.path = removeSpecialCharactersConvertToLowerCase(
                category.category
              ))
          );
          categories.sort((category, c2) =>
            category.category.localeCompare(c2.category)
          );
          return categories;
        })
      )
      .subscribe((res) => (this.categories = res));
  }
}

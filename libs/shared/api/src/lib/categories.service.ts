import { Injectable } from '@angular/core';
import { createClient, QueryData } from '@supabase/supabase-js';
import { Database, Tables, Enums } from '@baskit/data-models';
import { Api } from './api';

export interface CategoryTypes {
  category: string;
  path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends Api {
  public async getCategories() {
    const query = this.supabase
      .from('get_categories')
      .select('category')
      .overrideTypes<Array<CategoryTypes>, { merge: false }>();

    type categoriesType = QueryData<typeof query>;

    const { data, error } = await query;
    if (error) throw error;
    const categories: categoriesType = data;
    return categories;
  }
}

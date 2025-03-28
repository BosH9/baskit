import { Injectable } from '@angular/core';
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js';
import { Api } from './api';
import { Tables } from '@baskit/data-models';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends Api {
  public async getProducts(category: string) {
    const productsQuery = this.supabase
      .from('products')
      .select(
        `
      id,
      name,
      category,
      labelid (
        id,
        name,
        slugname
      )
    `
      )
      .eq('category', category);
    type products = QueryData<typeof productsQuery>;
    const { data, error } = await productsQuery;
    if (error) throw error;
    const PRODUCTS: products = data;
    return PRODUCTS;

    // const { data, error } = await this.supabase.from('products').select('*');
    // if (error) throw error;
    // const categories = data;
    // return categories;

    // return this.supabase.from('products').select('*');
  }

  public async getArticles(category: string) {
    const articlesQuery = this.supabase
      .from('articles')
      .select(
        `
      id,
      productid!inner (
        id,
        name,
        category,
        labelid (
          id,
          name,
          slugname
        )
      ),
      ean,
      colorid (
        id,
        name,
        rgb
      ),
      size (
        id,
        gender,
        category,
        size
      ),
      description,
      originalprice,
      reducedprice,
      taxrate,
      discountinpercent
    `
      )
      .eq('productid.category', category)
      .limit(100);
    type articles = QueryData<typeof articlesQuery>;
    const { data, error } = await articlesQuery;
    if (error) throw error;
    const ARTICLEȘ: articles = data;
    return ARTICLEȘ;

    //   .select(
    //     `
    //   id,
    //   productid(
    //     id,
    //     name,
    //     category,
    //     labelid (
    //       id,
    //       name,
    //       slugname
    //     )
    //   ),
    //   ean,
    //   colorid(
    //     id,
    //     name,
    //     rgb),
    //   size(
    //     id,
    //     gender,
    //     catergory,
    //     size
    //   ),
    //   description,
    //   originalprice,
    //   reducedprice,
    //   taxrate,
    //   discountinpercent,
    // `
    //   )
  }
}

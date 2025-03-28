export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  api: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      address: {
        Row: {
          address1: string | null;
          address2: string | null;
          city: string | null;
          created: string | null;
          customerid: string;
          firstname: string | null;
          id: number;
          lastname: string | null;
          updated: string | null;
          zip: string | null;
        };
        Insert: {
          address1?: string | null;
          address2?: string | null;
          city?: string | null;
          created?: string | null;
          customerid: string;
          firstname?: string | null;
          id?: number;
          lastname?: string | null;
          updated?: string | null;
          zip?: string | null;
        };
        Update: {
          address1?: string | null;
          address2?: string | null;
          city?: string | null;
          created?: string | null;
          customerid?: string;
          firstname?: string | null;
          id?: number;
          lastname?: string | null;
          updated?: string | null;
          zip?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'address_customerid_fkey';
            columns: ['customerid'];
            isOneToOne: false;
            referencedRelation: 'customer';
            referencedColumns: ['id'];
          }
        ];
      };
      articles: {
        Row: {
          colorid: number | null;
          created: string | null;
          currentlyactive: boolean | null;
          description: string | null;
          discountinpercent: number | null;
          ean: string | null;
          id: number;
          originalprice: unknown | null;
          productid: number | null;
          reducedprice: unknown | null;
          size: number | null;
          taxrate: number | null;
          updated: string | null;
        };
        Insert: {
          colorid?: number | null;
          created?: string | null;
          currentlyactive?: boolean | null;
          description?: string | null;
          discountinpercent?: number | null;
          ean?: string | null;
          id?: number;
          originalprice?: unknown | null;
          productid?: number | null;
          reducedprice?: unknown | null;
          size?: number | null;
          taxrate?: number | null;
          updated?: string | null;
        };
        Update: {
          colorid?: number | null;
          created?: string | null;
          currentlyactive?: boolean | null;
          description?: string | null;
          discountinpercent?: number | null;
          ean?: string | null;
          id?: number;
          originalprice?: unknown | null;
          productid?: number | null;
          reducedprice?: unknown | null;
          size?: number | null;
          taxrate?: number | null;
          updated?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'articles_colorid_fkey';
            columns: ['colorid'];
            isOneToOne: false;
            referencedRelation: 'colors';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_articles_products';
            columns: ['productid'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'fk_articles_sizes';
            columns: ['size'];
            isOneToOne: false;
            referencedRelation: 'sizes';
            referencedColumns: ['id'];
          }
        ];
      };
      colors: {
        Row: {
          id: number;
          name: string | null;
          rgb: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          rgb?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          rgb?: string | null;
        };
        Relationships: [];
      };
      customer: {
        Row: {
          created: string | null;
          currentaddressid: number | null;
          dateofbirth: string | null;
          email: string | null;
          firstname: string | null;
          gender: Database['public']['Enums']['gender'] | null;
          id: string;
          lastname: string | null;
          updated: string | null;
        };
        Insert: {
          created?: string | null;
          currentaddressid?: number | null;
          dateofbirth?: string | null;
          email?: string | null;
          firstname?: string | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id: string;
          lastname?: string | null;
          updated?: string | null;
        };
        Update: {
          created?: string | null;
          currentaddressid?: number | null;
          dateofbirth?: string | null;
          email?: string | null;
          firstname?: string | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id?: string;
          lastname?: string | null;
          updated?: string | null;
        };
        Relationships: [];
      };
      dummy: {
        Row: {
          created_at: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      labels: {
        Row: {
          icon: string | null;
          id: number;
          name: string | null;
          slugname: string | null;
        };
        Insert: {
          icon?: string | null;
          id?: number;
          name?: string | null;
          slugname?: string | null;
        };
        Update: {
          icon?: string | null;
          id?: number;
          name?: string | null;
          slugname?: string | null;
        };
        Relationships: [];
      };
      order: {
        Row: {
          created: string | null;
          customer: string;
          id: number;
          ordertimestamp: string | null;
          shippingaddressid: number;
          shippingcost: unknown | null;
          total: unknown | null;
          updated: string | null;
        };
        Insert: {
          created?: string | null;
          customer: string;
          id?: number;
          ordertimestamp?: string | null;
          shippingaddressid: number;
          shippingcost?: unknown | null;
          total?: unknown | null;
          updated?: string | null;
        };
        Update: {
          created?: string | null;
          customer?: string;
          id?: number;
          ordertimestamp?: string | null;
          shippingaddressid?: number;
          shippingcost?: unknown | null;
          total?: unknown | null;
          updated?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'order_customer_fkey';
            columns: ['customer'];
            isOneToOne: false;
            referencedRelation: 'customer';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'order_shippingaddressid_fkey';
            columns: ['shippingaddressid'];
            isOneToOne: false;
            referencedRelation: 'address';
            referencedColumns: ['id'];
          }
        ];
      };
      order_positions: {
        Row: {
          amount: number | null;
          articleid: number | null;
          created: string | null;
          id: number;
          orderid: number | null;
          price: unknown | null;
          updated: string | null;
        };
        Insert: {
          amount?: number | null;
          articleid?: number | null;
          created?: string | null;
          id?: number;
          orderid?: number | null;
          price?: unknown | null;
          updated?: string | null;
        };
        Update: {
          amount?: number | null;
          articleid?: number | null;
          created?: string | null;
          id?: number;
          orderid?: number | null;
          price?: unknown | null;
          updated?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'order_positions_articleid_fkey';
            columns: ['articleid'];
            isOneToOne: false;
            referencedRelation: 'articles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'order_positions_orderid_fkey';
            columns: ['orderid'];
            isOneToOne: false;
            referencedRelation: 'order';
            referencedColumns: ['id'];
          }
        ];
      };
      products: {
        Row: {
          category: Database['public']['Enums']['category'] | null;
          created: string | null;
          currentlyactive: boolean | null;
          gender: Database['public']['Enums']['gender'] | null;
          id: number;
          labelid: number | null;
          name: string | null;
          updated: string | null;
        };
        Insert: {
          category?: Database['public']['Enums']['category'] | null;
          created?: string | null;
          currentlyactive?: boolean | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id?: number;
          labelid?: number | null;
          name?: string | null;
          updated?: string | null;
        };
        Update: {
          category?: Database['public']['Enums']['category'] | null;
          created?: string | null;
          currentlyactive?: boolean | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id?: number;
          labelid?: number | null;
          name?: string | null;
          updated?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'products_labelid_fkey';
            columns: ['labelid'];
            isOneToOne: false;
            referencedRelation: 'labels';
            referencedColumns: ['id'];
          }
        ];
      };
      sizes: {
        Row: {
          category: Database['public']['Enums']['category'] | null;
          gender: Database['public']['Enums']['gender'] | null;
          id: number;
          size: string | null;
          size_eu: unknown | null;
          size_uk: unknown | null;
          size_us: unknown | null;
        };
        Insert: {
          category?: Database['public']['Enums']['category'] | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id?: number;
          size?: string | null;
          size_eu?: unknown | null;
          size_uk?: unknown | null;
          size_us?: unknown | null;
        };
        Update: {
          category?: Database['public']['Enums']['category'] | null;
          gender?: Database['public']['Enums']['gender'] | null;
          id?: number;
          size?: string | null;
          size_eu?: unknown | null;
          size_uk?: unknown | null;
          size_us?: unknown | null;
        };
        Relationships: [];
      };
      stock: {
        Row: {
          articleid: number | null;
          count: number | null;
          created: string | null;
          id: number;
          updated: string | null;
        };
        Insert: {
          articleid?: number | null;
          count?: number | null;
          created?: string | null;
          id?: number;
          updated?: string | null;
        };
        Update: {
          articleid?: number | null;
          count?: number | null;
          created?: string | null;
          id?: number;
          updated?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'stock_articleid_fkey';
            columns: ['articleid'];
            isOneToOne: false;
            referencedRelation: 'articles';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      get_categories: {
        Row: {
          category: Database['public']['Enums']['category'] | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      category:
        | 'Apparel'
        | 'Footwear'
        | 'Sportswear'
        | 'Traditional'
        | 'Formal Wear'
        | 'Accessories'
        | 'Watches & Jewelry'
        | 'Luggage'
        | 'Cosmetics';
      gender: 'male' | 'female' | 'unisex';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
  ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never;

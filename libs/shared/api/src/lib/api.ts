import { createClient } from '@supabase/supabase-js';

export abstract class Api {
  public supabase = createClient(
    'https://gwzrjirekruiexamwyjj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3enJqaXJla3J1aWV4YW13eWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MTE5NzEsImV4cCI6MjA1Nzk4Nzk3MX0.k3zQrY-NJNHhOJCniNFyfU3AoYzYSnu5e1rYXbgZRNg'
  );
}

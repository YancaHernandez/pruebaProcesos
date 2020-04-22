import { BaseInterface } from './base-interface';
import { Category } from './category';

export interface Product extends BaseInterface {
  id?: string;
  category: Category;
  code: string;
  name: string;
  price: number;
  description: string;
  status: boolean;
}

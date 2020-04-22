import { BaseInterface } from './base-interface';

export interface Category extends BaseInterface {
  name?: string;
  description?: string;
  status?: boolean;
}

import { BaseInterface } from './base-interface';

export interface Role extends BaseInterface {
  name: string;
  description?: string;
  permissions?: [];
  roles?: Role[];
}

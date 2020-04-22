import { BaseInterface } from './base-interface';
import { Address } from './address';
import { Role } from './role';
import { DocumentType } from './document-type';

export interface User extends BaseInterface {
  username?: string;
  email?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: Role;
  lastname?: string;
  firstname?: string;
  document?: string;
  document_type?: DocumentType;
  address?: Address[];
  telephone?: string;
}

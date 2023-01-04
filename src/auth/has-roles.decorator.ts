import { SetMetadata } from '@nestjs/common';
import { Role } from '../models/roles.enum';

export const HasRoles = (...role: Role[]) => SetMetadata('role', role);

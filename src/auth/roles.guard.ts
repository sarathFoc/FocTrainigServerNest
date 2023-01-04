import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../models/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log("requiredRoles", requiredRoles)


    if (!requiredRoles) {
      return true;
    }
    // const { req } = context.getContext();
    const  { user }  = context.switchToHttp().getRequest();
    console.log("user", user)
    return requiredRoles.some((role) => user?.role === role);
    // return requiredRoles.some((role) => String(user?.roles).includes(String(role)));

  }
}

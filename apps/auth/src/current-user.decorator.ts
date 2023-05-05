import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './users/entities/user.entity';

const getCurrentUserByContext = (context: ExecutionContext): User => {
  // passport strategy will create a user property on request object
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);

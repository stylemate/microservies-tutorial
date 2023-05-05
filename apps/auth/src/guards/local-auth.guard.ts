import { AuthGuard } from '@nestjs/passport';

// local.strategy.ts is injected in auth module as a provider
export class LocalAuthGuard extends AuthGuard('localStrategy') {}

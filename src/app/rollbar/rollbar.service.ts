import * as Rollbar from 'rollbar';
import {
  Injectable,
  Injector,
  InjectionToken,
  ErrorHandler
} from '@angular/core';

// Will be automatically generated by set-env script
// @ts-ignore
import { environment } from '../../environments/environment';

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(err: any): void {
    const rollbar = this.injector.get(RollbarService);
    console.log('error lolka');
    rollbar.error(err.originalError || err);
  }
}

export const rollbarFactory = () => new Rollbar(environment.rollbarConfig);
export const RollbarService = new InjectionToken<Rollbar>('rollbar');

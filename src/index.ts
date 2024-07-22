import 'source-map-support/register';
import { testFunction } from '@/app/test';
import { ENV } from '@/env';

console.log(`Starting ${ENV.APP_NAME} in ${ENV.NODE_ENV} mode`);
testFunction();

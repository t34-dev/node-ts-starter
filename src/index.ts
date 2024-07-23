import 'source-map-support/register';
import { ENV } from '@/env';
import { testFunction } from '@/app/test';
export { testFunction } from '@/app/test';
export * from '@/env';

console.log(`Starting ${ENV.APP_NAME} in ${ENV.NODE_ENV} mode`);
console.log(`func testFunction():`, testFunction());

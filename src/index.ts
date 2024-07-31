import { testFunction } from '@/app/test';
import { ENV } from '@/env';
export { testFunction } from '@/app/test';
export * from '@/env';

console.log(`Starting ${ENV.APP_NAME} in ${ENV.NODE_ENV} mode`);
console.log(`func testFunction():`, testFunction());

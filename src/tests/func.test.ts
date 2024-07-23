import { testFunction } from '@/app/test';

describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(testFunction()).toBe('This is a test function !!!!!!!!!!');
  });
});

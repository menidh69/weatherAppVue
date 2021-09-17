import dateFormat from '@/utils/dateFormat';

describe('test util function', () => {
  it('returns a date without time', () => {
    const expectedValue = new Date(2020, 9, 9);
    const today = new Date(2020, 9, 9, 10, 10, 15);
    const formatted = dateFormat(today);
    expect(formatted).toBe(expectedValue.toLocaleDateString());
  });
});

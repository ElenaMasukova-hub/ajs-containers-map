import ErrorRepository from './errorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('translate возвращает описание для существующего кода', () => {
    expect(repo.translate(404)).toBe('Not Found');
    expect(repo.translate(500)).toBe('Internal Server Error');
  });

  test('translate возвращает Unknown error для несуществующего кода', () => {
    expect(repo.translate(999)).toBe('Unknown error');
  });
});
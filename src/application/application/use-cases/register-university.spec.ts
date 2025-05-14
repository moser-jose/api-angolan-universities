import { InMemoryUniversitiesRepository } from 'test/repositories/in-universitary-repository';
import { RegisterUniversityUseCase } from './register-university';
import { makeUniversity } from 'test/factories/make-university';

let inMemoryUniversitiesRepository: InMemoryUniversitiesRepository;
let sut: RegisterUniversityUseCase;
describe('Register university', () => {
  beforeEach(() => {
    inMemoryUniversitiesRepository = new InMemoryUniversitiesRepository();
    sut = new RegisterUniversityUseCase(inMemoryUniversitiesRepository);
  });
  it('it should be able to register a new university', async () => {
    const university = makeUniversity();
    const result = await sut.execute(university);

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual({
      institution: inMemoryUniversitiesRepository.items[0]
    });
  });
});

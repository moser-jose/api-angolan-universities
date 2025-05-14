import { InMemoryUniversitiesRepository } from 'test/repositories/in-universitary-repository';
import { RegisterCollegeUseCase } from './register-college';
import { makeCollege } from 'test/factories/make-college';
import { InMemoryCollegesRepository } from 'test/repositories/in-colege-repository';
import { makeUniversity } from 'test/factories/make-university';

let inMemoryUniversitiesRepository: InMemoryUniversitiesRepository;
let inMemoryCollegesRepository: InMemoryCollegesRepository;
let sut: RegisterCollegeUseCase;
describe('Register college', () => {
  beforeEach(() => {
    inMemoryUniversitiesRepository = new InMemoryUniversitiesRepository();
    inMemoryCollegesRepository = new InMemoryCollegesRepository();
    sut = new RegisterCollegeUseCase(
      inMemoryCollegesRepository,
      inMemoryUniversitiesRepository
    );
  });
  it('it should be able to register a new college', async () => {
    const university = makeUniversity();

    await inMemoryUniversitiesRepository.create(university);

    const college = makeCollege();

    const result = await sut.execute({
      ...college['props'],
      universityId: university.id.toString()
    });

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual({
      college: inMemoryCollegesRepository.items[0]
    });
  });
});

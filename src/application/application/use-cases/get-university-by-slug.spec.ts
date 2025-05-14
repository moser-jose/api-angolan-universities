import { Slug } from '../../enterprise/entities/value-objects/slug';
import { GetUniversityBySlugUseCase } from './get-university-by-slug';
import { InMemoryUniversitiesRepository } from 'test/repositories/in-universitary-repository';
import { makeUniversity } from 'test/factories/make-university';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryUniversitiesRepository: InMemoryUniversitiesRepository;
let sut: GetUniversityBySlugUseCase;
describe('Get university by slug', () => {
  beforeEach(() => {
    inMemoryUniversitiesRepository = new InMemoryUniversitiesRepository();
    sut = new GetUniversityBySlugUseCase(inMemoryUniversitiesRepository);
  });
  it('should be able to get a university by slug', async () => {
    const university = makeUniversity({}, new UniqueEntityID('1'));

    inMemoryUniversitiesRepository.create(university);

    const result = await sut.execute({
      slug: Slug.createFromText(university.name).value
    });

    expect(result.value).toMatchObject({
      university: {
        name: university.name
      }
    });
  });
});

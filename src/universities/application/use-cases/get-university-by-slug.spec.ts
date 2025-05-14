
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { GetUniversityBySlugUseCase } from './get-university-by-slug';
import { InMemoryUniversitiesRepository } from 'test/repositories/in-universitary-repository';
import { University } from '@/universities/enterprise/entities/university';

let inMemoryUniversitiesRepository: InMemoryUniversitiesRepository;
let sut: GetUniversityBySlugUseCase;
describe('Get university by slug', () => {
  beforeEach(() => {
    inMemoryUniversitiesRepository = new InMemoryUniversitiesRepository();
    sut = new GetUniversityBySlugUseCase(inMemoryUniversitiesRepository);
  });
  it('should be able to get a university by slug', async () => {
    const university = University.create({
      name: 'University of Angola',
      email: 'university@angola.edu.ao',
      image: 'https://example.com/university.png',
      website: 'https://university.edu.ao',
      address: 'Angola',
      description: 'University of Angola',
      type: 'public',
      founded: '1960',
      phones: ['+244 922 222 222'],
      social_media: {
        facebook: 'https://facebook.com/university',
        instagram: 'https://instagram.com/university',
        twitter: 'https://twitter.com/university',
        linkedin: 'https://linkedin.com/university'
      },
      awards: [],
      management: [],
      ranking: 1,
      latitude: 1,
      longitude: 1,
      abbreviation: 'UAN',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    inMemoryUniversitiesRepository.create(university);

    const result = await sut.execute({
      slug: Slug.create('university-of-angola').value
    });

    expect(result.value).toMatchObject({
      university: {
        name: university.name,
        email: university.email,
        image: university.image,
        website: university.website,
        address: university.address,
        description: university.description,
        type: university.type,
        founded: university.founded,
        phones: university.phones,
        social_media: university.social_media,
        awards: university.awards,
        management: university.management,
        ranking: university.ranking,
        latitude: university.latitude,
        longitude: university.longitude,
        abbreviation: university.abbreviation,
      }
    });
  });
});

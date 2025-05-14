/* eslint-disable prettier/prettier */
import { InMemoryUniversitiesRepository } from 'test/repositories/in-universitary-repository';
import { RegisterUniversityUseCase } from './register-university';

let inMemoryUniversitiesRepository: InMemoryUniversitiesRepository;
let sut: RegisterUniversityUseCase;
describe('Register university', () => {
  beforeEach(() => {
    inMemoryUniversitiesRepository = new InMemoryUniversitiesRepository();
    sut = new RegisterUniversityUseCase(inMemoryUniversitiesRepository);
  });
  it('it should be able to register a new university', async () => {
    const result = await sut.execute({
      name: 'University of Angola',
      description: 'University of Angola',
      image: 'University of Angola',
      website: 'University of Angola',
      address: 'University of Angola',
      abbreviation: 'UA',
      type: 'Public',
      founded: '1954',
      email: 'university@angola.edu.ao',
      phones: ['+244 922 222 222'],
      management: [
        {
          name: 'John Doe',
          position: 'Rector',
          email: 'john.doe@example.com'
        },
        {
          name: 'Jane Doe',
          position: 'Vice Rector',
          email: 'jane.doe@example.com'
        }
      ],
      social_media: {
        facebook: 'https://www.facebook.com/universityofangola',
        instagram: 'https://www.instagram.com/universityofangola',
        twitter: 'https://www.twitter.com/universityofangola',
        linkedin: 'https://www.linkedin.com/universityofangola'
      },
      latitude: 123.456,
      longitude: 789.123,
      ranking: 1,
      awards: [
        {
          title: 'Award 1',
          year: 2021,
          organization: 'Organization 1'
        }
      ],
      createdAt: new Date()
    });

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual({
      university: inMemoryUniversitiesRepository.items[0]
    });
  });
});

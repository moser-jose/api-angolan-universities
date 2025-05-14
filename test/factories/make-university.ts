/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { University } from '@/universities/enterprise/entities/university';
import { UniversityProps } from '@/types/university';
export function makeUniversity(
  override: Partial<UniversityProps> = {},
  id?: UniqueEntityID
): University {
  const university = University.create(
    {
      name: faker.lorem.word(),
      description: faker.lorem.word(),
      image: faker.image.url(),
      website: faker.internet.url(),
      address: faker.location.streetAddress(),
      abbreviation: faker.lorem.word(),
      type: faker.lorem.word(),
      founded: faker.date.past().toISOString(),
      email: faker.internet.email(),
      phones: [faker.phone.number()],
      management: [
        {
          name: faker.person.fullName(),
          position: faker.lorem.word(),
          email: faker.internet.email()
        },
        {
          name: faker.person.fullName(),
          position: faker.lorem.word(),
          email: faker.internet.email()
        }
      ],
      social_media: {
        facebook: faker.internet.url(),
        instagram: faker.internet.url(),
        linkedin: faker.internet.url(),
        twitter: faker.internet.url()
      },
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      ranking: faker.number.int(),
      awards: [
        {
          title: faker.lorem.word(),
          year: faker.date.past().getFullYear(),
          organization: faker.lorem.word()
        }
      ],
      createdAt: new Date(),
      ...override
    },
    id
  );

  return university;
}

import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { College } from '@/application/enterprise/entities/college';
import { CollegeProps } from '@/types/college';
export function makeCollege(
  override: Partial<CollegeProps> = {},
  id?: UniqueEntityID
): College {
  const college = College.create(
    {
      universityId: faker.string.uuid(),
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

  return college;
}

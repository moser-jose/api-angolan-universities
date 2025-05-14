/* eslint-disable @typescript-eslint/require-await */
import { UniversitiesRepository } from '@/universities/application/repositories/universities-repository';
import { University } from '@/universities/enterprise/entities/university';
import { Slug } from '@/universities/enterprise/entities/value-objects/slug';
import { UniversityDetails } from '@/universities/enterprise/entities/value-objects/university-details';

export class InMemoryUniversitiesRepository implements UniversitiesRepository {
  public items: University[] = [];

  async delete(university: University): Promise<void> {
    this.items = this.items.filter((item) => item.id !== university.id);
  }
  async findById(id: string): Promise<University | null> {
    const university = this.items.find((item) => item.id.toString() === id);

    if (!university) {
      return null;
    }
    return university;
  }
  async findBySlug(slug: string): Promise<UniversityDetails | null> {
    const university = this.items.find(
      (item) => Slug.createFromText(item.name).value === slug
    );

    return university
      ? UniversityDetails.create({
          universityId: university.id,
          name: university.name,
          slug: Slug.createFromText(university.name),
          email: university.email ?? '',
          image: university.image ?? '',
          website: university.website ?? '',
          address: university.address ?? null,
          description: university.description ?? null,
          type: university.type ?? '',
          founded: university.founded ?? '',
          phones: university.phones ?? [],
          social_media: university.social_media ?? null,
          awards: university.awards ?? [],
          management: university.management ?? [],
          ranking: university.ranking ?? 0,
          latitude: university.latitude ?? 0,
          longitude: university.longitude ?? 0,
          abbreviation: university.abbreviation ?? '',
          createdAt: university.createdAt,
          updatedAt: university.updatedAt,
          facultities: []
        })
      : null;
  }

  async findMany(page: number, perPage: number): Promise<University[]> {
    return this.items.slice((page - 1) * perPage, page * perPage);
  }

  async create(university: University): Promise<void> {
    this.items.push(university);
  }
}

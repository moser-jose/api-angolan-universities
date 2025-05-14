/* eslint-disable @typescript-eslint/require-await */
import { CollegesRepository } from '@/universities/application/repositories/colleges-repository';
import { College } from '@/universities/enterprise/entities/college';
import { CollegeDetails } from '@/universities/enterprise/entities/value-objects/coleges-details';
import { Slug } from '@/universities/enterprise/entities/value-objects/slug';

export class InMemoryCollegesRepository implements CollegesRepository {
  public items: College[] = [];

  async delete(college: College): Promise<void> {
    this.items = this.items.filter((item) => item.id !== college.id);
  }
  async findById(id: string): Promise<College | null> {
    const college = this.items.find((item) => item.id.toString() === id);

    if (!college) {
      return null;
    }
    return college;
  }
  async findBySlug(slug: string): Promise<CollegeDetails | null> {
    const college = this.items.find(
      (item) => Slug.createFromText(item.name).value === slug
    );

    return college
      ? CollegeDetails.create({
          universityId: college.id,
          name: college.name,
          slug: Slug.createFromText(college.name),
          email: college.email ?? '',
          image: college.image ?? '',
          website: college.website ?? '',
          address: college.address ?? null,
          description: college.description ?? null,
          type: college.type ?? '',
          founded: college.founded ?? '',
          phones: college.phones ?? [],
          social_media: college.social_media ?? null,
          awards: college.awards ?? [],
          management: college.management ?? [],
          ranking: college.ranking ?? 0,
          latitude: college.latitude ?? 0,
          longitude: college.longitude ?? 0,
          abbreviation: college.abbreviation ?? '',
          createdAt: college.createdAt,
          updatedAt: college.updatedAt,
        })
      : null;
  }

  async findMany(page: number, perPage: number): Promise<College[]> {
    return this.items.slice((page - 1) * perPage, page * perPage);
  }

  async create(college: College): Promise<void> {
    this.items.push(college);
  }
}

import { College } from '@/application/enterprise/entities/college';
import { CollegeDetails } from '@/application/enterprise/entities/value-objects/coleges-details';

export abstract class CollegesRepository {
  abstract create(college: College): Promise<void>;
  abstract delete(college: College): Promise<void>;
  abstract findById(id: string): Promise<College | null>;
  abstract findBySlug(slug: string): Promise<CollegeDetails | null>;
  abstract findMany(page: number, perPage: number): Promise<College[]>;
}

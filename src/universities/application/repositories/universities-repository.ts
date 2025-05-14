import { UniversityDetails } from '@/universities/enterprise/entities/value-objects/university-details';
import { University } from '../../enterprise/entities/university';

export abstract class UniversitiesRepository {
  abstract create(university: University): Promise<void>;
  abstract delete(university: University): Promise<void>;
  abstract findById(id: string): Promise<University | null>;
  abstract findBySlug(slug: string): Promise<UniversityDetails | null>;
  abstract findMany(page: number, perPage: number): Promise<University[]>;
}

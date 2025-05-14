import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';
import { UniversityDetails } from '../../enterprise/entities/value-objects/university-details';

import { Either, right, left } from '@/core/either';
import { Injectable } from '@nestjs/common';
import { UniversitiesRepository } from '../repositories/universities-repository';
interface GetUniversityBySlugRequest {
  slug: string;
}

type GetUniversityBySlugResponse = Either<
  ResourceNotFoundError,
  { university: UniversityDetails }
>;

@Injectable()
export class GetUniversityBySlugUseCase {
  constructor(private universitiesRepository: UniversitiesRepository) {}

  async execute({
    slug
  }: GetUniversityBySlugRequest): Promise<GetUniversityBySlugResponse> {
    const university = await this.universitiesRepository.findBySlug(slug);

    if (!university) {
      return left(new ResourceNotFoundError());
    }
    return right({ university });
  }
}

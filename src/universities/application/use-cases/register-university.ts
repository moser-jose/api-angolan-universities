/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { Either, left, right } from '@/core/either';
import { University } from '../../enterprise/entities/university';
import { UniversitiesRepository } from '../repositories/universities-repository';
import { UniversityAlreadyExistsError } from '@/universities/application/use-cases/errors/university-already-exists-error';
import { UniversityProps } from '@/types/university';
import { Slug } from '@/universities/enterprise/entities/value-objects/slug';
interface RegisterUniversityUseCaseRequest extends UniversityProps {}

type RegisterUniversityUseCaseResponse = Either<
  UniversityAlreadyExistsError,
  { university: University }
>;

@Injectable()
export class RegisterUniversityUseCase {
  constructor(private universitiesRepository: UniversitiesRepository) {}

  async execute({
    name,
    email,
    image,
    website,
    address,
    description,
    type,
    founded,
    phones,
    social_media,
    awards,
    management,
    ranking,
    latitude,
    longitude,
    abbreviation
  }: RegisterUniversityUseCaseRequest): Promise<RegisterUniversityUseCaseResponse> {
    const slug = Slug.createFromText(name);

    const universityWithSameSlug = await this.universitiesRepository.findBySlug(
      slug.value
    );

    if (universityWithSameSlug) {
      return left(new UniversityAlreadyExistsError(slug.value));
    }

    const university = University.create({
      name,
      email,
      description,
      image,
      website,
      type,
      founded,
      address,
      phones,
      social_media,
      awards,
      management,
      ranking,
      latitude,
      longitude,
      abbreviation
    });

    await this.universitiesRepository.create(university);

    return right({ university });
  }
}

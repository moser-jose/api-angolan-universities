/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { Either, left, right } from '@/core/either';
import { University } from '../../enterprise/entities/university';
import { UniversitiesRepository } from '../repositories/universities-repository';
import { InstitutionAlreadyExistsError } from '@/application/application/use-cases/errors/instituition-already-exists-error';
import { UniversityProps } from '@/types/university';
import { Slug } from '@/application/enterprise/entities/value-objects/slug';
interface RegisterUniversityUseCaseRequest extends UniversityProps {}

type RegisterUniversityUseCaseResponse = Either<
  InstitutionAlreadyExistsError,
  { institution: University }
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
      return left(new InstitutionAlreadyExistsError(slug.value));
    }

    const institution = University.create({
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

    await this.universitiesRepository.create(institution);

    return right({ institution });
  }
}

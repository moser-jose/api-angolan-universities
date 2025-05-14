/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import { Either, left, right } from '@/core/either';
import { UniversitiesRepository } from '../repositories/universities-repository';
import { InstitutionAlreadyExistsError } from '@/application/application/use-cases/errors/instituition-already-exists-error';
import { Slug } from '@/application/enterprise/entities/value-objects/slug';
import { College } from '@/application/enterprise/entities/college';
import { CollegeProps } from '@/types/college';
import { CollegesRepository } from '../repositories/colleges-repository';
import { InstitutionNotFoundError } from '@/application/application/use-cases/errors/institution-not-found-error';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
interface RegisterCollegeUseCaseRequest extends CollegeProps {}

type RegisterCollegeUseCaseResponse = Either<
  InstitutionAlreadyExistsError,
  { college: College }
>;

@Injectable()
export class RegisterCollegeUseCase {
  constructor(
    private collegesRepository: CollegesRepository,
    private universitiesRepository: UniversitiesRepository
  ) {}

  async execute({
    universityId,
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
  }: RegisterCollegeUseCaseRequest): Promise<RegisterCollegeUseCaseResponse> {
    const slug = Slug.createFromText(name);

    const universityWithSameSlug = await this.universitiesRepository.findBySlug(
      slug.value
    );

    if (universityWithSameSlug) {
      return left(new InstitutionAlreadyExistsError(slug.value));
    }

    const university = await this.universitiesRepository.findById(universityId);

    if (!university) {
      return left(new InstitutionNotFoundError(universityId));
    }

    const college = College.create({
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
      abbreviation,
      universityId: new UniqueEntityID(universityId).toString()
    });

    await this.collegesRepository.create(college);

    return right({ college });
  }
}

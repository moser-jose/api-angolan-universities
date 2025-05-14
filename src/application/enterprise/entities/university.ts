/* eslint-disable prettier/prettier */
import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { UniversityProps } from '@/types/university';

export class University extends Entity<UniversityProps> {

  static create(
    props: Optional<UniversityProps, 'createdAt'>,
    id?: UniqueEntityID
  ): University {
    const university = new University(
      {
        ...props,
        createdAt: props.createdAt ?? new Date()
      },
      id
    );
    return university;
  }
}

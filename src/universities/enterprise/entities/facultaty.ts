/* eslint-disable prettier/prettier */
import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { FacultyProps } from '@/types/facultities';

export class Faculty extends Entity<FacultyProps> {
  static create(
    props: Optional<FacultyProps, 'createdAt'>,
    id?: UniqueEntityID
  ): Faculty {
    const faculty = new Faculty(
      {
        ...props,
        createdAt: props.createdAt ?? new Date()
      },
      id
    );
    return faculty;
  }
}

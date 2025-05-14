import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { CollegeProps } from '@/types/college';

export class College extends Entity<CollegeProps> {
  static create(
    props: Optional<CollegeProps, 'createdAt'>,
    id?: UniqueEntityID
  ): College {
    const college = new College(
      {
        ...props,
        createdAt: props.createdAt ?? new Date()
      },
      id
    );
    return college;
  }
}

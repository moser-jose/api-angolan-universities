import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Slug } from './slug';
import { Entity } from '@/core/entities/entity';
import { DataProps } from '@/types/data';
interface CollegeDetailsProps {
  universityId: UniqueEntityID;
  slug: Slug;
}

export class CollegeDetails extends Entity<
  DataProps & CollegeDetailsProps
> {
  constructor(props: DataProps & CollegeDetailsProps) {
    super(props);
  }

  get universityId() {
    return this.props.universityId;
  }

  get name() {
    return this.props.name;
  }

  get slug() {
    return this.props.slug;
  }

  get email() {
    return this.props.email;
  }

  get image() {
    return this.props.image;
  }

  get website() {
    return this.props.website;
  }

  get address() {
    return this.props.address;
  }

  get description() {
    return this.props.description;
  }

  get type() {
    return this.props.type;
  }

  get founded() {
    return this.props.founded;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get abbreviation() {
    return this.props.abbreviation;
  }

  static create(props: DataProps & CollegeDetailsProps) {
    return new CollegeDetails(props);
  }
}

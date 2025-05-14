import { DataProps } from '@/types/data';
import { UniqueEntityID } from './unique-entity-id';

export class Entity<Props extends DataProps> {
  private _id: UniqueEntityID;
  protected props: Props;

  get id(): UniqueEntityID {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get type(): string {
    return this.props.type;
  }

  get founded(): string | null {
    return this.props.founded;
  }

  get website(): string | null {
    return this.props.website;
  }

  get email(): string | null {
    return this.props.email;
  }

  get social_media(): {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  } | null {
    return this.props.social_media;
  }

  get phones(): string[] {
    return this.props.phones;
  }

  get image(): string | null {
    return this.props.image;
  }

  get latitude(): number | null {
    return this.props.latitude;
  }

  get longitude(): number | null {
    return this.props.longitude;
  }

  get ranking(): number | null {
    return this.props.ranking;
  }

  get management(): {
    name: string;
    position: string;
    email: string;
  }[] {
    return this.props.management;
  }

  get abbreviation(): string | null {
    return this.props.abbreviation;
  }

  get address(): string | null {
    return this.props.address;
  }

  get description(): string | null {
    return this.props.description;
  }
  get awards(): {
    title: string;
    year: number;
    organization: string;
  }[] {
    return this.props.awards;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined | null {
    return this.props.updatedAt;
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID(id);
    this.props = props;
  }

  public equals(entity: Entity<Props>): boolean {
    if (entity === this) {
      return true;
    }
    if (entity.id === this._id) {
      return true;
    }
    return false;
  }
}

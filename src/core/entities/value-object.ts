export class ValueObject<Props> {
  protected props: Props;

  protected constructor(props: Props) {
    this.props = props;
  }

  public equals(valueObject: ValueObject<unknown>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }

    if (valueObject === undefined) {
      return false;
    }

    return JSON.stringify(this.props) === JSON.stringify(valueObject.props);
  }
}

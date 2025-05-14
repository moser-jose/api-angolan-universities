import { UseCaseError } from '@/core/errors/use-case-error';

export class UniversityAlreadyExistsError
  extends Error
  implements UseCaseError
{
  constructor(identifier: string) {
    super(`University with same "${identifier}" already exists`);
  }
}

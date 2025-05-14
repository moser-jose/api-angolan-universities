import { UseCaseError } from '@/core/errors/use-case-error';

export class InstitutionNotFoundError
  extends Error
  implements UseCaseError
{
  constructor(identifier: string) {
    super(`Institution with same "${identifier}" not found`);
  }
}
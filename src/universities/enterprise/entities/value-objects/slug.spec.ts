/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { test, expect } from 'vitest';

import { Slug } from './slug';

test('should be able to create a slug from text', () => {
  const slug = Slug.createFromText('Example question title');
  expect(slug.value).toEqual('example-question-title');
});

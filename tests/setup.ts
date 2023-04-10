import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/server'


expect.extend(matchers);

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close())

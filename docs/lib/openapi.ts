import { createOpenAPI } from 'fumadocs-openapi/server';
import path from 'path';

const apiJsonPath = path.resolve(process.cwd(), './openapi.json');

export const openapi = createOpenAPI({
  input: [apiJsonPath],
});

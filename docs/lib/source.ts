import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { transformerOpenAPI } from 'fumadocs-openapi/server';
import { createOpenAPI } from 'fumadocs-openapi/server';
import * as Adapters from './media-adapter';
import * as ClientAdapters from './media-adapter.client';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [transformerOpenAPI()],
  },
});

export const openapi = createOpenAPI({
  proxyUrl: '/api/proxy',
  mediaAdapters: {
    // override the default adapter of `application/json`
    'application/json': {
      ...Adapters.OpenIsleMediaAdapter,
      client: ClientAdapters.OpenIsleMediaAdapter,
    },
  },
});

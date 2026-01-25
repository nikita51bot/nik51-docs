import { docs, patpat } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader, LoaderOutput } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});


export const sources = new Map<string, any>([
  ["patpat",
    loader({
      baseUrl: '/docs/patpat',
      source: patpat.toFumadocsSource(),
    })
  ],
])

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
function createMDXSource(patpatDocs: any, patpatMeta: any): import("fumadocs-core/source").Source<import("fumadocs-core/source").SourceConfig> {
  throw new Error('Function not implemented.');
}


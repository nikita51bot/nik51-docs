import { source, sources } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { LoaderOutput } from 'fumadocs-core/source';
import { SidebarTab } from 'fumadocs-ui/components/sidebar/tabs/index';
import { i18n } from '@/lib/i18n';

const sidebarTabs: Record<string, SidebarTab[]> = {
  "ru": [
    {
      title: 'Документация',
      description: 'Основная документация проекта',
      url: '/ru/docs',
    },
    {
      title: 'PatPat плагин',
      description: 'Документация PatPat плагина',
      url: '/ru/docs/patpat-plugin',
    }
  ],
  "en": [
    {
      title: 'Docs',
      description: 'Main documentation',
      url: '/en/docs',
    },
    {
      title: 'PatPat Plugin',
      description: 'Documentation about PatPat plugin',
      url: '/en/docs/patpat-plugin',
    }
  ]
};


export default async function Layout({ children, params }: LayoutProps<'/[lang]/docs/[[...slug]]'>) {
  let tree = null
  const param = await params;
  if (param.slug && sources.has(param.slug[0])) {
    tree = (sources.get(param.slug[0]) as LoaderOutput<any>).getPageTree(param.lang)
  } else {
    tree = source.getPageTree(param.lang)
  }
  return (
    <DocsLayout tree={tree} i18n {...baseOptions(param.lang)} sidebar={{
      enabled: true,
      tabs: sidebarTabs[param.lang]
    }}>
      {children}
    </DocsLayout>
  );
}

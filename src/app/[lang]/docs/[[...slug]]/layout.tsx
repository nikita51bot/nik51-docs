import { source, sources } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { LoaderOutput } from 'fumadocs-core/source';
import { SidebarTab } from 'fumadocs-ui/components/sidebar/tabs/index';
import { i18n } from '@/lib/i18n';

const baseSidebarTabs: SidebarTab[] = [
    {
      title: 'Docs',
      description: 'Main documentation',
      url: '/docs',
    },
    {
      title: 'PatPat Mod',
      description: 'Documentation about PatPat Mod',
      url: '/docs/patpat',
    }
  ]

const sidebarTabs: Record<string, SidebarTab[]> = {};
for(const langCode of i18n.languages){
  sidebarTabs[langCode] = structuredClone(baseSidebarTabs)
  for(const tab of sidebarTabs[langCode]){
    tab.url = `/${langCode}${tab.url}`
  }
}

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

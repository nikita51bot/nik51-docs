import { source, sources } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

const sidebarTabs = [
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
];

export default async function Layout({ children, params }: LayoutProps<'/docs/[[...slug]]'>) {
  let tree = null
  
  const param = await params;
  if(param.slug && sources.has(param.slug[0])){
    tree = sources.get(param.slug[0]).getPageTree()
  } else {
    tree = source.getPageTree()
  }
  return (
    <DocsLayout tree={tree} {...baseOptions()} sidebar={{
tabs: sidebarTabs,
 }}>
      {children}
    </DocsLayout>
  );
}

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const maps = {
  'Ejunz': <GithubInfo owner="ejunz-dev" repo="Ejunz" />,
  'IoT': <GithubInfo owner="ejunz-dev" repo="IoT" />,
  'AI': <GithubInfo owner="ejunz-dev" repo="AI" />,
  'KB': <GithubInfo owner="ejunz-dev" repo="KB" />,
};

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      links={Object.keys(maps).find((key) => slug?.[0] === key) ? [
        {
          type: 'custom',
          children: maps[slug?.[0] as keyof typeof maps],
        },
      ] : []}
      sidebar={{
        tabs: false,
        banner: (
          <RootToggle
            options={[
              {
                title: 'Ejunz',
                description: '多功能一站式平台',
                url: '/docs/Ejunz',
              },
              {
                title: 'IoT',
                description: '物联网部署',
                url: '/docs/IoT',
              },
              {
                title: 'AI',
                description: '人工智能部署',
                url: '/docs/AI',
              },
              {
                title: 'KB',
                description: '知识库部署',
                url: '/docs/KB',
              },  
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}

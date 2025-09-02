import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const maps = {
  'Tomoring': <GithubInfo owner="Tomori-docs" repo="tomoring" />,
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
                title: 'Tomoring',
                description: '知识库导航系统',
                url: '/docs/Tomoring',
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

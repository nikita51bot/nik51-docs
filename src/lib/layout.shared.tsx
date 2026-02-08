import Logo from '@/components/ui/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenText } from 'lucide-react';
import { i18n } from '@/lib/i18n';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Logo className='size-5 drop-shadow' /> nik51-docs
        </>
      ),
      transparentMode: 'top',
      url: `/${locale}`
    },

    links: [
      {
        icon: <BookOpenText />,
        text: 'Documentation',
        url: `/${locale}/docs`,
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
  };
}
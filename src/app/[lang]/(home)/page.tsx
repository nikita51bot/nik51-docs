import Logo from '@/components/ui/logo';
import DynamicLink from 'fumadocs-core/dynamic-link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center items-center flex-1">
      <Logo className='w-20' />
      <h1 className="text-2xl font-bold mb-4">Welcome to nik51-docs!</h1>
      <p>
        It&apos;s pretty empty here for now — I&apos;ll add more content for my projects later. For now, you can just visit{' '}
        <DynamicLink href="/[lang]/docs" className="font-medium underline">
          /docs
        </DynamicLink>
        .
      </p>
    </div>
  );
}

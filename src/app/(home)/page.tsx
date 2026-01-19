import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Welcome to nik51-docs!</h1>
      <p>
        It’s pretty empty here for now — I’ll add more content for my projects later. For now, you can just visit{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>
        .
      </p>
    </div>
  );
}

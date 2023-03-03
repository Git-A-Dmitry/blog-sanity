import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>Link</Link>
        <h1 className='text-3xl text-cyan-600'>Header</h1>
      </div>

      <div>
        <Link //
          href='https://www.google.com/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'
        >
          Google
        </Link>
      </div>
    </header>
  );
}

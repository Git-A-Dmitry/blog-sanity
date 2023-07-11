import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-slate-200'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <h1 className='text-2xl text-cyan-600'>HOME</h1>
        </Link>
      </div>

      <div>
        <Link
          href='https://dmitry-web-portfolio.vercel.app'
          className='px-5 py-3 text-sm md:text-base bg-gray-700 text-[#F7AB0A] flex items-center rounded-full text-center hover:bg-gray-900'
          target=' blank'
          rel='noreferrer'
        >
          Portfolio
        </Link>
      </div>
    </header>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-5 md:px-10 py-5 bg-zinc-800'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <h1 className='text-2xl text-slate-300'>HOME</h1>
        </Link>
      </div>

      <div>
        <Link
          href='https://dmitry-web-portfolio.vercel.app'
          className='px-5 py-3 uppercase md:text-base bg-gray-800 border border-slate-100 text-[#F7AB0A] flex items-center rounded-md text-center hover:border-violet-800'
          target=' blank'
          rel='noreferrer'
        >
          Portfolio
        </Link>
      </div>
    </header>
  );
}

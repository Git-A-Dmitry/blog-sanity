export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between h-40 bg-[#080e10] font-bold px-10 py-5'>
      <div>
        <h1 className='text-5xl text-slate-300'>Dmitry&lsquo;s Blog</h1>
        {/* <h2 className='mt-5 md:mt-10 text-yellow-50'>This React app was made for the sake of practicing Next.js, TypeScript, and Sanity.</h2> */}
      </div>

      <p className='mt-5 md:mt-2 text-gray-300 max-w-sm'>Exploring the Internet | Front-end technologies | Perspectives on current events and more...</p>
    </div>
  );
}

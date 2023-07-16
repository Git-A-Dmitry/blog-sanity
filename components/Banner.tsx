export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10bonga'>
      <div>
        <h1 className='text-6xl text-slate-500'>Dmitry&lsquo;s Blog</h1>
        <h2 className='mt-5 md:mt-0'>{/* For <span className='decoration-4'>every developer</span> */}</h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-500 max-w-sm'>Exploring the Internet | Front-end technologies | Perspectives on current events and more...</p>
    </div>
  );
}

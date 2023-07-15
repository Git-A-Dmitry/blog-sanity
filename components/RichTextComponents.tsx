import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-3/4 h-80 m-0 mx-auto md:mt-4'>
          <Image
            className='object-cover rounded'
            src={urlFor(value).url()}
            alt='Blog Post Image'
            fill
          />
        </div>
      );
    },
  },
  // prettier-ignore
  list: {
    bullet: ({children}: any) => (
      <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
    ),
    number: ({children}: any) => (
      <ol className='mt-lg list-decimal'>{children}</ol>
    )
  },
  // prettier-ignore
  block: {
    h1: ({children}: any) => (
      <h1 className='lg:w-3/4 ml-auto mr-auto text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className='lg:w-3/4 ml-auto mr-auto'>{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className='lg:w-3/4 ml-auto mr-auto text-3xl text-center py-10 font-bold'>{children}</h3>
    ),
    h4: ({children}: any) => (
      <h4 className='lg:w-3/4 ml-auto mr-auto text-2xl py-4 font-bold'>{children}</h4>
    ),

    normal: ({children}: any) => (
      <p className='lg:w-3/4 ml-auto mr-auto py-2 text-[1.2rem]'>{children}</p>
    ),


    blockquote: ({children}: any) => (
      <blockquote className='lg:w-3/4 ml-auto mr-auto border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5'>{children}</blockquote>
    )
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target='_blank'
          className='text-xs text-blue-600 underline decoration-blue-600 hover:text-blue-800 hover:decoration-blue-800'
          // className=underline decoration-[#64748b] hover:decoration-black'
        >
          {children}
        </Link>
      );
    },
  },
};

import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative lg:w-3/4 h-80 m-0 mx-auto md:mt-4'>
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
      <h1 className='lg:w-3/4 ml-auto mr-auto text-5xl text-center py-10 font-bold text-slate-200'>{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className='lg:w-3/4 ml-auto mr-auto text-4xl text-center py-10 font-bold'>{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className='lg:w-3/4 ml-auto mr-auto text-3xl text-center py-10 font-bold text-slate-200'>{children}</h3>
    ),
    h4: ({children}: any) => (
      <h4 className='lg:w-3/4 ml-auto mr-auto text-2xl py-4 font-bold text-lime-200'>{children}</h4>
    ),

    normal: ({children}: any) => (
      <p className='lg:w-3/4 ml-auto mr-auto py-2 text-[1.4rem] text-slate-200 font-Poppins font-light'>{children}</p>
    ),


    blockquote: ({children}: any) => (
      <blockquote className='lg:w-3/4 ml-auto mr-auto border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5 text-slate-300 text-[1.4rem]'>{children}</blockquote>
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
          className='text-md text-blue-600 underline decoration-blue-600 hover:text-blue-800 hover:decoration-blue-800'
          // className=underline decoration-[#64748b] hover:decoration-black'
        >
          {children}
        </Link>
      );
    },

    // code: ({ children }: any) => <span className='w-40 ml-auto mr-auto text-blue-600 bg-amber-200'>{children}</span>,

    highlight: ({ children }: any) => <span className='bg-amber-200'>{children}</span>,

    strong: ({ children }: any) => <span className='text-amber-400'>{children}</span>,
  },

  // code: {
  //   code: ({ children }: any) => (
  //     <pre className='bg-amber-200'>
  //       <code>{children}</code>
  //     </pre>
  //   ),
  // },
};

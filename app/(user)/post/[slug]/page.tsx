import Image from 'next/image';
import { PostData } from '@/typings';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';
// import BlockContent from '@sanity/block-content-to-react';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-javascript';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import ClientCodeBlock from '@/components/ClientCodeBlock';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  params: {
    slug: string;
  };
};

const serializers = {
  types: {
    // code: CodeBlock,
    code: ClientCodeBlock,
  },
};

// revalidate the page every 60 seconds
export const revalidate = 60;

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;

  const post: PostData = await client.fetch(query, { slug });
  // console.log('Post data:', post);

  // Extracting the code blocks from post.body
  const codeBlocks = post.body.filter((block: any) => block._type === 'code');
  // Extracting the text blocks from post.body
  const textBlocks = post.body.filter((block: any) => block._type !== 'code');

  return (
    // <div>Post: {slug}</div>
    <article className='px-10 pb-28 bg-zinc-900'>
      {/* <article className='px-10 pb-28 bg-slate-200'> */}
      <section className='space-y-2 text-white'>
        {/* <section className='space-y-2 border border-slate-900 text-white rounded-sm'> */}
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between pb-80'>
          {/* <div className='relative min-h-56 flex flex-col md:flex-row justify-between'> */}
          <div className='absolute top-1 w-full h-full opacity-2 p-10'>
            {/* <div className='absolute top-1 w-full h-full opacity-2 p-10 blur-sm'> */}
            <Image
              className='object-cover object-center mx-auto rounded-md'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          {/* <section className='mt-2 p-5 w-full z-5 bg-slate-600'> */}
          <section className='mt-2 p-5 w-full z-10'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                {/* <h1 className='text-4xl font-extrabold'>{post.title}</h1> */}

                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex items-center space-x-3'>
                <Image
                  className='rounded-full mr-5'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={70}
                  width={70}
                />

                {/* <div className='w-44'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{}</div>
                </div> */}
              </div>
            </div>

            {/* <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category: any) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-[#F7AB0A] px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div> */}
          </section>
        </div>
      </section>

      {/* <div className='mt-2 px-10 py-6 bg-white rounded-md'>
        {post.body.map((block: any, index: number) => {
          if (block._type === 'code') {
            return (
              <BlockContent
                key={index}
                blocks={[block]}
                serializers={serializers}
                projectId='xxxxxxxx'
                dataset='production'
              />
            );
          } else {
            return (
              <PortableText
                key={index}
                value={[block]}
                components={RichTextComponents}
              />
            );
          }
        })}
      </div> */}

      {/* post block */}
      <div className='mt-2 px-10 py-6 bg-zinc-900 rounded-md'>
        {post.body.map((block: any, index: number) => {
          if (block._type === 'code') {
            return (
              // <CodeBlock
              <ClientCodeBlock
                key={index}
                node={block}
                // style={dracula}
              />
            );
          } else {
            return (
              <PortableText
                key={index}
                value={[block]}
                components={RichTextComponents}
              />
            );
          }
        })}
      </div>
    </article>
  );
}

export default Post;

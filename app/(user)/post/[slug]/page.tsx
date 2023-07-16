import Image from 'next/image';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
// import category from '@/schemas/category';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
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

  const post: Post = await client.fetch(query, { slug });
  // console.log(post);

  return (
    // <div>Post: {slug}</div>
    <article className='px-10 pb-28 bg-slate-200'>
      <section className='space-y-2 text-white'>
        {/* <section className='space-y-2 border border-[#F7AB0A] text-white'> */}
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-6 p-10'>
            {/* <div className='absolute top-0 w-full h-full opacity-6 blur-sm p-10'> */}
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='mt-2 p-5 w-full rounded-md z-10'>
            {/* <section className='mt-2 p-5 bg-[#F7AB0A] w-full'> */}
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'>{post.title}</h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex items-center space-x-3'>
                <Image //
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={70}
                  width={70}
                />

                <div className='w-44'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p //
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText
        value={post.body}
        components={RichTextComponents}
      />
    </article>
  );
}

export default Post;

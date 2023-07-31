import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSideRoute from './ClientSideRoute';
// import { PostData } from '@/typings';
import { Post } from '@/typings';

type Props = {
  posts: Post[];
  // posts: PostData[];
  // isMainPage: boolean;
};

// export default function BlogList({ posts, isMainPage }: Props) {
export default function BlogList({ posts }: Props) {
  return (
    <div className='bg-[#080e10]'>
      <hr className='mb-10 ml-auto mr-auto h-1 w-5/6 md:w-full px-5 bg-slate-400' />
      {/* <hr className='border-[#F7AB0A] mb-10' /> */}

      <div className='grid grid-cols-1 md:grid-cols-2 px-5 sm:px-10 gap-10 gap-y-16 pt-10 pb-20 rounded-md'>
        {posts.map((post) => (
          <ClientSideRoute
            key={post._id}
            route={`/post/${post.slug.current}`}
          >
            {/* <div className='flex flex-col group cursor-pointer p-2 border-2 border-slate-200 rounded-md drop-shadow-md'> */}
            <div className='flex flex-col group cursor-pointer p-2 rounded-md drop-shadow-md'>
              <div className='relative w-full h-80 hover:drop-shadow-2xl  group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                  className='object-cover object-left lg:object-center rounded-md'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg drop-shadow-lg text-white p-5 flex justify-between rounded-md'>
                  <div>
                    <p className='font-bold'>{post.title}</p>

                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mt-5 flex-1'>
                <p className='text-3xl text-gray-200 font-semibold'>{post.title}</p>
                <p className='text-gray-300 line-clamp-2'>{post.description}</p>
              </div>

              <p className='mt-5 font-bold flex items-center group-hover:underline text-[#F7AB0A]'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

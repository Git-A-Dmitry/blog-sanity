import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';
// import preview from '../pages/api/preview';

const query = groq`
  *[_type=='post'] {  // Get me all of the posts
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc) // descending order
`;

// revalidate the page every 60 seconds
// export const revalidate = 60;

export default async function HomePage() {
  if (previewData()) {
    return (
      <>
        <div className='text-red-700'>Preview mode</div>
        <PreviewSuspense
          fallback={
            <div role='status'>
              <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>Loading Preview Data...</p>
            </div>
          }
        >
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts.length);

  return (
    <div>
      <h1 className='text-white'>Not in Preview Mode</h1>
      <BlogList posts={posts} />;
    </div>
  );
}

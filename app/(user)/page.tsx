import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';
// import preview from '../pages/api/preview';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createAt desc)
`;

// revalidate the page every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p>Loading Preview Data</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  // <div className='text-red-700'>Preview mode</div>;

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;

  // return (
  //   <div>
  //     <h1 className='text-xl'>Not in Preview mode</h1>
  //   </div>
  // );
}

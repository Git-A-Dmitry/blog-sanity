import dynamic from 'next/dynamic';

const BlockContentLoader = dynamic(() => import('@sanity/block-content-to-react'), {
  ssr: false,
});

export default BlockContentLoader;

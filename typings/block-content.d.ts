declare module '@sanity/block-content-to-react' {
  import * as React from 'react';

  interface BlockContentProps {
    // Define the props here based on the actual props used in your application
    // For example:
    // blocks: any[];
    // serializers?: any;
    // projectId?: string;
    // dataset?: string;
    // ...
  }

  const BlockContent: React.FC<BlockContentProps>;
  export default BlockContent;
}

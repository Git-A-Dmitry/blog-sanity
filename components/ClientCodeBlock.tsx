'use client';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ClientCodeBlock = ({ node }: { node: any }) => {
  if (!node || !node.code) {
    return null;
  }

  return (
    <pre className='lg:w-3/4 ml-auto mr-auto mt-5 mb-5 rounded-md text-lg'>
      <SyntaxHighlighter
        // className={`language-${node?.language || 'text'}`}
        language='jsx'
        style={dracula}
      >
        {node?.code}
      </SyntaxHighlighter>
    </pre>
  );
};

export default ClientCodeBlock;

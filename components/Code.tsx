import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';

Refractor.registerLanguage(js);

export type CodeProps = {
  language: string;
  code: string;
  highlightedLines?: any;
  // highlightedLines?: number[]; // Optional, only if you want to highlight specific lines
};

const Code: React.FC<CodeProps> = ({ language, code, highlightedLines }) => {
  return (
    <Refractor
      language={language}
      value={code}
      markers={highlightedLines}
    />
  );
};

export default Code;

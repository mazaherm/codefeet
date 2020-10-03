import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/pageElements/Code';

const components = {
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray', padding: '2px' }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

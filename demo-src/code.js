import React from 'react';

export default ({ settings }) => {
  const innerConfig = Object.keys(settings).map((key) => {
    return `  ${key}: ${settings[key]}`;
  }).join(',\n');
  const importStmt = `import Confetti from 'react-dom-confetti';\n\n`
  const config = `const config = {\n${innerConfig}\n\};\n`
  const codeString = `return <Confetti show={ someProp } config={ config }/>`;
  return (
    <pre>
      { importStmt } 
      { config }
      { codeString }
    </pre>
  );
}


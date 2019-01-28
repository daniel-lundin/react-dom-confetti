import React from "react";

function maybeQuote(s) {
  if (typeof s === "string") {
    return `"${s}"`;
  }
  return s;
}
export default ({ settings }) => {
  const innerConfig = Object.keys(settings)
    .map(key => {
      return `  ${key}: ${maybeQuote(settings[key])}`;
    })
    .join(",\n");
  const importStmt = `import Confetti from 'react-dom-confetti';\n\n`;
  const config = `const config = {\n${innerConfig}\n\};\n`;
  const codeString = `return <Confetti active={ someProp } config={ config }/>`;
  return (
    <pre>
      {importStmt}
      {config}
      {codeString}
    </pre>
  );
};

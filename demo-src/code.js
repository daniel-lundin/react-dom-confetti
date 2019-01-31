import React from "react";

function prettyPrint(s) {
  if (typeof s === "string") {
    return `"${s}"`;
  }
  if (Array.isArray(s)) {
    return `[${s.map(prettyPrint).join(", ")}]`;
  }
  return s;
}
export default ({ settings }) => {
  const innerConfig = Object.keys(settings)
    .map(key => {
      return `  ${key}: ${prettyPrint(settings[key])}`;
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

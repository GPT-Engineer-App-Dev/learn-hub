import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Box, Button, VStack } from "@chakra-ui/react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  return (
    <VStack spacing={4} width="100%">
      <Box width="100%">
        <CodeMirror
          value={code}
          height="200px"
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
        />
      </Box>
      <Button colorScheme="teal" onClick={runCode}>
        Run Code
      </Button>
    </VStack>
  );
};

export default CodeEditor;
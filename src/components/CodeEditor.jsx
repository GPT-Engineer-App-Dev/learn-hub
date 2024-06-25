import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Box, Button, VStack } from "@chakra-ui/react";
import { VM } from 'vm2';

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const executeCode = () => {
    const vm = new VM({
      timeout: 1000,
      sandbox: {}
    });

    try {
      vm.run(code);
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
          onChange={(value) => handleCodeChange(value)}
        />
      </Box>
      <Button colorScheme="teal" onClick={executeCode}>
        Run Code
      </Button>
    </VStack>
  );
};

export default CodeEditor;
import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import Chart from "../Chart/Chart";
import "bootstrap/dist/css/bootstrap.css"
import "./InputArea.css"
const InputArea = () => {
  const [code, setCode] = React.useState(
    `[{"type":"start","timestamp":1519862400000,"select":["min_response_time","max_response_time"],"group":["os","browser"]},
    {"type":"span","timestamp":1519862400000,"begin":1519862400000,"end":1519862460000},
    {"type":"data","timestamp":1519862400000,"os":"linux","browser":"chrome","min_response_time":0.1,"max_response_time":1.3},
    {"type":"data","timestamp":1519862400000,"os":"mac","browser":"chrome","min_response_time":0.2,"max_response_time":1.2},
    {"type":"data","timestamp":1519862400000,"os":"mac","browser":"firefox","min_response_time":0.3,"max_response_time":1.2},
    {"type":"data","timestamp":1519862400000,"os":"linux","browser":"firefox","min_response_time":0.1,"max_response_time":1.0},
    {"type":"data","timestamp":1519862460000,"os":"linux","browser":"chrome","min_response_time":0.2,"max_response_time":0.9},
    {"type":"data","timestamp":1519862460000,"os":"mac","browser":"chrome","min_response_time":0.1,"max_response_time":1.1},
    {"type":"data","timestamp":1519862460000,"os":"mac","browser":"firefox","min_response_time":0.2,"max_response_time":1.1},
    {"type":"data","timestamp":1519862460000,"os":"linux","browser":"firefox","min_response_time":0.3,"max_response_time":1.4},
    {"type":"stop","timestamp":1519862460000}]`
  );
  const [editedCode, setEditedCode] = React.useState(code);

  return (
    <>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
      />

      <Chart json={editedCode} />

      <footer className="fixed-bottom">
        <button className="btn btn-primary button" onClick={() => setEditedCode(code)}>GENERATE CHART</button>
      </footer>
      
    </>
  );
};

export default InputArea;

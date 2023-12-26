"use client";
import Editor from "@monaco-editor/react";
import { JSXElementConstructor, ReactElement, SetStateAction, useState } from "react";

type Props = {};

const TEST: { fileName: string; language: string; icon: React.ReactElement,content: string }[] =
  [
    {
      fileName: "index.js",
      language: "javascript",
      icon: (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>file_type_js_official</title>
            <rect x="2" y="2" width="28" height="28" fill="#f5de19"></rect>
            <path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path>
          </g>
        </svg>
      ),
      content:'contentojs'
    },
    {
      fileName: "Papaassasaasassa.html",
      language: "html",
      icon: (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>file_type_js_official</title>
            <rect x="2" y="2" width="28" height="28" fill="#f5de19"></rect>
            <path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path>
          </g>
        </svg>
      ),
      content:'contento'
    },
    {
      fileName: "shege.css",
      language: "css",
      icon: (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>file_type_js_official</title>
            <rect x="2" y="2" width="28" height="28" fill="#f5de19"></rect>
            <path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path>
          </g>
        </svg>
      ),
      content:'contentocss'
    },
  ];
const CodeEditor = (props: Props) => {
  const [activeEditor, setActiveEditor] = useState(TEST[0]);

  const handleClick = (editor: SetStateAction<{ fileName: string; language: string; icon: ReactElement<any, string | JSXElementConstructor<any>>; content: string; }>) => {
    setActiveEditor(editor);
    console.log()
  };

  return (
    <div className="bg-blue-500 h-full flex flex-col">
      <div className="flex gap-1 bg-red-200">
        {TEST.map((editor) => (
          <div
            className="text-sm flex items-center gap-1 bg-green-400"
            key={editor.fileName}
            onClick={() => handleClick(editor)}
          >
            <div className="w-8 ">{editor.icon}</div>
            <p className="block max-w-[120px] overflow-hidden text-ellipsis">{editor.fileName}</p>
            <div className="w-8 ml-[5px] ">{editor.icon}</div>
          </div>
        ))}
      </div>
      <div className=" flex-grow">
         <Editor
         defaultLanguage={activeEditor.language}
         defaultValue={"// some comment"}
         value={activeEditor.content}
         
       />
      </div>
    </div>
  );
};

export default CodeEditor;

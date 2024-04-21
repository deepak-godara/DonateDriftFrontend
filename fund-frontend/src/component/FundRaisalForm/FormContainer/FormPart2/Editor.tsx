import React from 'react'
import {EditorState} from "draft-js";
import { Editor,  } from "react-draft-wysiwyg";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editor.css";
interface EditorsProps {
    handleEditorChange: (content: EditorState) => void;
  }
  
function Editors(props:EditorsProps) {
  return (
    <Editor
    toolbarClassName="toolbar-class"
    editorClassName="editor-class"
    wrapperClassName="wrapper-class"
    onEditorStateChange={(editorState) => props.handleEditorChange(editorState)}
    toolbar={{
      options: ["inline", "fontSize", "fontFamily", "list", "textAlign"],

      inline: {
        inDropdown: false,
        className: "list-container",
        options: ["bold", "italic", "underline"],
        bold: { className: "svg-class" },
        italic: { className: "svg-class" },
        underline: { className: "svg-class" },
      },
      fontSize: {
        options: [
          8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
        ],
        className: "fonttag",
        component: undefined,
        dropdownClassName: "dropdown",
      },
      fontFamily: {
        options: [
          "Arial",
          "Georgia",
          "Impact",
          "Tahoma",
          "Times New Roman",
          "Verdana",
        ],
        className: "fonttag2",
        component: undefined,
        dropdownClassName: "dropdown2",
      },
      list: {
        inDropdown: false,
        className: "list-container",
        component: undefined,
        options: ["unordered", "ordered", "indent", "outdent"],
        unordered: { className: "list-item" },
        ordered: { className: "list-item" },
        indent: { className: "list-item" },
        outdent: { className: "list-item" },
      },
      textAlign: {
        inDropdown: false,
        className: "list-container",
        component: undefined,
        dropdownClassName: undefined,
        options: ["left", "center", "right", "justify"],
        left: { className: "list-item" },
        center: { className: "list-item" },
        right: { className: "list-item" },
        justify: { className: "list-item" },
      },
    }}
  ></Editor>
  )
}

export default Editors
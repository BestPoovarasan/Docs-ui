import "./word.css";
import {useCallback,} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Box,} from "@mui/material";

// import { io } from "socket.io-client";
// import { useParams } from "react-router-dom"

// const Div = styled(Box)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   // margin: "auto",
// });


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', 'link', 'image'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],        // h1 to h6 tag
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];

const Wordpad = () => {
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, {
            modules: {
                toolbar: toolbarOptions
              },
              theme: 'snow',
        })
        // q.disable()
        // q.setText("Loading...")
        // setQuill(q)
      }, [])
  return (
    <Box className="container" ref={wrapperRef}></Box>
  )
}

export default Wordpad
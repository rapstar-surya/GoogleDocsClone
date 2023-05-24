import React from "react";
import "./SecondNavbar.css";
import FormControl from "./FormControls";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintIcon from "@mui/icons-material/Print";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

export default function SecondNavbar() {
  return (
    <div className="secondNavbar_mainDiv">
      <UndoIcon sx={{marginLeft:'2rem'}}/>
      <RedoIcon />
      <PrintIcon />
      <SpellcheckIcon />
      <FormatPaintIcon />

      <FormControl />

      <FontStyle />
    </div>
  );
}

function FontStyle() {
    const handleBold = () =>{
        document.execCommand("bold",false,null)
    }

    const handleItalic = () =>{
        document.execCommand("italic",false,null)
    }

    const handleUnderline = () =>{
        document.execCommand("underline",false,null)
    }

  return (
    <div style={{ display: "flex", gap: "1rem", marginLeft: "2rem" }}>
      <h3 onClick={handleBold}>B</h3>
      <h3>I</h3>
      <u>
        {" "}
        <h3>U</h3>{" "}
      </u>
      <u>
        {" "}
        <h3>A</h3>{" "}
      </u>
      
    </div>
  );
}

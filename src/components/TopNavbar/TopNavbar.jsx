import React, { useState } from "react";
import "./TopNavbar.css";

import ArticleIcon from "@mui/icons-material/Article";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import HistoryIcon from "@mui/icons-material/History";
import CommentIcon from "@mui/icons-material/Comment";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import LockIcon from "@mui/icons-material/Lock";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TopNavbar() {
  const [content, setContent] = useState("Untitled document");

  const handleContentChange = (e) => {
    setContent(e.target.textContent);
  };

  const onKeyDownFunc = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className="navbar-parentsDiv">
      <div className="navbar-left-icon">
        <ArticleIcon sx={{ width: "2rem", height: "2rem", color: "blue" }} />
      </div>

      <div>
        <div className="secondDiv">
          <h3
            contentEditable={true}
            suppressContentEditableWarning
            onChange={handleContentChange}
            onKeyDown={onKeyDownFunc}
          >
            {content}
          </h3>
          <StarBorderIcon />
          <DriveFileMoveIcon />
          <CloudDoneIcon />
        </div>

        <div className="tools">
          {/* <h4>File</h4>
          <h4>Edit</h4> */}
          <ToolsDropDown/>
          <h4>View</h4>
          <h4>Insert</h4>
          <h4>Format</h4>
          <h4>Tools</h4>
          <h4>Extension</h4>
          <h4>Help</h4>
        </div>
      </div>

      <div className="navbarRightIcons">
        <HistoryIcon />
        <CommentIcon />
        <VideoCameraFrontIcon />
        <span className="lock">
          <LockIcon />
          &nbsp; Share{" "}
        </span>
        <div className="profile"></div>
      </div>
    </div>
  );
}

function ToolsDropDown() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCopy = () =>{
    document.execCommand("copy",false,null)
  }
  const handlePaste = () =>{
    document.execCommand("paste",false,null)
  }
  const handleSelectAll = () =>{
    document.execCommand("selectAll",false,null)
  }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 60 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>File</em>
          </MenuItem>
          <MenuItem value={50}>New</MenuItem>
          <MenuItem value={75}>Download</MenuItem>
          <MenuItem value={90}>Rename</MenuItem>
          <MenuItem value={100}>Print</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 60 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Edit</em>
          </MenuItem>
          <MenuItem onClick={handleCopy}>Copy</MenuItem>
          <MenuItem onClick={handlePaste}>Paste</MenuItem>
          <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

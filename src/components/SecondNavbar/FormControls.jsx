import React, { useState } from "react";
import "./SecondNavbar.css";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FormControls() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <span className="vl"></span> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Size</em>
          </MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
          <MenuItem value={90}>90%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
          <MenuItem value={125}>125%</MenuItem>
          <MenuItem value={150}>150%</MenuItem>
          <MenuItem value={200}>200%</MenuItem>
        </Select>
      </FormControl>
      {/* <span className="vl"></span> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Text</em>
          </MenuItem>
          <MenuItem value={10}>Title</MenuItem>
          <MenuItem value={20}>Subtitle</MenuItem>
          <MenuItem value={30}>Heading1</MenuItem>
          <MenuItem value={30}>Heading2</MenuItem>
          <MenuItem value={30}>Heading3</MenuItem>
        </Select>
      </FormControl>
      {/* <span className="vl"></span> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>More Fonts</em>
          </MenuItem>
          <MenuItem value={10}>Arial</MenuItem>
          <MenuItem value={20}>Comfortaa</MenuItem>
          <MenuItem value={30}>Comic Sans MS</MenuItem>
        </Select>
      </FormControl>
      {/* <span className="vl"></span> */}
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "2rem" }}
      >
        <span>-</span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Font Size</em>
            </MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={36}>36</MenuItem>
            <MenuItem value={48}>48</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={72}>72</MenuItem>
            <MenuItem value={96}>96</MenuItem>
          </Select>
        </FormControl>
        <span>+</span>
      </div>
      {/* <span className="vl"></span> */}
    </div>
  );
}

import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import TextAreas from "./components/TextAreas/TextAreas";



export default function App() {
  return (
    <div>
      <TopNavbar />
      <SecondNavbar />

      <TextAreas/>
    </div>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./components/ContactForm";
// import SheetDataViewer from "./components/SheetDataViewer";
// import SheetPage from "./pages/SheetPage";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  // function doPost(e) {
  //   try {
  //     // Get the active spreadsheet and sheet
  //     const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //     const sheet = spreadsheet.getActiveSheet();

  //     // Parse the incoming data from the form
  //     const data = JSON.parse(e.postData.contents);

  //     // Add a timestamp
  //     const timestamp = new Date();

  //     // Append the data as a new row
  //     sheet.appendRow([
  //       timestamp,
  //       data.name,
  //       data.email,
  //       data.phone,
  //       data.message,
  //     ]);

  //     // Return success response
  //     return ContentService.createTextOutput(
  //       JSON.stringify({
  //         status: "success",
  //         message: "Data saved successfully",
  //       })
  //     ).setMimeType(ContentService.MimeType.JSON);
  //   } catch (error) {
  //     // Return error response
  //     return ContentService.createTextOutput(
  //       JSON.stringify({
  //         status: "error",
  //         message: error.toString(),
  //       })
  //     ).setMimeType(ContentService.MimeType.JSON);
  //   }
  // }

  return (
    <>
      <ContactForm />
    </>
  );
}

export default App;

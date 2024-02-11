import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Routes/index.tsx";

import "./index.scss";
//#region 
// MANTINE DEPENDENCY 
/*
 * core styles are required for all packages
 */ 
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
//#endregion

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

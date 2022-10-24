import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
  typography: {
    fontFamily: ["Farhang", "tahoma"].join(","),
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Farhang';
        font-style: normal;
        font-weight: 400;
        src: url('./assets/fonts/Farhang2FaNum-Medium.woff') format('woff'),
             url('./assets/fonts/Farhang2FaNum-Medium.woff2') format('woff2'),
             url('./assets/fonts/Farhang2FaNum-Medium.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Farhang';
        font-weight: 700;
        src: url('./assets/fonts/Farhang2FaNum-Bold.woff') format('woff'),
             url('./assets/fonts/Farhang2FaNum-Bold.woff2') format('woff2'),
             url('./assets/fonts/Farhang2FaNum-Bold.ttf') format('truetype');
      }
      `,
    },
  },
  palette: {
    primary: {
      main: "#6a0380",
      dark: "#ffea00",
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

root.render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ProSidebarProvider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

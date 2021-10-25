import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { SearchProvider } from "./providers/Search";
import { ResultProvider } from "./providers/Result";
import { ListProvider } from "./providers/List";
import { ActiveProvider } from "./providers/Active";
import { ShowProvider } from "./providers/Show";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SearchProvider>
      <ResultProvider>
        <ListProvider>
          <ActiveProvider>
            <ShowProvider>
              <App />
            </ShowProvider>
          </ActiveProvider>
        </ListProvider>
      </ResultProvider>
    </SearchProvider>
  </StrictMode>,
  rootElement
);

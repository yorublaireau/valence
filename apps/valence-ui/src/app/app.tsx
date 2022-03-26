import React, {} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Sidebar } from "./features/core/sidebar";
import { HomePage } from "./features/home/home-page";
import { CharacterListPage } from "./features/character/character-list-page";
import { PlayerListPage } from "./features/player/player-list-page";
import { CharacterEditPage } from "./features/character/character-edit-page";
import { CharacterCreatePage } from "./features/character/character-create-page";

export function App() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Sidebar />
          <main>
            <Routes>
              <Route path="/">
                <Route path="" element={<HomePage />} />
                <Route path="players" element={<PlayerListPage />} />
                <Route path="characters">
                  <Route path="" element={<CharacterListPage />} />
                  <Route path="new" element={<CharacterCreatePage />} />
                  <Route path=":id" element={<CharacterEditPage />} />
                </Route>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

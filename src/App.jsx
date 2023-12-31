import { useState } from "react"
import { ThemeProvider, styled } from "styled-components"

import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'

import { darkTheme, lightTheme } from './Theme/Theme.js'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home.jsx"
import Video from "./components/Pages/Video.jsx"
import Login from "./components/Pages/Login.jsx"

const Container = styled.div `
  display: flex;
`

const Main = styled.div `
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 0px 50px 0px 200px;

  @media screen and (max-width : 768px) {
      padding: 0 60px 0 100px;
    }
`

function App() {

  const [themeMode, setThemeMode] = useState(true);

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <Container>
        <Menu themeMode={themeMode} setThemeMode={setThemeMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App;

import temaLight from './Components/theme/light'
import temaDark from './Components/theme/dark'
import Projetos from './Containers/Projetos'
import SideBar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './style'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

function App() {
  const [TemaDark, setTemaDark] = useState(false)

  function trocarTheme() {
    setTemaDark(!TemaDark)
  }

  return (
    <ThemeProvider theme={TemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocarTheme={trocarTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

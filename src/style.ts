import styled, { createGlobalStyle } from 'styled-components'

const estiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
list-style: none;

body {
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 16px;
  }
}



`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 40px;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`

export default estiloGlobal

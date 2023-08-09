import styled from 'styled-components'

export const Lista = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: opx;
    row-gap: 20px;
  }
`

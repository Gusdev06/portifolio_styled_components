import styled from 'styled-components'
import { P } from '../../Components/Paragrafos/styles'

export const SideBarStyle = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const ParagrafoUser = styled(P)`
  margin-top: 7px;
  margin-bottom: 24px;
`

export const Botao = styled.button`
  color: #eee;
  margin-top: 40px;
  padding: 8px;
  background-color: #282a35;
  font-weight: bold;
  border-radius: 14px;
  border: none;
  cursor: pointer;
`

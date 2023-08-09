import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

export const LinkBotao = styled.a`
  font-size: 14px;
  padding: 8px;
  background-color: ${(props) => props.theme.CorFundoBotao};
  color: ${(props) => props.theme.CorDeFundo};
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`

import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  margin-top: 16px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282A35' : '#949494')};
`

import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.CorPrincipal};
  font-weight: bold;
  font-size: ${({ fontSize }: Props) => (fontSize ? fontSize + 'px' : '14px')};
`

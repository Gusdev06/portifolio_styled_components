import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoDanger = styled(Botao)`
  background-color: red;
  color: #fff;
  border: none;
  padding: 20px;
  margin: 20px;

  span {
    text-decoration: line-through;
    border-bottom: 1px #000 solid;
  }
`

const Teste = () => {
  return (
    <>
      <Botao>Ola</Botao>
      <Botao fontSize="100px">Ola</Botao>
      <BotaoDanger fontSize="30px">
        <span>Perigo</span>
      </BotaoDanger>
    </>
  )
}

export default Teste

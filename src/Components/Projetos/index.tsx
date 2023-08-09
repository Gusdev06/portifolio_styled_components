import Paragrafo from '../Paragrafos'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './style'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">
        Lista de tarefas com filtro utilizando o framework VueJS
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto

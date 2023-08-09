import { Avatar } from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafos'
import Titulo from '../../Components/Titulo'
import { SideBarStyle } from './style'
import { ParagrafoUser } from './style'
import { Botao } from './style'

const SideBar = () => (
  <aside>
    <SideBarStyle>
      <Avatar />
      <Titulo fontSize={16}>Gustavo Gomes</Titulo>
      <ParagrafoUser fontSize={16} tipo="secundario">
        Gusdev06
      </ParagrafoUser>
      <Paragrafo fontSize={12}>Engenheiro frontend</Paragrafo>
      <Botao>Trocar tema</Botao>
    </SideBarStyle>
  </aside>
)

export default SideBar

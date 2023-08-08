import Titulo from '../../Components/Titulo'
import Paragrafo from '../../Components/Paragrafos'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      ducimus eum consequatur id a cupiditate non modi itaque dicta. Dolores
      quas officiis aspernatur eum consequuntur dolor aliquid voluptatibus
      ducimus dolorem.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Gusdev06&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gusdev06&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre

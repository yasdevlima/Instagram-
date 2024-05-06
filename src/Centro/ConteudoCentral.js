import Stories from "./Story/Stories"
import Post from "./Feed/Post"
import './ConteudoCentral.css'
import Storie1 from '../imagens/flauz.png'
import Storie2 from '../imagens/chr.png'
import Storie3 from '../imagens/bella.png'
import Storie4 from "../imagens/hande.png"
import Storie5 from '../imagens/laura.png'
import Storie6 from '../imagens/jude.png'
import Storie7 from '../imagens/darlan.png'
import PerfilFeed from '../imagens/volei.png'
import PerfilFeed2 from '../imagens/per.png'
import PerfilFeed3 from '../imagens/hailee.png'
import PostFoto from '../imagens/cam.png'
import PostFoto2 from '../imagens/felipe.png'
import PostFoto3 from '../imagens/he.png'

import TopMobile from "../Esquerda/TextMenu";
function ConteudoCentral () {
  return (
    <div className="conteudoCentral">
        <TopMobile/>
        <div className="containerStories">
            <Stories fotoStorie = {Storie1}
            nomeStorie = 'Flauz'
            />
            <Stories fotoStorie = {Storie2}
            nomeStorie = 'Chris'/>
            <Stories fotoStorie = {Storie3}
            nomeStorie = 'Bella'/>
            <Stories fotoStorie = {Storie4}
            nomeStorie = 'Hande'/>
             <Stories fotoStorie = {Storie5}
            nomeStorie = 'Laura'/>
            <Stories fotoStorie = {Storie6}
            nomeStorie = 'Jude'/>    
            <Stories fotoStorie = {Storie7}
            nomeStorie = 'Darlan'/>    
        </div>
        <div className="containerPost">   
            <Post fotoUser={PerfilFeed} title='cbvolei' imgPostagem={PostFoto} titledown='cbvolei' titlepostagem='Camisas disponíveis!' />
            <Post fotoUser={PerfilFeed2} title='filipemartinskeys' imgPostagem={PostFoto2} titledown='filipemartinskeys' titlepostagem='Pega esse timbre!' />
            <Post fotoUser={PerfilFeed3} title='haileesteinfeld' imgPostagem={PostFoto3} titledown='haileesteinfeld' titlepostagem='GOLDEN GLOBES' />

        </div>
   

    </div>
  )
}

export default ConteudoCentral
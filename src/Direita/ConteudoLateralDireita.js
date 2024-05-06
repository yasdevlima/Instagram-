

import './ConteudoLateralDireita.css'
import './SugestoesPessoas.css'
import SeuPerfil from './SeuPerfil'
import SugestoesPessoas from './SugestoesPessoas'
import InfoMeta from './InfosMeta'
import Perfil1 from '../imagens/clara.png'
import Perfil2 from '../imagens/the.png'
import Perfil3 from '../imagens/sergio.png'
import Perfil4 from '../imagens/anavi.png'


function ConteudoLateralDireita() {
  return (
    <div className='ConteudoLateralDireita'>
        <div className='containerContentDireita'>
            <SeuPerfil/>
        <div className='SugestoesPessoas'>
            <div className='topSide'>
                <p>Sugestões para você</p>
                <button>Ver tudo</button>
            </div>
            <div className='bottomSide'>
                <SugestoesPessoas imgPerfil={Perfil1} nome ='Clara Kontop' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil2}  nome ='TheWeeknd' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil3}  nome ='Sérgio Marone' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil4} nome ='anavitoria' acao='Sugestões para você' seguir='Seguir' />
              
            </div>   
        </div>
        <InfoMeta/>
    </div>
  
    </div>
  )
}

export default ConteudoLateralDireita
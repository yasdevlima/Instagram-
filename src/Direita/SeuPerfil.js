
import FotoPerfil from '../imagens/yas.png'
import './SeuPerfil.css'
function SeuPerfil() {
  return (
    <div className='SeuPerfil'>
        <div className='containerImg'>
            <img src={FotoPerfil}  alt=""/>
        </div>
        <div className='containerNome'>
          <h3>Perfil</h3>
          <h4>Seu perfil</h4>
        </div>
        <div className='containerButton'>
          <button>Mudar</button>
        </div>
    </div>
  )
}

export default SeuPerfil
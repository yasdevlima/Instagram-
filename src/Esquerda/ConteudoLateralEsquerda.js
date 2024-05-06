import logo from '../imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import Perfil from '../imagens/yas.png'
import { FaRegCompass } from "react-icons/fa";
import { PiVideoFill, PiVideoLight } from "react-icons/pi";
import { FaThreads } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <div className='esquerdita'>
                <div className='containerLogo'>
                     <img src={logo} className="logo"  alt=""/>
                     <div className='mobileIcon'>
                     <RiInstagramFill style={{width: '23px',
                    height: '23px',
                    margin:' 0 1rem',   
                    }}/>
                     </div>
                </div>
                <ul className='contentMenu'>
                    <Menu icone={<GoHomeFill
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />}nome="Página inicial" classe ='text-menu'/>

                    <Menu  icone={<BiSearch
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />} nome="Pesquisa"  classe ='text-menu' />

                    <Menu  icone={<FaRegCompass 
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />} nome="Explorar"  classe ='text-menu' />

                    <Menu  icone={<PiVideoLight
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />} nome="Reels"  classe ='text-menu'/>
                    
                    <Menu  icone={<RiMessengerLine
                    style={{width: '23px',
                    height: '23px', 
                    margin:' 0 1em',                     
                    }} />} nome="Mensagens"  classe ='text-menu'/>

                    <Menu icone={< FaRegHeart
                    style={{width:'23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />} nome="Notificações"  classe ='text-menu'/>
                    
                    <Menu icone={<CgAddR
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    }} />} nome="Criar"  classe ='text-menu'/>

                    <Menu icone={<img style={{
                        width: '23px',
                        height: '23px',
                        borderRadius: '50%',
                        margin:' 0 1em'}} src={Perfil}  alt=""
                    ></img>}
                       nome="Perfil"  classe ='text-menu'/> 
 
                </ul>

                <div className='configContainer'>
                    <Menu  icone={<FaThreads 
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0  1em',   
                    }} />}  nome="Threads"  classe ='text-menu'/> 

                    <Menu  icone={<AiOutlineMenu 
                    style={{width: '23px',
                    height: '23px',
                    margin:' 0 1em',   
                    
                    }} />}  nome="Mais"  classe ='text-menu'/>                
                </div>
            </div>    
            <div className='mobileMenu'> 
            <Menu icone={<GoHomeFill
                    style={{width: '30px',
                    height: '30px',
                    margin:' 0 1em',   
                    }} />} classe ='text-menu'/>

                    <Menu  icone={<CiSearch
                    style={{width: '30px',
                    height: '30px',
                    margin:' 0 1em',   
                    }} />}   classe ='text-menu' />

                <Menu icone={<CgAddR
                    style={{width: '30px',
                    height: '30px',
                    margin:' 0 1em',   
                    }} />}   classe ='text-menu'/>

                    <Menu  icone={<PiVideoFill
                    style={{width: '30px',
                    height: '30px',
                    margin:' 0 1em',   
                    }} />}  classe ='text-menu'/>
                    <Menu icone={<img style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        margin:' 0 1em'
                    }} src={Perfil}  alt=""
                    ></img>}
                       nome="Perfil"  classe ='text-menu'/> 
 
            </div>
        </div>
        
    )
}

// export default ConteudoLateralEsquerda;
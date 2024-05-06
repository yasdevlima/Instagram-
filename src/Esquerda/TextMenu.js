
import './TextMenu.css'
import { CiHeart } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import Menu from './TextMenu';

export default function TextMenu(props) {
  return (

    <div className='TopMobile'>
  
    <Menu icone={< CiHeart
    style={{width:'30px',
    height: '30px',
    margin:' 0 1em',   
    }} />}   classe ='text-menu'/>

<Menu  icone={<RiMessengerLine
    style={{width: '30px',
    height: '28px', 
    margin:' 0 1em',                     
    }} />}classe ='text-menu'/>                  
</div>

  
  );
}
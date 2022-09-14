import React from 'react';
import { Link } from 'react-router-dom';

const NavPopup = ({props, id, fun}) => {
    console.log(props)
    console.log(id);
    return (
    <div className='NavPopup' onClick={fun}>
        {
            props.map((txt, index) =>
                id == 5?
                <Link to='/class' className="menuItemClass">
                    {txt}
                </Link>
                :
                id == 1?
                <div className="menuItem">
                    <Link to={`/about${index+1}`}>
                        {txt}
                    </Link>
                </div>
                :
                id == 2?
                <div className="menuItem">
                    <Link to={`/parents${index+1}`}>
                        {txt}
                    </Link>
                </div>
                :
                id == 3?
                <div className="menuItem">
                    <Link to={`/students${index+1}`}>
                        {txt}
                    </Link>
                </div>
                :
                id == 4?
                <div className="menuItem">
                    <Link to='/teachers'>
                        {txt}
                    </Link>
                </div>
                :
                console.error("нет перехода")
            )
        }
    </div>
  )
}

export default NavPopup











// props.map((txt) =>
//                 id == 5?
//                 <Link to='/about1' className="menuItemClass">
//                     {txt}
//                 </Link>
//                 :
//                 <div className="menuItem">
//                     <Link to='/about1'>
//                         {txt}
//                     </Link>
//                 </div>
//             )
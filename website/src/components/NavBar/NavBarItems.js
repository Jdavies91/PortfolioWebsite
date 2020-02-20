import React from 'react'

import { Nav} from'react-bootstrap'
import '../../css/Navbar.css'
function NavBarItems(props){
    return (
     <Nav.Link href={props.id} className="navbar-brand float-left fontcolor ">{props.name}</Nav.Link>
    )
}

export default NavBarItems;
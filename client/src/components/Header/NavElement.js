import React from "react"

function NavElement(props){
    return (
        <a className="nav-link"
           className={props.item.activate}
            href="/">{props.item.name}
        </a>
    )
}

export default NavElement

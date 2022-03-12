import React from 'react'

const Layout = (props) => {
    return (
       <div>
           <p>Hello {props.firstname}</p>
           <p>Hello {props.secondname}</p>
           <p>Hello {props.thirdname}</p>
       </div> 
    )
}

export default Layout  
import React, { Component } from 'react'
import { NavLink } from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <div>
               <section className="bg-dark p-3 container-fluid">
                       <div className="d-flex justify-content-center py-2 px-4">
                           <ul className="d-flex text-light px-4">
                               <li className="nav-item mx-1">
                                   <NavLink to="" className="nav-link text-light">ACCUIEL</NavLink>
                               </li>
                               <li className="nav-item mx-1">
                                   <NavLink to="" className="nav-link text-light">QUI SOMMES-NOUS</NavLink>
                               </li>
                               <li className="nav-item mx-1">
                                   <NavLink to="" className="nav-link text-light">ACTUALITES</NavLink>
                               </li>
                               <li className="nav-item mx-1">
                                   <NavLink to="" className="nav-link text-light">AGIR AVEC NOUS</NavLink>
                               </li>
                           </ul>
                       </div>
                   <div className="row text-center py-2 px-4">
                            <p className="text-light"> &copy; Copyright 2021 Joas Leonel Inovetion Technology Startup All right reserved, 93100 Montreuil  </p>
                    </div>
               </section> 
            </div>
        )
    }
}

export default Footer

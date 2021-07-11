import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

export class Header extends Component {
    render() {
        return (
            <div>
                <section>
                   <nav className="navbar navbar-expand-md navbar-dark bg-dark p-4 fixed-top ">
                       <div className="container-fluid">

                           <NavLink to="" className="navbar-brand">
                               <img src="" alt="..." width="30" height="24" class="d-inline-block align-text-top"/> <span className="text-warning fw-bold px-2">NEPTUNE</span>
                           </NavLink>

                           <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                               <span className="navbar-toggler-icon"></span>
                           </button>

                           <div className="collapse navbar-collapse" id="nav">

                               <ul className="navbar-nav justify-content-end" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">

                                   <li className="nav-item px-2">
                                       <NavLink to="#" className="nav-link active" aria-current="page">ACCUIEL</NavLink>
                                   </li>

                                   <li className="nav-item position-relative px-2">
                                       <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">QUI SOMMES-NOUS ?</NavLink>
                                       <ul className="" aria-labelledby="dropdownMenuButton1">
                                           <li className="nav-item"><NavLink to="" className="nav-link">Présentation des activités  clés </NavLink></li>
                                           <li className="nav-item"><NavLink to="" className="nav-link">Nos équipes</NavLink></li>
                                           <li className="nav-item"><NavLink to="" className="nav-link">Nos partenaires</NavLink></li>
                                       </ul>
                                   </li>

                                   <li className="nav-item px-2">
                                       <NavLink to="" className="nav-link">ACTUALITES</NavLink>
                                   </li>

                                   <li className="nav-item position relative px-2">
                                       <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AGIR AVEC NOUS ?</NavLink>
                                       <ul className="" aria-labelledby="dropdownMenuButton1">
                                           <li className="nav-item"><NavLink to="" className="nav-link">Comment aider </NavLink></li>
                                           <li className="nav-item"><NavLink to="" className="nav-link">Faire un don</NavLink></li>
                                           <li className="nav-item"><NavLink to="" className="nav-link">Nos partenaires</NavLink></li>
                                       </ul>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </nav>
                </section>
            </div>
        )
    }
}

export default Header

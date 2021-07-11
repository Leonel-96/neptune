import React, { Component } from 'react'
import {FaHandshake, FaHeart, FaUsers,FaArrowCircleRight,FaNewspaper,FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../css/home.css'
import Header from './header'
import Footer from './footer'
import T4 from '../image/T4.jpg'
import T9 from '../image/T9.jpg'
import T10 from '../image/T10.jpg'
import OIP from '../image/OIP.jpg'
import OIP1 from '../image/OIP1.jpg'
import OIP2 from '../image/OIP2.jpg'
import OIP3 from '../image/OIP3.jpg'
import OIP4 from '../image/OIP4.jpg'
import OIP5 from '../image/OIP5.jpg'
import R1 from '../image/R1.jpg'
import R2 from '../image/R2.jpg'
import R3 from '../image/R3.jpg'
import R4 from '../image/R4.png'
import R5 from '../image/R5.jpg'
import R6 from '../image/R6.png'
export class Home extends Component {
    render() {
        return (
            <div className="position-relative ">
                <Header/>
                    <section>
                        <div className="container-fluid">
                            <div id="carouselCaption" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselCaption" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselCaption" data-bs-slide-to="1" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselCaption" data-bs-slide-to="2" aria-label="Slide 1"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={T4} alt="..." className="d-block w-100"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First Slide</h5>
                                            <p>Some representation placeholder content for the first slide</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={T9} alt="..." className="d-block w-100"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second Slide</h5>
                                            <p>Some representation placeholder content for the first slide</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <img src={T10} alt="..." className="d-block w-100"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third Slide</h5>
                                            <p>Some representation placeholder content for the first slide</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaption" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselCaption" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="container rounded-3 shadow-lg bg-light content-container">
                                <section className="p-5 mb-3">
                                    <div className="row p-4 text-center">
                                        <h2 className="fw-bold">Nos 3 formes d'actions majeure</h2>
                                        
                                    </div>
                                    <div className="row p-4">
                                        <div className="col-md-4 text-center my-2">
                                            <FaUsers className="i-icons"></FaUsers>
                                            <h4 className="fw-bold">L'insertion par l'Activité Economique</h4>
                                            <p>Nous fournissons du travail rémunéré dans le cadre de l'IAE. Notre capacité d'accueil est aujourd'hui d'une centaine de personnes, 
                                            employées en contrats aidés grâce aux activités qui ont été développées.</p>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <FaHandshake className="i-icons"/>
                                            <h4 className="fw-bold">L'encadrement des TIG</h4>
                                            <p>Nous encadrons des Travaux d'Intérêt général qui nous sont adressés par le Tribunal de Bobigny. 
                                            A ce titre, NEPTUNE a en moyenne annuelle 80 personnes intégrées dans ses équipes.</p>
                                        </div>
                                        <div className="col-md-4 text-center my-2">
                                            <FaHeart className="i-icons"/>
                                            <h4 className="fw-bold">La distribution alimentaire</h4>
                                            <p>NEPTUNE, dans le cadre de la banque alimentaire, assure la distribution de nourriture en faveur des salariés 
                                            en insertion et de leurs familles (60 repas à midi et 450 colis distribués chaque soir).</p>
                                        </div>
                                    </div>
                                    <div className="row p-4">
                                        <div className="col-md-12">
                                            <p>NEPTUNE est une association fondée en 1994 avec pour but de lutter contre les exclusions par le « travail rémunéré ».</p>
                                            <p>Son action est fondée sur la conviction que, pour des personnes en grande difficulté, le retour  consolidé à une vie 
                                            personnelle et sociale autonome, adaptée à leurs aspirations et à leurs capacités, doit combiner une dimension d’emploi rémunéré et 
                                            une dimension de réadaptation sociale, qui reposent  sur un accompagnement personnalisé.</p>
                                        </div>
                                    </div>
                                    <div className="row p-4">
                                        <div className="d-flex justify-content-center">
                                        <NavLink to="" className="btn btn-outline-primary p-3">EN SAVOIR PLUS SUR NOS ACTIVITES 

                                        <FaArrowCircleRight className="mx-2 fs-5"/></NavLink></div>
                                    </div>
                                </section>
                                <section className="p-5 bg-warning">
                                        <div className="row p-4 text-center">
                                            <h1 className="fw-bold text-muted">Dernières actualités</h1>
                                        </div>
                                        <div className="row d-flex justify-content-center p-4">
                                            <div className="col-md-3 shadow rounded bg-body mx-4 my-2">
                                                <div className="py-2">
                                                    <img className="card-img" src={T9} height="250" alt="..."/>
                                                </div>
                                                <div className="py-2">
                                                    <NavLink to="" className="fw-bold f-link">
                                                        Changement d'horaires aux Néflliers
                                                    </NavLink>
                                                </div>
                                                <div className="py-2">
                                                    <p className="">Le 1er juin 2021 les horaires du magasin du 51 rue des Néfliers changent pour mieux vous accueillir. 
                                                    Il sera désormais ouvert toute la journée du mardi au samedi. Le…</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 shadow rounded bg-body my-2">
                                                <div className="py-2">
                                                    <NavLink to="" className="fw-bold f-link">Découvrez notre lettre trimestrielle d'Avril 2021!</NavLink>
                                                </div>
                                                <div className="py-2">
                                                    <p className="">Vous souhaitez en savoir plus sur l’activité et la vie de NEPTUNE, n’hésitez pas à découvrir 
                                                    notre lettre trimestrielle d’avril 2020 en cliquant sur le lien ci-dessous.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 shadow rounded bg-body mx-4 my-2">
                                                <div className="py-2">
                                                    <NavLink to="" className="fw-bold f-link">Du nouveau au magasin du 36 BD Paul Vaillant  couturier</NavLink>
                                                </div>
                                                <div className="py-2">
                                                    <p className="">Notre magasin du 36 Bd Paul Vaillant Couturier fait peau neuve ! Complètement transformé 
                                                    pour toujours mieux vous y accueillir, vous y 
                                                    trouverez désormais en plus des meubles et de l’électro-ménager, un grand…</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-4">
                                            <div className="d-flex justify-content-center">
                                                <NavLink to="" className="btn btn-outline-light p-3 fw-bold">VOIR TOUTES LES ACTUALITES <FaNewspaper className="fs-3 mx-2 text-primary"/></NavLink>
                                            </div>
                                        </div>
                                        <div className="row d-flex align-items-center p-4">
                                            <div className="col-md-4 p-2 text-center">
                                                <NavLink to=""><FaFacebook className="f-icons c-blue "/></NavLink>
                                                <h2 className="fw-bold text-muted fs-5">Facebook</h2>
                                            </div>
                                            <div className="col-md-4 p-2 text-center">
                                                <NavLink to=""><FaInstagram className="f-icons c-dlue"/></NavLink>
                                                <h2 className="fw-bold text-muted fs-5">Instagram</h2>
                                            </div>
                                            <div className="col-md-4 p-2 text-center">
                                                <NavLink to=""><FaLinkedin className="f-icons c-glue"/></NavLink>
                                                <h2 className="fw-bold text-muted fs-5">Linkedin</h2>
                                            </div>
                                        </div>
                                </section>
                                <section className="p-5">
                                    <div className="row p-4 text-center">
                                        <h1 className="fw-bold text-muted">Nos principaux partenaires institutionnels</h1>
                                    </div>
                                    <div className="row p-4 d-flex justify-content-center">
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP1} alt="" className="logo"/></div>
                                            <div className=""><p>Préfecture Seine-Saint-Denis</p></div>
                                        </div>
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP} alt="" className="logo"/></div>
                                            <div className=""><p>Conseil Départemental Seine-Saint-Denis</p></div>
                                        </div>
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP2} alt="" className="lgo"/></div>
                                            <div className=""><p>Mairie Montreuil</p></div>
                                        </div>
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP5} alt="" className="logo"/></div>
                                            <div className=""><p>Pole Emploi</p></div>
                                        </div>
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP3} alt="" className="logo"/></div>
                                            <div className=""><p>Tribunal Bobigny</p></div>
                                        </div>
                                        <div className="col-md-3 text-center mx-4">
                                            <div className=""><img src={OIP4} alt="" className="logo"/></div>
                                            <div className=""><p>Direccte</p></div>
                                        </div>
                                    </div>
                                    <div className="row p-4 text-center">
                                        <h1 className="fw-bold text-muted">Les fondations</h1>
                                    </div>
                                    <div className="row p-4">
                                        <div className="col-md-4">
                                            <div className=""><img src="" alt="" className=""/></div>
                                            <div className=""><p></p></div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className=""><img src="" alt="" className=""/></div>
                                            <div className=""><p></p></div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className=""><img src="" alt="" className=""/></div>
                                            <div className=""><p></p></div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className=""><img src="" alt="" className=""/></div>
                                            <div className=""><p></p></div>
                                        </div>
                                    </div>
                                    <div className="row p-4 text-center">
                                        <h1 className="fw-bold text-muted">Les partenaires Banques alimentaires</h1>
                                    </div>
                                    <div className="row p-4 d-flex justify-content-center">
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R1} alt="..." className="logo"/></div>
                                        </div>
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R2} alt="..." className="logo"/></div>
                                        </div>
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R3} alt="..." className="logo"/></div>
                                        </div>
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R6} alt="..." className="logo"/></div>
                                        </div>
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R4} alt="..." className="logo"/></div>
                                        </div>
                                        <div className="col-md-3 text-center my-2 mx-4">
                                            <div className=""><img src={R5} alt="..." className="logo"/></div>
                                        </div>
                                    </div>
                                </section>
                                <Footer/>
                            </div>
                        </div>
                    </section>
               
            </div>
        )
    }
}

export default Home

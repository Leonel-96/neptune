import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import '../css/home.css'

export class main extends Component {
    render() {
        return (
            <div className="position-relative">
               <Header/>
               <section className="">
                   <div className="container-fluid bg-img text-center">
                        <h1 className="fw-bold text-light lh">Présentation et activités clés</h1>
                   </div>
               </section>
               <section>
                   <div className="container-fluid d-flex justify-content-center">
                       <div className="container  shadow-lg rounded-3 bg-light content-container">
                            {this.props.children}
                           <Footer/>
                       </div>
                   </div>
               </section> 
            </div>
        )
    }
}

export default main

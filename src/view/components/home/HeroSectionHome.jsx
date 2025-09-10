import React from 'react';
import '../../../styles/home/heroSection.css';
import { Link } from 'react-router-dom';

function HeroSectionHome(){
    return(
        <>
            <section className='hero-section-home'>
                <navbar className='navbar-hero-section-home'>
                    <div className='first-item-navbar'>
                        <img className='logo-navbar' src="/logo-resilio-group.png" alt='logo' />
                        <span className='title-navbar'>
                            Resilio Group
                        </span>
                    </div>
                    <div className='second-item-navbar'>
                        <ul className='list-navigate'>
                            <li className='item-navigate'><a href="">Funcionalidades</a></li>
                            <li className='item-navigate'><a href="">Precios</a></li>
                            <li className='item-navigate'><Link>Contacto</Link></li>
                        </ul>
                    </div>
                </navbar>
                <div className='content-hero-section'>
                    <span className='title-content-hero-section'>
                        Somos Resilio Group
                    </span>
                    <span className='subtitle-content-hero-section'>
                        Una comunidad, un grupo de jóvenes  amantes de la creatividad y de las buenas experiencias
                    </span>
                    <div className='container-buttons-content-hero-section'>
                        <button className='item-button' id='button-1'>
                            Contactarse
                        </button>
                        <button className='item-button' id='button-2'>
                            <a href="#planes">
                                Ver Planes
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeroSectionHome;
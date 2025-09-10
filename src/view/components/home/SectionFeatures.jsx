import React from "react";
import '../../../styles/home/sectionFeatures.css';

function SectionFeatures(){
    const features = [
        {
            svg:"💳",
            name:"Descuentos exclusivos",
            content:"Accedé a precios preferenciales en marcas asociadas."
        },
        {
            svg:"⭐",
            name:"Acumulación de puntos",
            content:"Sumá puntos en cada compra y canjealos por más beneficios."
        },
        {
            svg:"🚀",
            name:"Acceso prioritario",
            content:"Entrá primero a promociones y lanzamientos limitados."
        },
        {
            svg:"📱",
            name:"Gestión simple",
            content:"Todo desde una app centralizada, fácil y rápida."
        }
    ];

    return(
        <>
            <span className="title-section-features">
                Descubrí todo lo que podés hacer
            </span>
            <span className="subtitle-section-features">
                Herramientas diseñadas para simplificar tu día y potenciar tu experiencia
            </span>
            <div className="container-cards">
                {features.map((item) => {
                    return(
                        <div className="card-item">
                            <div className="item-svg">{item.svg}</div>
                            <span className="title-card">{item.name}</span>
                            <span className="subtitle-card">{item.content}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionFeatures;
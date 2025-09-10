import React from "react";
import '../../../styles/home/sectionHowWorks.css'

function SectionHowWorks(){
    const howWorks = [
    {
        svg: "📝",
        name: "1. Registrate",
        content: "Creá tu cuenta en pocos pasos y accedé a los planes de nuestra red de beneficios exclusivos."
    },
    {
        svg: "🤝",
        name: "2. Elegí tu partner",
        content: "Explorá las marcas asociadas, activá tus beneficios y empezá a ahorrar."
    },
    {
        svg: "🎉",
        name: "3. Disfrutá las recompensas",
        content: "Acumulá puntos, recibí descuentos y accedé a promociones especiales."
    }
    ];

    return(
        <>
            <span className="title-section-how-work">
                ¿Cómo funciona?
            </span>
            <div className="container-cards-how-work">
                {howWorks.map((item) => {
                    return(
                        <div className="card-item-how-work">
                            <div className="content-card-item">
                                <div className="container-svg-how-work">{item.svg}</div>
                                <span className="title-item-how-work">{item.name}</span>
                                <span className="content-item-how-work">{item.content}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionHowWorks;
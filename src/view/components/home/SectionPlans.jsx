import React from "react";
import '../../../styles/home/sectionPlans.css'

function SectionPlans(){
    const plans = [
        {
            name: "Básico",
            price: "$4.999",
            features: ["Acceso limitado", "Sin descuentos completos"]
        },
        {
            name: "Premium",
            price: "$9.999",
            features: ["Acceso total a descuentos", "Preventas, puntos y tarjeta digital"]
        },
        {
            name: "Platinum",
            price: "$14.999",
            features: ["incluye todo lo demás", "Experiencias exclusivas", "Servicio concierge"]
        }
    ];
    return(
        <>
            <span className="title-section-plans">
                Elige tu plan
            </span>
            <span className="subtitle-section-plans">
                Elige el plan que mejor se adapta a tus necesidades y disfruta de sus beneficios
            </span>
            <div className="container-cards-section-plans">
                {plans.map((item, index) => {
                    return(
                    <div className="container-cards-plans" id={`card-plan-${index}`}>
                        <div className="content-card-plans">
                            <span className="title-card-plan">{item.name}</span>
                            <div className="container-payment">
                                <span className="price-card-plan">{item.price}</span><span className="period-card">/por mes</span>
                            </div>
                            {item.features.map((element) => {
                                return(
                                    <div className="container-features">
                                        <span className="emoji-card">🚀</span>
                                        <span className="feature-card-plan">{element}</span>
                                    </div>
                                )
                            })}
                            <div className="container-button-send">
                                <button id={`button-card-${index}`}>Comenzar</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionPlans;
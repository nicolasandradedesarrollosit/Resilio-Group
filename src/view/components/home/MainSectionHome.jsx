import React from 'react';
import '../../../styles/home/mainSection.css';
import SectionFeatures from './SectionFeatures';
import SectionHowWorks from './SectionHowWorks';
import SectionPlans from './SectionPlans';

function MainSectionHome(){
    return(
        <>
            <main className='section-main-home'>
                <div className='video-demo-main'>
                    <iframe width="560" height="315"
                        className='video-demo' 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <section className='container-section-features'>
                    <SectionFeatures />
                </section>
                <section className='container-section-how-works'>
                    <SectionHowWorks />
                </section>
                <section id='planes' className='container-section-plans'>
                    <SectionPlans />
                </section>
            </main>
        </>
    )
}

export default MainSectionHome;
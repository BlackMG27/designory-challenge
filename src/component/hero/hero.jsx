import React, {Fragment} from 'react';
import Button from './../button/button';


const Hero = () => (
    <Fragment>
        <section className="hero-section">
            <div className="hero-section__content">
                <h2 className="hero-section__subtitle">In Honor of Women's History Month</h2>
                <h1 className="hero-section__title"> Badass Women in History</h1>
                <Button 
                    text="Check Them Out!"
                    label="Learn More about Badass Women in History"
                />
            </div>
        </section>
    </Fragment>
)

export default Hero;
import React, {Fragment} from 'react';
import Button from './../button/button';


const Hero = () => (
    <Fragment>
        <section className="hero-section">
            <h2 className="subtitle">In Honor of Women's History Month</h2>
            <h1 className="title">Three Badass Women in History</h1>
            <Button text="Check Them Out!"/>
        </section>
    </Fragment>
)

export default Hero;
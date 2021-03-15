import React, {Fragment} from 'react';
import Button from './../button/button';

const Feature = () => (
    <Fragment>
        <section className="feature-section">
            <div className="feature-section__image">
                <img src="https://classicalbumsundays.com/wp-content/uploads/2017/12/am-sisterrosettatharpe.jpg_423682103.jpg" alt="Feature: Sister Rosetta Tharpe" className="feature-section__img"/>
            </div>
            <aside className="feature-section__content">
                <div className="feature-section__content-info">
                    <h2 className="feature-section__title">Feature: Sister Rosetta Tharpe</h2>
                    <h3 className="feature-section__subtitle">Founding Lady of Rock 'n' Roll</h3>
                    <p className="feature-section__text">Sister Rosetta Tharpe was an American singer, songwriter, guitarist, and recording artist. She attained popularity in the 1930s and 1940s with her gospel recordings, characterized by a unique mixture of spiritual lyrics and rhythmic accompaniment that was a precursor of rock and roll.</p>
                </div>
                <Button
                    text="Learn More about Rosetta Tharpe"
                    label="Rosetta Tharpe"
                />
            </aside>
        </section>
    </Fragment>
)

export default Feature;
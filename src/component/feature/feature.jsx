import React, {Fragment} from 'react';
import Button from './../button/button';

const Feature = () => (
    <Fragment>
        <section className="feature-section">
            <div className="feature-section__image">
                <img src="" alt="Feature:" className="feature-section__img"/>
            </div>
            <aside className="feature-section__content">
                <div className="feature-section__content-info">
                    <h2 className="feature-section__title"></h2>
                    <h3 className="feature-section__subtitle"></h3>
                    <p className="feature-section__text"></p>
                </div>
                <Button
                    text=""
                    label=""
                />
            </aside>
        </section>
    </Fragment>
)

export default Feature;
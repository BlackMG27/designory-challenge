import React, {Fragment} from 'react';

const Article = ({src, alt, title, subtitle, text}) => (

    <Fragment>
        <figure className="article-item">
            <div className="article-item__image">
                <img src={src} alt={alt} className="article-item__img"/>
            </div>
            <h2 className="article-item__title">{title}</h2>
            <h3 className="article-item__subtitle">{subtitle}</h3>
            <p className="article-item__text">{text}</p>
        </figure>
    </Fragment>
)

export default Article;
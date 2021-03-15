import React, {Component, Fragment} from 'react';
import Article from './article';
import {info} from './article-info';

class Articles extends Component {
    render (){
        return(
    <Fragment>
        <section className="article-section">
            {
                info.map((bio, key) => (
                    <Article 
                    key={key} 
                    src={bio.img}
                    title={bio.title}
                    subtitle={bio.subtitle}
                    text={bio.text}
                    />
                ))
            }
        </section>
    </Fragment>
        )
    }
}

export default Articles;

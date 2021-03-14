import React, {Fragment} from 'react';

const Button = ({text}) => (
    <Fragment>
        <button className="btn" role="button">{text}</button>
    </Fragment>
)

export default Button;
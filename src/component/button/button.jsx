import React, {Fragment} from 'react';

const Button = ({text, label}) => (
    <Fragment>
        <button className="btn" aria-label={label} role="button">{text}</button>
    </Fragment>
)

export default Button;
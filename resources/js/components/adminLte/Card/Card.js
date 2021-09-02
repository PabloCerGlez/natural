import React from 'react';

export const Body = (props) => {
    return (
        <div className="card-body">
            {props.children}
        </div>
    );
}

export const Footer = (props) => {
    return (
        <div className="card-footer clearfix">
            {props.children}
        </div>
    );
}

export const Card = (props) => {
    const {tools,  children} = props;
    const title = props.title ? <h3 className="card-title">{props.title}</h3> : null;

    return (
        <div className="card card-primary">
            <div className="card-header">
                {title}
                <div className="card-tools">
                    {tools}
                </div>
            </div>

            {children}

        </div>
    );
}

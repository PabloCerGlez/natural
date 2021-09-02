import React from "react";

export const Title = (props) => {
    const {img, title, subTitle, description, isHeader} = props;
    let subtitle = <p className="bg-red-main text-white inline-block px-1">{subTitle}</p>
    let height = '85vh'
    let classHeader = 'bg-white absolute bottom-0 rounded-tr-none lg:rounded-tr-xl py-5 px-8 sm:py-10 md:p-10 md:pl-16 bg-opacity-75 w-full lg:w-3/4';

    if (isHeader) {
        subtitle = <h3 className="font-semibold text-green-main title">{subTitle}</h3>;
        height = '58vh';
        classHeader = 'bg-white absolute bottom-0 rounded-tr-none lg:rounded-tr-xl py-5 px-8 sm:py-10 md:p-10 md:pl-16 bg-opacity-75 w-full lg:w-7/12';
    }

    return (
        <div className="carousel-cell" style={{backgroundImage:`url("${img}")`, height:height}}>
            <div className={classHeader} >
                <div className="ml-0 lg:ml-16">
                    {subTitle ?
                        subtitle
                        : null
                    }
                    <h1 className='font-semibold text-gray-900'>{title}</h1>
                    {description ?
                        <p className="text-xs sm:text-sm">
                            {description}
                        </p>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

export const Header = (props) => {
    const {img, title, subTitle, description} = props;

    return (
        <div className="relative">
            <Title isHeader={true} {...props}/>
        </div>
    )
}

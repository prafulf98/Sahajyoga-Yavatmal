import React from 'react'

const Heading = ({ headingName }) => {
    return (
        <>
            <h1 className="self-center text-shadow-2xs text-3xl font-bold whitespace-nowrap uppercase">
                {headingName ? headingName : 'Yavatmal Sahajyoga'}
            </h1>
        </>
    )
}

export default Heading

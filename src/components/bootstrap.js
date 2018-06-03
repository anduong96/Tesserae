import React, { Fragment } from 'react'

// because React bootstrap is ugly
export const Bootstrap4 = ({ enable }) => {
    return enable ?
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /> 
        :  null
}

export default {
    Bootstrap4
}

import React from 'react'

// because React bootstrap is ugly
export const Bootstrap4 = ({ enable }) => enable
    ? <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    : null

export const Bootstrap3 = ({ enable }) => enable
    ? <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    : null

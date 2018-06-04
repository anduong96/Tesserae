import React from 'react'

export const Column = ({ children, size }) => (
    <div className={`col-sm-12 col-md-${size} col-lg-${size}`}>
        {children}
    </div>
)

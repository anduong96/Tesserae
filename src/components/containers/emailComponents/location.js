import React from 'react'
import locationSVG from '../../../img/icons/location.svg'

export const LocationIcon = () => (
    <div className={'email-component location'}>
        <img src={locationSVG} className={'location-icon'} />
    </div>
)

export const Location = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component location'}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <div style={config.style}>
            <img src={locationSVG} style={{ height: 100, width: '100%', marginBottom: 5 }}/>
            <p>{config.street}</p>
            { config.state && <p>{config.state}</p> }
            { config.country && <p>{config.country}</p> }
        </div>
    </div>
)

export default { Location, LocationIcon }

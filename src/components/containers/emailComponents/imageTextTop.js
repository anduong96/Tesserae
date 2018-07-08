/*
* Only using for icons and fillers right now.
*/

import React from 'react'
import imageSVG from '../../../img/icons/image.svg'
import textSVG from '../../../img/icons/text.svg'

export const ImageTextTopIcon = () => (
    <div className={'image-text-top'}>
         <img src={imageSVG} className={'image-icon stack'} />
         <img src={textSVG} className={'text-icon stack'} />
    </div>
)

export const ImageTextTop = ({ image, descript, key }) => (
    <div className={''} key={key}>
        <img src={image.src} style={image.style}/>
        <p style={descript.style}>{descript.text}</p>
    </div>
)

export default {
    ImageTextTopIcon,
    ImageTextTop
}

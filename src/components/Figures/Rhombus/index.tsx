import React from 'react'
import {FiguresSizesTypes} from '../../../types'

interface Props {
    size?: FiguresSizesTypes
}

export default ({ size = 'middle' }: Props) => {
    return <div className={`figure rhombus rhombus_${size}`}>
        <svg width="250" height="500" viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M125 0L250 250H0L125 0Z" fill="black"/>
            <path d="M125 500L250 250H0L125 500Z" fill="black"/>
        </svg>
    </div>
}
import React from 'react'
import {FiguresSizesTypes} from '../../../types'

interface Props {
    size?: FiguresSizesTypes
}

export default ({ size = 'middle' }: Props) => {
    return <div className={`figure square square_${size}`}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="500" fill="#000"/>
        </svg>
    </div>
}
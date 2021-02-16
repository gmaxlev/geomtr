import React from 'react'
import {FiguresSizesTypes} from '../../../types'

interface Props {
    size?: FiguresSizesTypes
}

export default ({ size = 'middle' }: Props) => {
    return <div className={`figure triangle triangle_${size}`}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M250 0L500 500H0L250 0Z" fill="black"/>
        </svg>
    </div>
}
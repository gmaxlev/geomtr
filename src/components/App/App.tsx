import React from 'react'
import Square from '../Figures/Square/index';
import Rhombys from '../Figures/Rhombus/index'
import Triangle from '../Figures/Triangle/index'
import {FiguresTypes, FiguresSizesTypes} from '../../types'

interface IState {
    figure: FiguresTypes | null,
    size: FiguresSizesTypes
}

export default class App extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            figure: null,
            size: "middle"
        }
    }

    setFigure(figure: FiguresTypes) {
        this.setState({
            figure: figure
        })
    }

    setSize(size: FiguresSizesTypes) {
        this.setState({
            size: size
        })
    }

    render() {
        return <div className="container">
            <h1>Homework</h1>
            <div className="app">
                <div className="app__select">
                    <h2>Select the figure</h2>
                    <button className={`selectButton ${this.state.figure==="square" && 'selectButton_active'}`} onClick={() => this.setFigure('square')}>Square</button>
                    <button className={`selectButton ${this.state.figure==="triangle" && 'selectButton_active'}`} onClick={() => this.setFigure('triangle')}>Triangle</button>
                    <button className={`selectButton ${this.state.figure==="rhombus" && 'selectButton_active'}`} onClick={() => this.setFigure('rhombus')}>Rhombus</button>
                    <h2>Select the size</h2>
                    <button className={`selectButton ${this.state.size==="small" && 'selectButton_active'}`} onClick={() => this.setSize('small')}>Small</button>
                    <button className={`selectButton ${this.state.size==="middle" && 'selectButton_active'}`} onClick={() => this.setSize('middle')}>Middle</button>
                    <button className={`selectButton ${this.state.size==="big" && 'selectButton_active'}`} onClick={() => this.setSize('big')}>Big</button>
                </div>
                <div className="app__view">
                    <h2>Selected</h2>
                    {this.state.figure === null && <p>Select the figure and the size</p>}
                    {this.state.figure === 'square' && <Square size={this.state.size}/>}
                    {this.state.figure === 'rhombus' && <Rhombys size={this.state.size}/>}
                    {this.state.figure === 'triangle' && <Triangle size={this.state.size}/>}
                </div>
            </div>
        </div>
    }
}
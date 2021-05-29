import React, { Component,useEffect, useState} from 'react'
import Board from './Board';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNextX : true,
            squares : Array(9).fill(null)
        }
    }
    clicked(i){
        let sq = this.state.squares;
        if(sq[i]==null)
            sq[i] = this.state.isNextX ? 'X' : 'O';
        this.setState(
            {
                squares : sq,
                isNextX : !this.state.isNextX
            }
        )
        let winner =  this.checkWinner();
        if(winner != null){
            this.resetBoard();
            alert(`Congratulations ! Player ${winner} has won`);
        }
    }
    resetBoard(){
        this.setState(
            {
                isNextX : true,
                squares : Array(9).fill(null)
            }
        )
    }
    checkWinner(){
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            // console.log('Class: App, Function: checkWinner ==', this.state.squares[0], this.state.squares[1], this.state.squares[2]);
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
                    return this.state.squares[a];
                }
            }
            return null;
    }
    render() {
        return (
            <>
                <div className="game">
                    <div className="game-board"></div>
                    <Board onClick = {(i)=>this.clicked(i)} squares = {this.state.squares}></Board>
                    <button className="clear-button" onClick = {()=>this.resetBoard()}> Reset Board !</button>
                </div>
            </>
        )
    }
}

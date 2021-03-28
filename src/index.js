import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
    <button className="square" onClick={ props.onClick }>
        {props.value}
    </button>
    );
  }

  function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++){
          const [a, b, c] = lines[i];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
              return squares[a];
          }
      }
      return null;
  }
  
  class Board extends React.Component {

    renderSquare(i) {
      return (<Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>);
    }   
  
    render() {  
      const elements = [];
      for (let i = 0; i < 3; i++){
        let squares = [];
        for (let j = 0; j < 3; j++){
        squares.push(this.renderSquare(i*3+j));
        }
        elements.push(<div className="board-row">{squares}</div>);
      }
      return (
        <div>
          {elements}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          history: [
            {
              squares: Array(9).fill(null)
            }
          ],
          stepNumber: 0,
          xIsNext: true,
          location: Array(9).fill(null),
          ascending : true,
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currentHistory = history[history.length - 1];
        const squares = currentHistory.squares.slice();
        const currentLocation = this.state.location;
        currentLocation[this.state.stepNumber + 1] = i;       
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
              {
                squares:squares
              }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            location: currentLocation,         
        });         
    } 
    
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }

    sortMoves(){           
        this.setState({
          ascending: !this.state.ascending,
        });
    }

    render() {
        const history = this.state.history;
        const currentHistory = history[this.state.stepNumber];
        const winner = calculateWinner(currentHistory.squares);
        const location = this.state.location;
        const moves = history            
            .map((step, move) => {
            const desc = move?
                'Go to move #' + move:
                'Go to game start';
            const currentLocation = move? location[move] : -1;
            const column = currentLocation === -1? -1 : currentLocation % 3+1;
            const row = currentLocation === -1? -1 : Math.floor(currentLocation / 3)+1;
            const locaVal = move && move !== this.state.stepNumber?
                '('+row+', '+column+')':
                '';
            const currentLocaVal = move && move === this.state.stepNumber?
                '('+row+', '+column+')':
                '';
            return (
                <li key={move}>
                    <b>{currentLocaVal} </b>  
                    <small>{locaVal} </small>                    
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        })
        .sort((a, b) => this.state.ascending? 
          (a.key > b.key ? 1 : -1) :
          (a.key < b.key ? 1 : -1));        

        let status;
        if(winner){
            status = "Winner: " + winner;
        } else{
            status = "Next player: " + (this.state.xIsNext ? "X": "O");
        }

        return (
            <div className="game">
            <div className="game-board">
                <Board 
                    squares={currentHistory.squares}
                    onClick={i => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button onClick={() => this.sortMoves()}>Sort Moves</button>
                <ol>{moves}</ol>
            </div>
            </div>
        );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  
import Square from "./Square";

interface parameters {
    xIsNext: boolean,
    squares: string[],
    onPlay: Function
}

export default function Board(parameters: parameters) {

    function handleClick(i: number) {
        if (parameters.squares[i] || calculateWinner(parameters.squares)) {
            return;
        }
        const nextSquares = parameters.squares.slice();

        if (parameters.xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        parameters.onPlay(nextSquares);
    }

    function calculateWinner(squares: string[]) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(parameters.squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (parameters.xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={parameters.squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={parameters.squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={parameters.squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={parameters.squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={parameters.squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={parameters.squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={parameters.squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={parameters.squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={parameters.squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}
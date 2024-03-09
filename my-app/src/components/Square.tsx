interface parameters {
    value: string,
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Square(parameters: parameters) {
    return <button className="square" onClick={parameters.onSquareClick}>{parameters.value}</button>;
}
const Total = ({ parts }) => {
    const exerciseCount = parts.map(part => 
        part.exercises).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
    return <p>total of {exerciseCount} exercises</p>
}

export default Total
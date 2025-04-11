const Form = ({ addPerson, handleNameChange, handleNumberChange, newName, newNumber }) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                <span>name: </span>
                <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <span>number: </span>
                <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default Form
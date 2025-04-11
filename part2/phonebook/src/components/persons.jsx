import Person from './person'

const Persons = ({ visiblePersons }) => {
    return (
        <div>
            {visiblePersons.map((person, index) => 
                <Person key={index + 1} name={person.name} number={person.number}/>)}
        </div>
    )
}

export default Persons
const Field = ({ text, value, onChange }) => {
    return (
        <div>
            <span>{text}: </span><input value={value} onChange={onChange}/>
        </div>
    )
}

export default Field
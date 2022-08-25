import './DropDown.css'

const DropDown = (props) => {
    const onSelect = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={onSelect} required={props.required} value={props.value}>
                <option value=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown
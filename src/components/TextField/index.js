import './TextField.css'

const TextField = (props) => {

    const onType = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={onType} value={props.value} required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default TextField
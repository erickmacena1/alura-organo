import './Contributor.css'

const Contributor = ({ name, image, role, bgColor }) => {
    return (<div className='contributor'>
        <div className='header' style={{backgroundColor: bgColor}}>
            <img src={image} alt={name} />
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}

export default Contributor
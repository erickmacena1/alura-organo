import Contributor from '../Contributor'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.colorSecondary }

    return (
        props.contributors.length > 0
            ?
            <section className='team' style={css} >
                <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
                <div className='contributors'>
                    {props.contributors.map(contributor => <Contributor
                        key={contributor.name}
                        name={contributor.name}
                        role={contributor.role}
                        image={contributor.image}
                        bgColor={props.colorPrimary}
                    />)}

                </div>
            </section>
            :
            ""
    )
}

export default Team
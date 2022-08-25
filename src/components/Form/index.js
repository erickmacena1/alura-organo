import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState(props.teams[0])

    const onSave = (e) => {
        e.preventDefault()
        props.onRegisteredContributor({ name, role, image, team })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborado</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={role}
                    onChanged={value => setRole(value)}
                />
                <TextField
                    required={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropDown
                    required={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form
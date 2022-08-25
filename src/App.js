import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/index.js';
import Form from './components/Form';
import Team from './components/Team/index.js';

function App() {

    const teams = [
        {
            name: "Programação",
            colorPrimary: "#57C278",
            colorSecondary: "#D9F7E9",
        },
        {
            name: "Frontend",
            colorPrimary: "#82CFFA",
            colorSecondary: "#E8F8FF",
        },
        {
            name: "Data Science",
            colorPrimary: "#A6D157",
            colorSecondary: "#F0F8E2",
        },
        {
            name: "Devops",
            colorPrimary: "#E06B69",
            colorSecondary: "#FDE7E8",
        },
        {
            name: "Ux e Design",
            colorPrimary: "#DB6EBF",
            colorSecondary: "#FAE9F5",
        },
        {
            name: "Mobile",
            colorPrimary: "#FFBA05",
            colorSecondary: "#FFF5D9",
        },
        {
            name: "Inovação e Gestão",
            colorPrimary: "#FF8A29",
            colorSecondary: "#FFEEDF",
        }
    ]

    const [contributors, setContributors] = useState([])

    const onRegisteredContributor = (contributor) => {
        setContributors([...contributors, contributor])
    }

    return (
        <div className="App">
            <Banner />
            <Form
                teams={teams.map(team => team.name)}
                onRegisteredContributor={contributor => onRegisteredContributor(contributor)}
            />
            {teams.map(team => {
                return <Team
                    key={team.name}
                    name={team.name}
                    colorPrimary={team.colorPrimary}
                    colorSecondary={team.colorSecondary}
                    contributors={contributors.filter(contributor => contributor.team === team.name)}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;

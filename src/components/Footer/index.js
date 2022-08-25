import './Footer.css'

const Footer = () => {
    const socialMedias = [
        {
            img: "/imagens/fb.png",
            alt: "Facebook",
        },
        {
            img: "/imagens/tw.png",
            alt: "Twitter",
        },
        {
            img: "/imagens/ig.png",
            alt: "Instagram",
        },
    ]

    return (<footer className='footer'>
        <div>
            <section className='media'>
                <ul>
                    {socialMedias.map(sM => <li key={sM.alt}><a href='/'><img src={sM.img} alt={sM.alt} /></a></li>)}
                </ul>
            </section>

            <section className='logo'><img src="/imagens/logo.png" alt="Logo" /></section>

            <section className='author'>
                <h3>Desenvolvido por Erick Macena</h3>
            </section>
        </div>
    </footer>)
}

export default Footer
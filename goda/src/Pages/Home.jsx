import React from 'react'
import logo from "../assets/Images/logo.png"

import "./css/Home.css"


const description = `Sal e Açúcar: Sabores Portugueses de Excelência. Somos uma empresa dedicada à produção de deliciosos produtos alimentares, oferecendo uma variedade de salgados e doces tradicionais portugueses. De rissois e croquetes a panados, passando por irresistíveis rolos de chocolate, pão-de-ló e bolos para aniversário, a nossa paixão é criar autênticas iguarias que capturam o sabor e a tradição de Portugal. Com Sal e Açúcar, cada mordida é uma viagem ao coração da culinária portuguesa, feita com amor e dedicação.`

function Home() {
    return (
        <div className='home-page'>
            <div className="home-page-title">
                Bem Vindo à to Sal & Açucar
            </div>
            <div className="home-page-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="home-page-subtitle">
                Produtos tradicionais Portugueses!
            </div>
            <div className="home-page-description">
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Home
import React from 'react'
import '../styles/section-two.scss';

const Section2 = () => (
    <div className="container-fluid">
        <div className="section-two">
            <h1><img className="mr-2" src={require('../text.png')} alt="" />Fontes</h1>
            <p>Para auxiliar pessoas com visão limitada, é necessário o controle do tamanho das fontes do website.</p>
        </div>
    </div>
  )

export default Section2
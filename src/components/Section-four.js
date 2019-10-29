import React from 'react'
import '../styles/section-four.scss';

const Section4 = () => (
    <div className="container-fluid">
        <div className="section-four">
            <h1><img className="mr-2" src={require('../palette.png')} alt="" />Contraste</h1>
            <p>Essa função auxilia pessoas com déficit visual, deixando os fundos mais escuros com letras brancas, assim facilitando a vida de quem não consegue identificar algumas cores.</p>
            <div className="row">
                <div className="col-sm-6">
                    <img className="dark" src={require('../group_3.png')} alt="" />
                </div>
                <div className="col-sm-6">
                    <img src={require('../group_4.png')} alt="" />
                </div>
            </div>
        </div>
    </div>
  )

export default Section4
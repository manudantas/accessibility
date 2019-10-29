import React from 'react'
import '../styles/section-three.scss';

const Section3 = () => (
    <div className="container-fluid section-three">
            <div className="row">
                <div className="col-sm-6">
                    <div className="title">
                        <h1>Navegação por atalhos</h1>
                        <p>A navegação da página deve ser por meio do teclado, para auxiliar pessoas com deficiência visual ou mobilidade reduzida.</p>
                        <button type="button" class="btn btn-primary">Mostrar</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={require('../1113.png')} alt="" />
                </div>
            </div>
    </div>
  )

export default Section3
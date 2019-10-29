import React from 'react'
import '../styles/section-one.scss';

const Section1 = () => (
    <div className="container-fluid">
        <div className="section-one">
            <h1><img className="mr-2" src={require('../chat.png')} alt="" />Por que ter um site acessível ?</h1>
            <p>A acessibilidade digital é lei e, aos poucos, acompanhamos o surgimento de ações que buscam que ela seja aplicada.</p>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <div className="grey-card text-left">
                        <h4>“O Poder da web está em sua universalidade.”</h4>
                        <p>Tim Berners-Lee - W3C Director</p>
                        <h6>Como pessoas que ganham a vida fazendo websites, é nossa responsabilidade garantir que todos tenham acesso a elas. A acessibilidade da Web parece um pedido alto no papel, mas é definitivamente muito mais fácil do que parece.</h6>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="white-card">
                        <h4>LBI - Lei Brasileira de Inclusão</h4>
                        <p></p>
                        <h6>Em janeiro de 2016, foi a vez da LBI – Lei Brasileira de Inclusão. Também conhecida como o Estatuto da Pessoa com Deficiência, a lei versa sobre diversos pontos, que vão desde o relacionamento de órgãos públicos e privados com pessoas com deficiência, até a disposições específicas voltadas a tecnologia e reformas estruturais.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

export default Section1
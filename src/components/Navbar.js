import React from 'react'
import '../styles/navbar.scss';

const Navbar = () => (
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"> Ir para o Inicio (Alt + 1) <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ir para a descrição (Alt + 2)</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contraste</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">A-</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">A+</a>
      </li> 
    </ul>
  </div>
</nav>
)
  
export default Navbar
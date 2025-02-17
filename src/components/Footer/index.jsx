import React from 'react'
import { Container } from './styles'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <nav>
        <a href="https://www.instagram.com/amandamorais_psi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> <p>Amanda Morais</p>
        </a>
        <p> &copy; Todos os direitos reservados.</p>
      </nav>

      <nav>
        <p>Desenvolvido por </p>
        <a href="https://www.linkedin.com/in/victor-santos-de-menezes/" target="_blank" rel="noopener noreferrer">
          Victor Santos
        </a>
      </nav>
    </Container>
  )
}

export default Footer
import React from 'react'
import { ButtonStyle } from './styles'

export const Button = ({ text, link }) => {
  return (
    <ButtonStyle>
      <a href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
    </ButtonStyle>
  )
}

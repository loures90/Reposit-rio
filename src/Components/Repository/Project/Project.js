import React from 'react'
import {ContainerProject} from './ProjectStyled'

export default function Project(props) {
  return (
    <ContainerProject>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </ContainerProject>
  );
}

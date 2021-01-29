import React from 'react'
import styled from 'styled-components'
import Repository from '../Components/Repository/Repository'
import Presentation from '../Components/Presentation/Presentation'

const Container = styled.div`
    max-width: 1280px;
    min-height:100vh;
    display:flex;
    color:white;
    margin: auto;
    /* border:red solid 1px; */
`

export default function Home() {
  return (
    <Container>
      <Presentation/>
      <Repository/>
    </Container>
  );
}


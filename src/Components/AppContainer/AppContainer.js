import React from 'react'
import Home from '../../screens/Home'
import styled from 'styled-components'

const ContainerApp = styled.div`
    background-color:black;

`
function AppContainer() {
  return (
    <ContainerApp>
      <Home/>
    </ContainerApp>
  );
}

export default AppContainer;

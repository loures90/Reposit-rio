import React from 'react'
import Project from './Project/Project'
import styled from 'styled-components'

const ContainerRepo = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:50%;
  padding-top:10vh;
  /* border:blue solid 1px; */
  width:100%;
`;
export default function Repository() {
  return (
    <ContainerRepo>
      <Project
      title={'Projeto 1'}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut id purus vel arcu fringilla blandit sed id nunc. In vulputate tincidunt ex quis commodo.`}
      />
       <Project
      title={'Projeto 2'}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut id purus vel arcu fringilla blandit sed id nunc. In vulputate tincidunt ex quis commodo.`}
      />
    </ContainerRepo>
  );
}

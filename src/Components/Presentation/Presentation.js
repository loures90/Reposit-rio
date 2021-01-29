import React from 'react'
import Photo from '../../images/foto.jpg'
import Social from './Social/Social'
import { Img, PresentationContainer, H, P, Div, Subtitles} from './PresentationStyled'


export default function Presentation() {
  return (
    <Div>
      <PresentationContainer>
        <Img src={Photo} alt="photo" />
        <H>Hi, I am</H><H> Fernando Silva</H>
        <Subtitles>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
        </Subtitles>
        <Social />
      </PresentationContainer>
    </Div>

  );
}

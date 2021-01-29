import React from 'react'
import { Li, Ul, Link, ContainerSocial} from './SocialStyled'

export default function Social() {
    return (
        <ContainerSocial>
            <Ul>
                <Li><Link href="https://github.com/loures90">Github</Link></Li>
                <Li><Link href="https://www.instagram.com/fernando.loures/">Instagram</Link></Li>
                <Li><Link href="https://www.linkedin.com/in/fernandoloures/">Linkedin</Link></Li>
            </Ul>
        </ContainerSocial>

    );
}

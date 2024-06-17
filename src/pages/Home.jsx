import React from 'react'
import Foto from '/public/ADM.jpg'
import { HomeContainer } from './Home.styled'
import { LinksContainer } from './Home.styled'
import { GithubLogo, LinkedinLogo, DiscordLogo, InstagramLogo } from '@phosphor-icons/react'


export default function Home() {
  return (
    <div>
        <HomeContainer>
          <img src={Foto} alt="Icone de perfil do Matheus Estevan" />
          <h1>Matheus Estevan da Silva</h1>
          <strong>São Paulo, Brasil</strong>
          <p>"Estudante técnico de T.I."</p>

          <LinksContainer>
              
              <a href="https://github.com/matheus-estevan">
              <GithubLogo size={20} />
              GitHub  
              </a>

              <a href="www.linkedin.com/in/matheus-estevan-38018a297">
              <LinkedinLogo size={20} />
              LinkedIn
              </a>

              <a href="https://discord.gg/munJNDSEAB">
              <DiscordLogo size={20} />  
              Discord
              </a>

              <a href="https://www.instagram.com/math3uss._/">
              <InstagramLogo size={20} />
              Instagram
              </a>
            
          </LinksContainer>

        </HomeContainer>
    </div>
  )
}
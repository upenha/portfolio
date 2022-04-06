import React from 'react'
import { Container, Title, Button, Links, Social } from './styles'

export default function Home() {


  async function handleDiscord() {    
    await navigator.clipboard.writeText('Upenha#5999');
    alert('Usuário copiado com sucesso!')
  }
  return (
    <Container>
      <Title>olá, sou <b>upenha!</b></Title>
      {/* <Button>saiba mais</Button> */}
      <Links>
        <Social href='https://twitter.com/upenha_'>
          twitter
        </Social>
        <Social onClick={handleDiscord}>
          discord
        </Social>
        <Social href='https://github.com/upenha'>
          github
        </Social>
      </Links>
    </Container>
  )
}

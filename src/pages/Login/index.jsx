import { Container, ImagemApple, 
            ImagemGoogle, ImagemStyle, SpanOu, Subtitle, SubtituloFinal, Title,  } from "./style"
import imagemX from "../../assets/X.jpg"
import imagemG from "../../assets/google.jpg"
import imagemA from "../../assets/Apple.jpg"
import { ButtonApple, ButtonGoogle } from "../../components/ButtonCompSocial/style"
import { ButtonEnter, ButtonLogin } from "../../components/ButtonCompLogin/style"
import { SpanDiretriz } from "../../components/DiretrizesComp/style"
import { useState } from "react"
import { ModalComp } from "../../components/ModalComp"

export const Login= () => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    return(
        <Container>

            <ImagemStyle src={imagemX} alt="Imagem da logo do X"></ImagemStyle>

            <Title>Acontecendo agora</Title>

            <Subtitle>Inscreva-se hoje</Subtitle>

            <ButtonGoogle>
                <ImagemGoogle src={imagemG}></ImagemGoogle>
                Inscreva-se com google
            </ButtonGoogle>

            <ButtonApple>
                <ImagemApple src={imagemA}></ImagemApple>
                Inscreva-se com Apple
            </ButtonApple>

            <SpanOu></SpanOu>

            <ButtonEnter>Criar Conta</ButtonEnter>

            <SpanDiretriz>
                Ao se inscrever você concorda com os Termos de Serviço,
                <br/> 
                a Política de Privacidade, incluindo o Uso de Cookies.
            </SpanDiretriz>

            <SubtituloFinal>Ja tem uma conta?</SubtituloFinal>
            
            <ButtonLogin onClick={handleOpenModal}>Entrar</ButtonLogin>
            
            {
                openModal &&
                <ModalComp/>
            }
        </Container>
    )
}

//testa o modal por ultimo pq ele ta simples demais.
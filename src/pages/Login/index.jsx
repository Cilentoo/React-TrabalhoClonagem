import { Container, ImagemStyle, Subtitle, Title,  } from "./style"
import imagemX from "../../assets/X.jpg"
import { ButtonGoogle } from "../../components/ButtonComp/style"

export const Login= () => {

    return(
        <Container>
            <ImagemStyle src={imagemX} alt="Imagem da logo do X"></ImagemStyle>
            <Title>Acontecendo agora</Title>
            <Subtitle>Inscreva-se hoje</Subtitle>
            <ButtonGoogle>
                Inscreva-se com google
            </ButtonGoogle>
        </Container>
    )

}
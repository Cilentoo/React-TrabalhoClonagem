import { NavComp } from "../../components/NavComp"
import { Container, ContentPage, Header, ImagemBanner, ImagemRedonda, ImagemVoltar, Title} from "./style"
import voltarIcon from "../../assets/PaginaHome/iconVoltar.jpg"
import bannerImage from "../../assets/PaginaHome/fotoCapa.jpg"
import profileImage from "../../assets/PaginaHome/fotoPerfil.jpg"


export const Home = () => {
    return(
        
        <Container>

            <NavComp/>

            <ContentPage>

                <Header>
                    <ImagemVoltar src= {voltarIcon}></ImagemVoltar>
                    <Title>.cilentoo</Title>
                </Header>

                <ImagemBanner src={bannerImage}></ImagemBanner>

                <ImagemRedonda src={profileImage}></ImagemRedonda>

            </ContentPage>

        </Container>
    )
}
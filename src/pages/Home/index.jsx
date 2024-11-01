import { NavComp } from "../../components/NavComp"
import {
    BirthDay, Container, ContentPage, EntranceDay, ExtraProfilePath, Header,
    ImagemBallon, ImagemBanner, ImagemCalendar, ImagemLocal, ImagemRedonda,
    ImagemVoltar, InfoContainer, Localization, NavLine, NavItem,
    ProfilePath, Subtitle, Title,
    Seguindo, Seguidores,
    PostContainer,
    PostImage,
    ProfileName,
    ProfilePathPost,
    PostContent,
    TresPontos,
    InteractionContainer
} from "./style"

import voltarIcon from "../../assets/PaginaHome/iconVoltar.jpg"
import bannerImage from "../../assets/PaginaHome/fotoCapa.jpg"
import profileImage from "../../assets/PaginaHome/fotoPerfil.jpg"
import localImage from "../../assets/PaginaHome/localizacaoIcon.jpg"
import ballonImage from "../../assets/PaginaHome/balaoIcon.jpg"
import calendarImage from "../../assets/PaginaHome/calendarioIcon.jpg"
import imagemPerfil from "../../assets/PaginaHome/fotoPerfil.jpg"
import tresPontinhos from "../../assets/PaginaHome/tresPontinhos.jpg"
import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { ButtonEditor, ButtonVerify } from "../../components/ButtonHomeComp/style"
import { useState } from "react"

export const Home = () => {

    const [likedButton, setLikedButton] = useState(false)
    const [retweets, setRetweets] = useState(false)
    const [comments, setComments] = useState(0)


    const handleLikeButton = () => {
        setLikedButton(!likedButton)
    }

    const handleRetweet = () => {
        setRetweets(retweets + 1)
    }

    const handleComment = () => {
        setComments(comments + 1)
    }

    return (

        <Container>

            <NavComp />

            <ContentPage>

                <Header>
                    <ImagemVoltar src={voltarIcon}></ImagemVoltar>
                    <Title>.cilentoo</Title>
                </Header>

                <ImagemBanner src={bannerImage}></ImagemBanner>

                <ImagemRedonda src={profileImage}></ImagemRedonda>

                <ButtonEditor>Editar Perfil</ButtonEditor>
                <Subtitle>
                    .cilentoo
                    <ButtonVerify>Obter Verificação</ButtonVerify>
                </Subtitle>

                <ProfilePath>@Edu_Cilento</ProfilePath>

                <ExtraProfilePath>@salgueir0duda</ExtraProfilePath>

                <InfoContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ImagemLocal src={localImage}></ImagemLocal>
                        <Localization>Por ai</Localization>

                        <ImagemBallon src={ballonImage}></ImagemBallon>
                        <BirthDay>Nascido em 8 de outubro de 2004 </BirthDay>

                        <ImagemCalendar src={calendarImage}></ImagemCalendar>
                        <EntranceDay>Ingressou em 2017</EntranceDay>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Seguindo>630 Seguindo</Seguindo>
                        <Seguidores>284 Seguidores</Seguidores>
                    </div>


                    <NavLine>
                        <NavItem localAtivo>Posts</NavItem>
                        <NavItem>Respostas</NavItem>
                        <NavItem>Destaques</NavItem>
                        <NavItem>Artigos</NavItem>
                        <NavItem>Mídia</NavItem>
                        <NavItem>Curtidas</NavItem>
                    </NavLine>

                </InfoContainer>

                <PostContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <PostImage src={imagemPerfil}></PostImage>
                        <ProfileName>.cilentoo</ProfileName>
                        <ProfilePathPost>@Edu_Cilentoo . 3 de Jun</ProfilePathPost>
                        <TresPontos src={tresPontinhos}></TresPontos>
                    </div>

                    <PostContent>O bolivar dnv não jesus que chato</PostContent>

                    <InteractionContainer>
                        <div onClick={handleComment} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <FaRegComment size={7} color="gray" />
                            <span style={{ marginLeft: '5px', fontSize: '7px', color: 'gray'  }}>{comments}</span>
                        </div>

                        <div onClick={handleRetweet} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <FaRetweet size={7} color="gray" />
                            <span style={{ marginLeft: '5px', fontSize: '7px', color: 'gray'  }}>{retweets}</span>
                        </div>

                        <div onClick={handleLikeButton} style={{ cursor: 'pointer' }}>
                            <AiFillHeart color={likedButton ? 'red' : 'gray'} size={7} />
                        </div>
                    </InteractionContainer>
                </PostContainer>
            </ContentPage>
        </Container>
    )
}
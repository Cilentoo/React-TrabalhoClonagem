import { ImagemHeader, ImagemStyle, ImagemTweet, NavA, NavContainer } from "./style"
import imagemX from "../../assets/PaginaHome/iconX.jpg"
import imagemPerfil from "../../assets/PaginaHome/fotoPerfil.jpg"
import homeIcon from "../../assets/PaginaHome/iconHome.jpg"
import searchIcon from "../../assets/PaginaHome/iconPesquisa.jpg"
import notifyIcon from "../../assets/PaginaHome/iconNotificacao.jpg"
import directIcon from "../../assets/PaginaHome/iconMensagem.jpg"
import grokIcon from "../../assets/PaginaHome/imagemGrok.jpg"
import comunityIcon from "../../assets/PaginaHome/iconComunidades.jpg"
import profileIcon from "../../assets/PaginaHome/iconPerfil.jpg"
import plusIcon from "../../assets/PaginaHome/iconMais.jpg"
import tweetIcon from "../../assets/PaginaHome/iconTweet.jpg"

export const NavComp = () => {
    return (
        <NavContainer>
            <NavA>
                <ImagemHeader src={imagemX}></ImagemHeader>
            </NavA>

            <NavA>
                <ImagemStyle src={homeIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={searchIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={notifyIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={directIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={grokIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={comunityIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={profileIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemStyle src={plusIcon}></ImagemStyle>
            </NavA>

            <NavA>
                <ImagemTweet src={tweetIcon}></ImagemTweet>
            </NavA>

            <NavA>
                <ImagemStyle src={imagemPerfil}></ImagemStyle>
            </NavA>
        </NavContainer>
    )
}
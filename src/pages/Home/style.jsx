import styled from 'styled-components'

export const Container = styled.div` 
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`;

export const ContentPage = styled.div`
    background-color: #000;
    border: 1px solid gray;
    width: 40vw;
    margin-right: 280px;
`;

export const Header = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1px;
    border-bottom: 1px solid gray;
    width: 100%;
`;

export const NavLine = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    width: 100%;
    color: #1D9BF0;
    cursor: pointer;
`;

export const NavItem = styled.div`
    font-size: 8px;
    color: ${({ localAtivo }) => (localAtivo ? '#1D9BF0' : 'rgba(128,128,128,1)')};
    transition: color 0.3s;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
    &:hover {
        color: #1D9BF0;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const InteractionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 130px; 
    margin-left: 40px;
    margin-top: 3px; 
`;

export const ProfileName = styled.h4`
    font-size: 6px;
    color: #fff;
    margin-left: 10px;
    margin-top: 4px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ProfilePathPost = styled.h4`
    font-size: 6px;
    color: rgba(128,128,128,1);
    margin-left: 5px;
    margin-top: 4px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const PostContent = styled.h4`
    font-size: 6px;
    color: #fff;
    margin-left: 45px;
    margin-top: 1px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const PostImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-top: 4px;
`;

export const TresPontos = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 110px;
    margin-top: 4px;
    cursor: pointer;
`;

export const Imagem = styled.img`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
    font-size: 12px;
    color: #fff;
    margin: 0px;
    padding-left: 10px;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const Subtitle = styled.h3`
    font-size: 12px;
    color: #fff;
    margin-top: 30px;
    margin-left: 10px;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ProfilePath = styled.h3`
    font-size: 5px;
    color: rgba(128,128,128,1);
    margin-left: 10px;
    letter-spacing: 0.5px;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ExtraProfilePath = styled.h3`
    font-size: 5px;
    color: #1D9BF0;
    margin-left: 10px;
    margin-top: 15px;
    letter-spacing: 0.5px;
    cursor: pointer;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;


export const Localization = styled.h4`
    font-size: 5px;
    color: rgba(128,128,128,1);
    margin-left: 2px;
    margin-top: 6px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ImagemLocal = styled.img`
    width: 5px;
    margin-top: 5px;
    margin-left: 10px;
`;

export const BirthDay = styled.h4`
    font-size: 5px;
    color: rgba(128,128,128,1);
    margin-left: 2px;
    margin-top: 6px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ImagemBallon = styled.img`
    width: 5px;
    margin-top: 5px;
    margin-left: 4px;
`;

export const EntranceDay = styled.h4`
    font-size: 5px;
    color: rgba(128,128,128,1);
    margin-left: 2px;
    margin-top: 6px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ImagemCalendar = styled.img`
    width: 5px;
    margin-top: 5px;
    margin-left: 4px;
`;

export const Seguindo = styled.h4`
    font-size: 8px;
    color: #fff;
    margin-left: 10px;
    margin-top: 6px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const Seguidores = styled.h4`
    font-size: 8px;
    color: #fff;
    margin-left: 10px;
    margin-top: 6px;
    position: relative;
    font-family: Verdana, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, 
                    Helvetica, Arial, sans-serif;
`;

export const ImagemVoltar = styled.img`
    width: 20px;
    margin: 10px;
    cursor: pointer;
`;

export const ImagemBanner = styled.img`
    width: 100%;
    cursor: pointer;
    display: flex;
    position: relative;
`;

export const ImagemRedonda = styled.img`
    border-radius: 50%;
    border: 2px solid black;
    width: 90px;
    align-self: flex-end;
    position: absolute; 
    top: 98px;
    left: 190px; 
    cursor: pointer;
`;
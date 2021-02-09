import styled, { css, createGlobalStyle } from 'styled-components';
import font from './assets/fonts/OpenSans-Regular.ttf';
import cart from './assets/img/main/cart.gif';

const desktopStartWidth = 760;
const primary = '#fd9927';
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Img = styled.img`
max-width:270px;
width:100%;
display: block;
margin:auto;
`;

const w = css`
padding-left: 100px;
padding-right: 100px;
max-width: 1200px;
${mobile}{
    padding-left:20px;
    padding-right: 20px;
}
`;

export const Section = styled.section`
margin:auto;
${w};
`;

export const Col = styled.div`
flex: 1 1 0px;
`;

export const Row = styled.div`
display: flex;
gap: 30px;
${mobile}{
    flex-direction: column;
}
`;

export const B = styled.span`
font-weight: bold;
`;

export const Bp = styled.span`
font-weight: bold;
color: ${primary};
`;


export const Nav = styled.div`
${w};
li{
    display: inline-block;
    &:first-of-type a{
        padding-left: 0;
    }
    a{
        text-decoration: none;
        color: black;
        padding:15px;
        
        &:hover{
            color: ${primary}
        }
    }
}
`;

const Title = styled.h1`
background-image: url(${({ src }) => src});
background-position: center center;
background-size: cover;
text-align:center;
div{
    background-color: rgba(255,255,255, 0.5);
    height:100%;
    padding: 70px;
}`;

const SubTitle = styled.h2`
text-align:center;
div{
    display:flex;
    justify-content: center;
.circle{
    background-color:${primary};
    width:10px;
    height:10px;
    border-radius: 100%;
    margin:8px 6px 0 6px;
}
}
`;


const AMZB = styled.a`
background: url(${cart}) no-repeat 3px center, linear-gradient(to bottom,#f8e6b8 0,#f3d686 6%,#ebb62c 100%);
padding:7px;
display:block;
border-width: 1px 0;
font: normal 13px/17px Arial,Helvetica,sans-serif;
color: #333;
text-align:center;
font-size: 11.4px;
padding-left: 30px;
border-radius: 3px;
text-decoration: none;
max-width:270px;
margin:auto;
`


export const H1 = ({ src, children }) => <Title src={src}><div>{children}</div></Title>;

export const H2 = ({ children }) => <SubTitle>{children}<div><span className="circle"></span><span className="circle"></span><span className="circle"></span><span className="circle"></span></div></SubTitle>;

export const H3 = styled.h3`
text-align:center;
`;

export const AMZButton = ({ href, src }) => <div><a href={href} target="_blank"><Img src={src} /></a><AMZB href={href} target="_blank">Comprar ahora</AMZB></div>


export const AMZ = styled.iframe.attrs(() => ({
    frameBorder: "0",
    scrolling: "0",
    marginWidth: "0",
    marginHeight: "0",
}))`
width:120px;
height:240px;
display: block; margin: auto;
`;

export const Iframe = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.2%;
    margin-bottom: 20px;

    iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }

`;

export const MyGrid = styled.div`
    display: flex;
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: myFont;
    src: url(${font});
}
	body{
        margin:0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-bottom: 70px;
    }

    ul{
        list-style: none;
        padding-left: 0;
    }
`;


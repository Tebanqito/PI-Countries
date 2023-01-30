import {
    LandingPageContainer,
    LandingPageTittle,
    LandingPageImage,
    LandingPageLink
} from "../styles/styles";

export default function LandingPage() {
    return (
        <>
            <LandingPageContainer>
                <LandingPageTittle>PI-Countries</LandingPageTittle>
                <LandingPageImage src="https://http2.mlstatic.com/D_NQ_NP_621954-MLA45582022258_042021-O.webphttps://http2.mlstatic.com/D_NQ_NP_621954-MLA45582022258_042021-O.webp" alt="Mundo"/>
                <LandingPageLink href='/home'>HOME</LandingPageLink>
                <LandingPageLink href="/activity">Formulario de Actividad Turistica</LandingPageLink>
            </LandingPageContainer>
        </>
    );
}
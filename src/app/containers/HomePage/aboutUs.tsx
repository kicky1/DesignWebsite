import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import AboutImg from "../../../assets/images/about_us.svg";
import { useMediaQuery } from "react-responsive";
const AboutUsContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-6
        pr-6
        lg:pl-12
        lg:pr-12
        
    `};

    @media (min-width: ${SCREENS.sm}){
        ${tw`
            mt-10
        `}
    };
`;

const AboutContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
    width: auto;
    height: 15em;
    

    img{
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}){
        height: 28em
    };
    
    @media (min-width: ${SCREENS.lg}){
        height: 30em
    };

    @media (min-width: ${SCREENS["2xl"]}){
        height: 35em;
        margin-left:0;
    };
`

const InfoContainer = styled.div<{mobile?: any}>`
    ${tw`
        w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
        mt-20
    `};

    ${({mobile}) => 
        mobile && 
        css`
            ${tw`
            w-10/12
            flex
            flex-col
            md:ml-6
            2xl:ml-16
            mt-10
            `}
        `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        text-sm
        md:text-base
        max-w-2xl
        
        mt-4
        font-normal
    `}
`

function AboutUs(){

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});

    if(isMobile)
        return <AboutUsContainer>
            <InfoContainer mobile>
                <Title>Something about Us.</Title>
                <InfoText>
                Our company 'ZT' was established as a small business in Canada, 
                where we have a strong presence in the building industry for the last 20 years.
                After 5 years of solid experience we decided to build our business with our own 
                designs and thousands of satisfied customers that decide to spend their money with us. 
                Some of our projects can be found in the most important Polish cities or the cities of Canada.
                </InfoText>
            </InfoContainer>
    </AboutUsContainer>

    return <AboutUsContainer>
        <AboutContainer>
            <img src={AboutImg}/>
        </AboutContainer>
        <InfoContainer>
            <Title>Something about Us.</Title>
            <InfoText>
            Our company 'ZT' was established as a small business in Canada, 
            where we have a strong presence in the building industry for the last 20 years.
             After 5 years of solid experience we decided to build our business with our own 
             designs and thousands of satisfied customers that decide to spend their money with us. 
             Some of our projects can be found in the most important Polish cities or the cities of Canada.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>

}

export default AboutUs
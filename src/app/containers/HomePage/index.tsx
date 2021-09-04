import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/navbar";
import AboutUs from "./aboutUs";
import BetweenWrap from "./betweenWrapper";
import TopSection from "./topSection";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

function HomePage() {
    return <PageContainer>
        <Navbar/>
        <TopSection/>
        <Marginer direction="vertical" margin="1em"/>
        <BetweenWrap slogan="From single-family homes to public buildings in 47 countries"/>
        <Marginer direction="vertical" margin="6em"/>
        <AboutUs/>
        <Marginer direction="vertical" margin="6em"/>
        <BetweenWrap slogan="Meet WERK12, a 9,600m2 mixed-used development"/>
    </PageContainer>
}

export default HomePage
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
        <BetweenWrap/>
        <AboutUs/>
        <Marginer direction="vertical" margin="1em"/>
    </PageContainer>
}

export default HomePage
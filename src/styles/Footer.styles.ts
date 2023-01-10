import styled from "styled-components";

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    height: 64px;
    min-width: 375px;
    background-color: ${({theme}) => theme.colors.white};
    border-top: 8px solid ${({ theme }) => theme.colors.main};
`

const Text = styled.p`
    margin: 0;
`

const PexelsLink = styled.a`
    color: ${({ theme }) => theme.colors.link};
    font-weight: 700;
`

export {FooterContainer, Text, PexelsLink}
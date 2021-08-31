import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
               <CTA>
                    <CTALogoOne src="/images/cta-logo-one.png" alt=""/>
                    <CTALogin>GET ALL HERE</CTALogin>
                        <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/50, the price of Disney+ and the Disney Bundle will increase by $1</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
               </CTA>
            </Content>
        </Container>
    )
}

export default Login;

const Container= styled.section`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
`;
const Content = styled.h1`
color:#ffffff;
width: 50%;
position: relative;
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
`;
const CTALogoOne= styled.img`
    margin-bottom: 12px;
    display: block;
    min-height: 1px;
    height: 100px;
`;

const CTALogin = styled.button`
padding: 15px 0;
background: #1f80e0;
border: none;
font-weight: bold;
font-size: 15px;
color: white;
letter-spacing: 1.8px;
transition: all 0.3s ease;

&:hover{
    background: #165a9e;
}
`;
const Description = styled.span`
font-size: 16px;
text-align: center;
margin-top: 20px;
font-weight: 500;
opacity:0.8;
line-height:25px;
`;
const CTALogoTwo = styled.img`
width:100%;
height: auto;
margin-top:20px;
`;
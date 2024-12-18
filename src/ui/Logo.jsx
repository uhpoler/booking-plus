import styled from "styled-components";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 13rem;
  width: auto;
`;

function Logo() {
  const src = "/logo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

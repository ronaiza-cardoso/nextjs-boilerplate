import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="atom image and Advanced React written next to it."
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>
      TypeScript, React, NextJS and Styled Components
    </S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="An developer looking into the computer. By her side there is an little plant."
    />
  </S.Wrapper>
)

export default Main

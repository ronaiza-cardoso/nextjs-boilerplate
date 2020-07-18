import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100%;

  text-align: center;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 1rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin: 3rem;
  width: min(30rem, 100%);
`

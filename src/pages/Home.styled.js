import styled from "styled-components"

export const HomeContainer = styled.div` 
  background: ${props => props.theme.cardColor};
  max-width: 41.2rem;
  padding: 2.5rem;
  border-radius: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 30px;
  }


  h1 {
		font-size: 1.5rem;
		font-weight: 600;
		color: ${props => props.theme.white};
    margin-bottom: 0.5rem;
  }

  Strong {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme.linkTextColor};
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme.white};
    margin-bottom: 1.5rem;
  }
`

export const LinksContainer = styled.div`
  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    margin: 1.5rem;
    gap: 0.5rem;

    background: ${props => props.theme.linkButtonColor};
    max-width: 19rem;
    padding: 1rem 7rem;
    border-radius: 8px;
    }
`
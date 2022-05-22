import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  color: white;
  font-size: 72px;
  font-weight: bold;
 
  b {
    font-weight: 900;
    color: ${colors.purple200};
    transition: .25s ease-in-out;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: ${colors.purple100};
  margin-top: 1rem;
  padding: 1.25rem;
  border: 0;
  cursor: pointer;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: center;
  position: absolute;
  bottom: 10px;
`

export const Social = styled.a`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${colors.purple100};
    transition: 0.5;
  }
`
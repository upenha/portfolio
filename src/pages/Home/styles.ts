import styled from 'styled-components';

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
    color: #dd3131;
    /* text-shadow:
    0 0 2px #dd3131,
    0 2.5px 0px #a61b1b,
    0 0 5px #dd3131; */
  }
`;

export const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: #dd3131;
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
`
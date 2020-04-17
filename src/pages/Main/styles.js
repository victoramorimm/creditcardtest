import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #eee;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 20px;
    align-self: center;
    color: #2f6690;
  }
  img {
    width: 150px;
    height: 100px;
    align-self: center;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
`;

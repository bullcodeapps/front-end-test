import styled from 'styled-components';

export const Mensagem = styled.div`
  top: 0;
  color: #fff;
  padding: 15px;
  max-width: 700px;
  position: absolute;
  border-radius: 4px;
  margin: 5px 0 0 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background: ${props => (props.error ? 'red' : 'green')};
`;

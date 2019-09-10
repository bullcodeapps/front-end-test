import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }

  input,
  button,
  a {
    flex: 1;
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${props => (props.error ? 'red' : '#eee')};
  }

  input {
    font-size: 16px;
    background: #eee;

    &:focus,
    &:hover {
      border: 1px solid #5866c3;
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    background: linear-gradient(202deg, #6a79dd, #5866c3);
    text-align: center;

    &:hover {
      color: #5866c3;
      background: white;
      border: 1px solid #5866c3;
    }
  }
`;

export const SubmitButton = styled.button`
  color: white;
  font-size: 20px;
  background: linear-gradient(202deg, #6a79dd, #5866c3);
  &:hover {
    color: #5866c3;
    background: white;
    border: 1px solid #5866c3;
  }
`;

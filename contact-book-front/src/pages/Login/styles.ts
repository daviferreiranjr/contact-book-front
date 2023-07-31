import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-blue-700);
  gap: 5rem;

  h1{
    font-weight: 600;
    color: var(--color-gray-100);
  }

  span{
    font-weight: 300;
    color: var(--color-gray-100);
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue-900);
  border-radius: 10px;
  height: 50vh;
  width: 20%;
  gap: 1rem;
  color: var(--color-gray-900);

  .link_style {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-gray-100);
    margin: 0 auto;
    text-decoration: none;
    border: 1px solid var(--color-gray-100);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }

  h2{
    font-weight: 600;
    color: var(--color-gray-100);
    margin-bottom: 2rem;
  }

  label{
    color: var(--color-gray-100);
  }

  button, input {
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid;
    border-color: var(--color-blue-700);
    width: 70%;
  }

  button {
    margin-top: 10px;
  }


`
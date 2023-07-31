import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-blue-700);
    height: 20vh;

    .title-user{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      h1, p{
      padding-left: 3rem;
      font-weight: 600;
    }

    }

    nav{
      display: flex;
      gap: 1rem;
      padding: 5rem;

      .icon-nav {
        height: 50px;
        width: 100px;
      }
    }
  }

  main {
    display: flex;
    background-color: var(--color-blue-400);
  }
`

export const Board = styled.ul`
  background-color: var(--color-blue-400);
  height: 80vh;
  width: 100vw;
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin-left: 300px;

`
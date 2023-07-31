import styled from "styled-components";

export const Container = styled.li`

  width: 250px;
  height: 150px;
  background-color: var(--color-gray-300);
  color: var(--color-gray-900);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border: 2px solid;
  border-color: var(--color-gray-900);
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;

  .buttons-contact{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .icon-contact {
          height: 40px;
          width: 40px;
          border-radius: 10px;
        }
  }

    
  `
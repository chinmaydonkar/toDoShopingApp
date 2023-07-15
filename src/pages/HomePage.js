import React from "react";
import styled from 'styled-components';
import { TodoProvider } from '../contexts/TodoContext';
import TodoList from '../components/TodoList';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

`;

const HomePage = () => {
  return (
    <StyledHomePage>
    <h1>Welcome to the Home Page</h1>
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  </StyledHomePage>
  );
};

export default HomePage;

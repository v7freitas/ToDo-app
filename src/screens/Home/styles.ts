import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.metrics.margin.lg}px;
  justify-content: space-between;
`;

export const Header = styled.ImageBackground`
  height: 222px;
`;

export const ToDoList = styled.FlatList`
  position: absolute;
  margin-top: 158px;
  width: 90%;
  align-self: center;
  height: 320px;
`;

export const ToDoListCompleted = styled.FlatList`
  position: absolute;
  margin-top: 500px;
  width: 90%;
  align-self: center;
  height: 320px;
`;

export const Text = styled.Text`
  font-weight: bold;
  margin-bottom: 16px;
`;

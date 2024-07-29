import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme.colors.white};
  align-self: center;
  height: 80px;
  align-items: center;
`;

export const ContainerContent = styled.View`
  flex-direction: row;
  width: 80%;
  background-color: ${theme.colors.white};
  align-self: center;
  height: 80px;
  align-items: center;
  padding: 16px 78px 16px 16px;
  margin-right: 24px;
`;

export const Category = styled.View<{
  $categoryColor?: string;
}>`
  height: 48px;
  width: 48px;
  background-color: ${(props) => props.$categoryColor || "#ccc"};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-right: 12px;
  border: 2px solid #ffffff;
`;

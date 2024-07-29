import theme from "@/styles/theme";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.button};
  margin-bottom: 24px;
  align-self: center;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const NewTaskText = styled.Text`
  font-size: ${theme.metrics.fontSize.md}px;
  color: #ffffff;
  font-weight: bold;
`;

//Relemb

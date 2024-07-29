import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${theme.colors.background};
  margin-top: 24px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContainerRow = styled.View`
  width: 49%;
  gap: 8px;
`;

export const Header = styled.ImageBackground`
  height: 96px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

export const TaskArea = styled.View`
  width: 90%;
  height: 78px;
  align-self: center;
  margin-top: 24px;
  gap: 8px;
`;

export const InputBox = styled.TextInput`
  width: 100%;
  height: 55px;
  background-color: ${theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 10px;
`;

export const CategoryArea = styled.View`
  flex-direction: row;
  height: 48px;
  gap: 24px;
  align-items: center;
  margin-top: 24px;
  width: 90%;
  align-self: center;
`;

export const Categories = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const SelectCategory = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const DateAndTimeArea = styled.View`
  gap: 6px;
  width: 90%;
  flex-direction: row;
  align-self: center;
  margin-top: 24px;
`;

export const DateBox = styled.TextInput`
  width: 100%;
  height: 55px;
  background-color: ${theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 10px;
`;

export const TimeBox = styled.TextInput`
  width: 100%;
  height: 55px;
  background-color: ${theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 10px;
`;

export const NoteArea = styled.View`
  width: 90%;
  height: 200px;
  align-self: center;
  margin-top: 24px;
  gap: 8px;
`;

export const NoteBox = styled.TextInput`
  height: 177px;
  width: 100%;
  background-color: ${theme.colors.white};
  border: 1px solid #e0e0e0;
  padding: 10px;
`;

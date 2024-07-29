import React from "react";
import { NewTaskText, Button } from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface IPrimaryButtonTitle extends TouchableOpacityProps {
  title: string;
}

const PrimaryButton: React.FC<IPrimaryButtonTitle> = ({ title, onPress }) => {
  return (
    <Button onPress={onPress}>
      <NewTaskText>{title}</NewTaskText>
    </Button>
  );
};

export default PrimaryButton;

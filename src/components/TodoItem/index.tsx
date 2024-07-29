import React, { useState } from "react";
import { Text } from "react-native";
import { Category, Container, ContainerContent } from "./styles";
import theme from "../../styles/theme";
import { Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IData } from "@/@types/screens";
import { api } from "@/services/api";

export interface ITodoItem {
  id: string;
  title: string;
  category: string;
  time: string;
  completed: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  category,
  time,
  completed,
}) => {
  const queryClient = useQueryClient();

  const handleCompleted = () => {
    mutation.mutate({ completed: !completed });
  };

  const patchTask = (newTask: { completed: boolean }) => {
    return api.patch(`/tasks/${id}`, newTask);
  };

  const mutation = useMutation({
    mutationFn: patchTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <Container>
      <ContainerContent>
        <Category
          $categoryColor={
            category === "task"
              ? theme.colors.taskColor
              : category === "sport"
              ? theme.colors.sportColor
              : theme.colors.freetimeColor
          }
        >
          <Image
            source={
              category === "task"
                ? require("../../assets/Icons/FileList/file-list-line.png")
                : category === "sport"
                ? require("../../assets/Icons/Trophy/trophy-line.png")
                : require("../../assets/Icons/Calendar/calendar-event-fill.png")
            }
          />
        </Category>
        <Text style={completed ? { textDecorationLine: "line-through" } : null}>
          {title}
        </Text>
      </ContainerContent>
      <BouncyCheckbox
        size={24}
        fillColor={theme.colors.primary}
        isChecked={completed}
        onPress={handleCompleted}
      />
    </Container>
  );
};

export default TodoItem;

import "@pesto-ui/components-layout/style.css";
import { Text as _Text } from "@pesto-ui/components-layout";
import { classes, tokens } from "@pesto-ui/themes";

export default {
  title: "sComponents/Layout/Typography",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(tokens.colors.$scale),
      control: "select",
    },
  },
};

export const TextStory = {
  args: {
    as: "p",
    color: "purple",
    background: "blue",
    fontSize: "xl",
    children: "This is P Test",
  },
};

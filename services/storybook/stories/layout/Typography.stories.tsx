import "@pesto-ui/components-layout/style.css";
import { Text as _Text } from "@pesto-ui/components-layout";

export default {
  title: "sComponents/Layout/Typography",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const TextStory = {
  args: {
    as: "p",
    color: "blue",
    fontSize: "xl",
    children: "This is P Tag",
  },
};

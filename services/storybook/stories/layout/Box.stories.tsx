import "@pesto-ui/components-layout/style.css";
import { Box as _Box } from "@pesto-ui/components-layout";

export default {
  title: "sComponents/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};

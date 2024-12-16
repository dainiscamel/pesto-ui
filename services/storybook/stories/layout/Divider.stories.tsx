import React from "react";
import "@pesto-ui/components-layout/style.css";
import { Box, Divider as _Divider } from "@pesto-ui/components-layout";
import { tokens } from "@pesto-ui/themes";
export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(tokens.colors.$scale),
      control: "select",
    },
  },
};
export const Divider = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};

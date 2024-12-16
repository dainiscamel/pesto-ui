import React from "react";
import "@pesto-ui/components-layout/style.css";
import { Flex as _Flex } from "@pesto-ui/components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
    children: (
      <>
        <div style={{ background: "lightblue", padding: "8px" }}>Child 1</div>
        <div style={{ background: "lightgreen", padding: "8px" }}>Child 2</div>
      </>
    ),
  },
};

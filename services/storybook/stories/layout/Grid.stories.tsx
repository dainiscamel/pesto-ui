import React from "react";
import "@pesto-ui/components-layout/style.css";
import {
  Grid as _Grid,
  GridItem as _GridItem,
} from "@pesto-ui/components-layout";

export default {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridWithGridItem = (args) => (
  <_Grid {...args}>
    <_GridItem
      style={{
        gridArea: "1 / 1 / 2 / 3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        height: "50px",
      }}
    >
      아이템 1
    </_GridItem>
    <_GridItem
      style={{
        gridArea: "2 / 2 / 3 / 3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightblue",
        height: "50px",
      }}
    >
      아이템 2
    </_GridItem>
    <_GridItem
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgreen",
        height: "50px",
      }}
    >
      아이템 3
    </_GridItem>
  </_Grid>
);

GridWithGridItem.args = {
  as: "div",
  gap: "16px",
  templateColumns: "repeat(3, 1fr)",
  templateRows: "auto",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    width: "300px",
    height: "200px",
  },
};

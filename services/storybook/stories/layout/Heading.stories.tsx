import "@pesto-ui/components-layout/style.css";
import { Heading as _Heading } from "@pesto-ui/components-layout";

export default {
  title: "React Components/Layout/Heading",
  component: _Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const HeadingStory = {
  args: {
    as: "h1",
    fontSize: "sm",
    children: "This is H1",
    color: "orange",
  },
};

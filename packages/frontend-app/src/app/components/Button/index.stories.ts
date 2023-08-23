import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

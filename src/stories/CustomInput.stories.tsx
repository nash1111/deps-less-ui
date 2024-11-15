import type { Meta, StoryObj } from '@storybook/react';
import { CustomInput } from '../CustomInput';

const meta = {
    title: 'Example/CustomInput',
    component: CustomInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
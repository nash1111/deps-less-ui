import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from '../BlogCard';

const meta = {
  title: 'Example/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define your argTypes here
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { BlogCardWithSections } from '../BlogCardWithSections';

const meta = {
  title: 'Example/BlogCardWithSections',
  component: BlogCardWithSections,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define your argTypes here
  },
} satisfies Meta<typeof BlogCardWithSections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
};

export const WithTags: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
  },
};

export const WithTagsAndImage: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
};

export const WithTagsAndWideImage: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300',
  },
};

export const WithTagsAndWideImageAndColor: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: 'https://picsum.photos/id/237/400/300',
    color: '#f0f0f0',
  },
};

export const WithPublishedDate: Story = {
  args: {
    title: 'Card Title',
    description: 'This is the card content',
    publishedDate: '2021-01-01',
  },
};
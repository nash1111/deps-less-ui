import type { Meta, StoryObj } from '@storybook/react';
import { EqualSpacingGrid } from '../EqualSpacingGrid';
import React from 'react';

const meta = {
  title: 'Layout/EqualSpacingGrid',
  component: EqualSpacingGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'number' },
    spacing: { control: 'number' },
  },
} satisfies Meta<typeof EqualSpacingGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '20px', backgroundColor: '#e0e0e0', textAlign: 'center' }}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    columns: 3,
    spacing: 2,
    children: (
      <EqualSpacingGrid>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
        <GridItem>Item 7</GridItem>
      </EqualSpacingGrid>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    ...Default.args,
    columns: 4,
  },
};

export const WithDifferentSpacing: Story = {
  args: {
    ...Default.args,
  },
};

export const TwoColumns: Story = {
  args: {
    ...Default.args,
    columns: 2,
  },
};
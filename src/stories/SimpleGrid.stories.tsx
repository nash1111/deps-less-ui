import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid } from '../SimpleGrid';

const meta = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'number' },
    spacing: { control: 'number' },
    rowSpacing: { control: 'number' },
    columnSpacing: { control: 'number' },
  },
} satisfies Meta<typeof SimpleGrid>;

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
      <SimpleGrid>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </SimpleGrid>
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
    rowSpacing: 4,
    columnSpacing: 2,
  },
};

export const TwoColumns: Story = {
  args: {
    ...Default.args,
    columns: 2,
  },
};
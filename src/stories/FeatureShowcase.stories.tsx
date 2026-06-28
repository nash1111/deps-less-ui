import type { Meta, StoryObj } from '@storybook/react';
import { FeatureShowcase } from '../FeatureShowcase';

const features = [
  {
    label: '01',
    title: 'Dependency aware layout',
    description: 'Group related UI blocks with predictable spacing, borders, and scanning order.',
  },
  {
    label: '02',
    title: 'Decision-ready metrics',
    description: 'Surface the numbers that matter without forcing teams into a dashboard shell.',
  },
  {
    label: '03',
    title: 'Flexible actions',
    description: 'Pair a primary command with a secondary link while keeping the component self-contained.',
  },
];

const metrics = [
  { label: 'Reusable sections', value: '12' },
  { label: 'Bundle dependencies', value: '0' },
  { label: 'Theme variants', value: '2' },
];

const meta = {
  title: 'Marketing/FeatureShowcase',
  component: FeatureShowcase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    accentColor: { control: 'color' },
    density: { control: 'inline-radio' },
    tone: { control: 'inline-radio' },
  },
} satisfies Meta<typeof FeatureShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductOverview: Story = {
  args: {
    eyebrow: 'Component release',
    title: 'A full showcase block for feature-rich product pages',
    description:
      'FeatureShowcase combines a concise header, supporting metrics, and structured feature cards for product or documentation pages.',
    features,
    metrics,
    primaryAction: { label: 'View package', href: 'https://www.npmjs.com/package/deps-less-ui' },
    secondaryAction: { label: 'Read docs', href: 'https://nash1111.github.io/deps-less-ui/' },
    accentColor: '#0f766e',
  },
};

export const DarkLaunch: Story = {
  args: {
    ...ProductOverview.args,
    eyebrow: 'Launch notes',
    title: 'Highlight a release with strong contrast',
    description:
      'The dark tone gives release pages, changelogs, and internal launch notes a stronger visual anchor.',
    tone: 'dark',
    accentColor: '#22c55e',
  },
};

export const CompactOperations: Story = {
  args: {
    ...ProductOverview.args,
    eyebrow: 'Operations',
    title: 'Compact mode for dense internal pages',
    description:
      'Use compact density when the showcase needs to sit near tables, changelogs, or comparison content.',
    density: 'compact',
    accentColor: '#2563eb',
  },
};

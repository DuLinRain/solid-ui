import type { Meta, StoryObj } from 'storybook-solidjs';

import InputGroup from '../components/input-group';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Example/InputGroup',
  args: {
    size: 'default',
    placeholder: 'please enter something'
  },
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['mini', 'small', 'default', 'large'],
      control: { type: 'inline-radio' },
      description: 'size',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'placeholder',
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args


export const Size: Story = {
  render: () => (
    <>
      <div>size</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><InputGroup size="mini" /></section>
        <section><InputGroup size="small" /></section>
        <section><InputGroup size="default" /></section>
        <section><InputGroup size="large" /></section>
      </section>
    </>
  )
};

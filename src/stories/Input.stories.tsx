import type { Meta, StoryObj } from 'storybook-solidjs';

import Input from '../components/input';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Example/Input',
  args: {
    size: 'default',
    placeholder: 'please enter something'
  },
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args


export const Size: Story = {
  render: () => (
    <>
      <div>size</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input size="mini" /></section>
        <section><Input size="small" /></section>
        <section><Input size="default" /></section>
        <section><Input size="large" /></section>
      </section>
    </>
  )
};

export const Status: Story = {
  render: () => (
    <>
      <div>status</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input status='error' placeholder='error status' /></section>
        <section><Input status='warning' placeholder='warning status' /></section>
        <section><Input placeholder='default' /></section>
      </section>
    </>
  )
};

export const Disabled: Story = {
  render: () => (
    <>
      <div>disabled</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input placeholder='default' disabled /></section>
      </section>
    </>
  )
};

export const Placeholder: Story = {
  render: () => (
    <>
      <div>placeholder</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input placeholder='please enter a sentence' /></section>
      </section>
    </>
  )
};

export const DefaultValue: Story = {
  render: () => (
    <>
      <div>defaultValue</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input defaultValue='hello world' /></section>
      </section>
    </>
  )
};

export const OnChange: Story = {
  render: () => (
    <>
      <div>onChange</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input onChange={console.log} /></section>
      </section>
    </>
  )
};

export const OnBlur: Story = {
  render: () => (
    <>
      <div>onBlur</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input onBlur={() => console.log('blur')} /></section>
      </section>
    </>
  )
};

export const OnFocus: Story = {
  render: () => (
    <>
      <div>onFocus</div>
      <section style={{ display: 'flex', gap: '20px' }}>
        <section><Input onFocus={() => console.log('focus')} /></section>
      </section>
    </>
  )
};

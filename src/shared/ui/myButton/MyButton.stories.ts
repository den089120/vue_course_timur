import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './MyButton.vue'
import '../../../App/styles/index.scss'
const meta: Meta<typeof Button> = {
  title: 'MyButton',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    nameClass: ['outline_btn'],
    mods: { disabled: true }
  }
}

export const Secondary: Story = {
  args: {
    nameClass: ['clear'],
    mods: { disabled: false }
  }
}

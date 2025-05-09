import type { Meta, StoryObj } from '@storybook/react'

import { YTEmbed } from './index'

const meta = {
  component: YTEmbed,
} satisfies Meta<typeof YTEmbed>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://www.youtube.com/watch?v=bWvVeFeNrhw\n\n',
    width: '400',
    height: '200',
    frameBorder: '0',
  },
}

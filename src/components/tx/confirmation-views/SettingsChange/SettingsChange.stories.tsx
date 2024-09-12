import type { Meta, StoryObj } from '@storybook/react'
import SettingsChange from './index'
import { Paper } from '@mui/material'
import { SettingsInfoType, TransactionDetails } from '@safe-global/safe-gateway-typescript-sdk'
import { StoreDecorator } from '@/stories/storeDecorator'
import { ownerAddress, txInfo } from './utils'

const meta = {
  component: SettingsChange,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoreDecorator initialState={{}}>
          <Paper sx={{ padding: 2 }}>
            <Story />
          </Paper>
        </StoreDecorator>
      )
    },
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof SettingsChange>

export default meta
type Story = StoryObj<typeof meta>

export const AddOwner: Story = {
  args: {
    txInfo,
    txDetails: {} as TransactionDetails,
  },
}

export const SwapOwner: Story = {
  args: {
    txInfo: {
      ...txInfo,
      settingsInfo: {
        type: SettingsInfoType.SWAP_OWNER,
        oldOwner: {
          value: '0x00000000',
          name: 'Bob',
          logoUri: 'http://bob.com',
        },
        newOwner: {
          value: ownerAddress,
          name: 'Alice',
          logoUri: 'http://something.com',
        },
      },
    },
    txDetails: {} as TransactionDetails,
  },
}

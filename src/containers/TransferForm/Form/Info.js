import React from 'react'
import { useForm } from 'react-hook-form'
import Box from '../../../components/Box'
import CoinBalance from '../../../components/CoinBalance'
import { initialCoins } from '../../../services/tokens/contants'

import { TransferFormInput, TransferFormLabel } from '../styled'

function Info({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="wallet-container">
        <CoinBalance item={initialCoins.ETH} />
      </Box>

      <TransferFormLabel htmlFor="address" className="light">
        Address to transfer
      </TransferFormLabel>
      <TransferFormInput
        id="address"
        type="text"
        placeholder="0x00000000000000"
        name="address"
        required={'Address is required'}
        register={register}
        errors={errors}
      />

      <TransferFormLabel htmlFor="amount" className="light">
        Amount
      </TransferFormLabel>
      <TransferFormInput
        id="amount"
        type="text"
        placeholder="0 ETH"
        name="amount"
        required={'Amount is required'}
        register={register}
        errors={errors}
      />

      <button>Continue</button>
    </form>
  )
}

export default Info
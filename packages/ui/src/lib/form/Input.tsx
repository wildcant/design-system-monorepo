import { styled } from '@mui/joy'
import MuiInput, { InputProps } from '@mui/joy/Input'
import { forwardRef } from 'react'

const StyledMuiInput = styled(MuiInput)``

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledMuiInput {...props} slotProps={{ input: { ref: ref } }} />
))

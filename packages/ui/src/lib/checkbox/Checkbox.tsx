import { styled } from '@mui/joy'
import MuiCheckbox from '@mui/joy/Checkbox'
import { forwardRef } from 'react'

const StyledMuiCheckbox = styled(MuiCheckbox)`
  flex-shrink: 0;
  border-radius: 0.125rem;
  border-width: 1px;
  width: 1rem;
  height: 1rem;
`

export const Checkbox = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof MuiCheckbox>
>((props, ref) => <StyledMuiCheckbox {...props} slotProps={{ input: { ref: ref } }} />)

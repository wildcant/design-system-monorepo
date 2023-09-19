import { styled } from '@mui/joy'
import MuiTextarea, { TextareaProps } from '@mui/joy/Textarea'
import { forwardRef } from 'react'

const StyledMuiTextarea = styled(MuiTextarea)``

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
  <StyledMuiTextarea {...props} slotProps={{ textarea: { ref } }} />
))

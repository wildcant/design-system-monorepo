import { styled } from '@mui/joy'
import MuiRadioGroup from '@mui/joy/RadioGroup'
import MuiRadio from '@mui/joy/Radio'
import { forwardRef } from 'react'

const StyledMuiRadioGroup = styled(MuiRadioGroup)``

const Group = forwardRef<
  React.ElementRef<typeof MuiRadioGroup>,
  React.ComponentPropsWithoutRef<typeof MuiRadioGroup>
>((props, ref) => <StyledMuiRadioGroup {...props} ref={ref} />)

const StyledMuiRadio = styled(MuiRadio)``

const GroupItem = forwardRef<
  React.ElementRef<typeof MuiRadio>,
  React.ComponentPropsWithoutRef<typeof MuiRadio>
>((props /*, _ref*/) => <StyledMuiRadio {...props} />)

export const Radio = {
  Group,
  GroupItem,
}

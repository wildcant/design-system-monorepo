import { styled } from '@mui/joy'
import MuiSwitch, { switchClasses } from '@mui/joy/Switch'
import * as React from 'react'

const StyledMuiSwitch = styled(MuiSwitch)`
  & .${switchClasses.track} {
    height: 24px;
    width: 44px;
    transition-duration: 300ms;
    transition-property: background-color;
    background-color: ${({ theme }) => theme.palette.background.level3};
    &.${switchClasses.checked} {
      background-color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  & .${switchClasses.thumb} {
    background-color: ${({ theme }) => theme.palette.background.body};
    display: block;
    border-radius: 9999px;
    width: 1.25rem;
    height: 1.25rem;
    pointer-events: none;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition:
      width 0.2s,
      left 0.2s;
  }
`

export const Switch = React.forwardRef<
  React.ElementRef<typeof MuiSwitch>,
  React.ComponentPropsWithoutRef<typeof MuiSwitch>
>((props, ref) => <StyledMuiSwitch {...props} ref={ref} />)

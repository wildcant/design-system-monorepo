import { styled } from '@mui/joy'
import MuiOption from '@mui/joy/Option'
import MuiSelect, { selectClasses } from '@mui/joy/Select'
import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'

const StyledMuiSelect = styled(MuiSelect)`
  & .${selectClasses.indicator} {
    transition: 200ms;
    &.${selectClasses.expanded} {
      transform: rotate(-180deg);
    }
  }
`

const Root = forwardRef<
  React.ElementRef<typeof MuiSelect>,
  React.ComponentPropsWithoutRef<typeof MuiSelect>
>((props, ref) => <StyledMuiSelect {...props} indicator={<ChevronDown size={16} />} ref={ref} />)

const StyledMuiOption = styled(MuiOption)``

const Option = forwardRef<
  React.ElementRef<typeof MuiOption>,
  React.ComponentPropsWithoutRef<typeof MuiOption>
>((props, ref) => <StyledMuiOption {...props} ref={ref} />)

export const Select = {
  Root,
  Option,
}

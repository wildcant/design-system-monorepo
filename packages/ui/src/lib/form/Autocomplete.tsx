import { styled } from '@mui/joy'
import MuiAutocomplete, { autocompleteClasses } from '@mui/joy/Autocomplete'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

const StyledMuiAutocomplete = styled(MuiAutocomplete)`
  & .${autocompleteClasses.popupIndicator} {
    transition: 200ms;
    &.${autocompleteClasses.popupIndicatorOpen} {
      transform: rotate(-180deg);
    }
  }
`

export const Autocomplete = React.forwardRef<
  React.ElementRef<typeof MuiAutocomplete>,
  React.ComponentPropsWithoutRef<typeof MuiAutocomplete>
>((props, ref) => (
  <StyledMuiAutocomplete
    {...props}
    slotProps={{ input: { ref } }}
    popupIcon={<ChevronDown size={16} />}
  />
)) as typeof MuiAutocomplete

import MuiFormLabel from '@mui/joy/FormLabel'
import MuiBox, { BoxProps } from '@mui/joy/Box'
import * as React from 'react'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form'
import { Slot } from '@radix-ui/react-slot'
import Typography, { TypographyProps } from '@mui/joy/Typography'

const Root = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItem = React.forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <MuiBox ref={ref} className={className} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
  React.ElementRef<typeof MuiFormLabel>,
  React.ComponentPropsWithoutRef<typeof MuiFormLabel>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <MuiFormLabel
      ref={ref}
      sx={error ? { color: 'danger.500' } : {}}
      className={className}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<TypographyProps, TypographyProps>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <Typography
        ref={ref}
        id={formDescriptionId}
        component="p"
        fontSize="sm"
        sx={{ color: 'text.primary' }}
        className={className}
        {...props}
      />
    )
  },
)
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<TypographyProps, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    console.log({ error, body })
    return (
      <Typography
        ref={ref}
        id={formMessageId}
        component="p"
        fontSize="md"
        sx={{ color: 'danger.500' }}
        className={className}
        {...props}
      >
        {body}
      </Typography>
    )
  },
)
FormMessage.displayName = 'FormMessage'

// eslint-disable-next-line react-refresh/only-export-components
export { useFormField }

export const Form = {
  Root,
  Field: FormField,
  Label: FormLabel,
  Item: FormItem,
  Control: FormControl,
  Message: FormMessage,
  Description: FormDescription,
}

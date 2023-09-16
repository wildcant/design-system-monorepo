import { css } from '@emotion/react'
import { styled } from '@mui/joy'
import MuiButton, { buttonClasses, type ButtonProps, type ButtonTypeMap } from '@mui/joy/Button'
import { ReactNode } from 'react'

const icon = css`
  width: 1.25rem;
  height: 1.25rem;
`

const Container = styled('div')`
  ${icon}
`

const Spinner = styled('div')`
  ${icon}
  position: relative;
  top: 50%;
  left: 50%;
  div {
    animation: spinner 1.2s linear infinite;
    background: gray;
    position: absolute;
    border-radius: 1rem;
    width: 30%;
    height: 8%;
    left: -10%;
    top: -4%;
  }
  div:nth-child(1) {
    animation-delay: -1.2s;
    transform: rotate(1deg) translate(120%);
  }
  div:nth-child(2) {
    animation-delay: -1.1s;
    transform: rotate(30deg) translate(120%);
  }
  div:nth-child(3) {
    animation-delay: -1s;
    transform: rotate(60deg) translate(120%);
  }
  div:nth-child(4) {
    animation-delay: -0.9s;
    transform: rotate(90deg) translate(120%);
  }
  div:nth-child(5) {
    animation-delay: -0.8s;
    transform: rotate(120deg) translate(120%);
  }
  div:nth-child(6) {
    animation-delay: -0.7s;
    transform: rotate(150deg) translate(120%);
  }
  div:nth-child(7) {
    animation-delay: -0.6s;
    transform: rotate(180deg) translate(120%);
  }
  div:nth-child(8) {
    animation-delay: -0.5s;
    transform: rotate(210deg) translate(120%);
  }
  div:nth-child(9) {
    animation-delay: -0.4s;
    transform: rotate(240deg) translate(120%);
  }
  div:nth-child(10) {
    animation-delay: -0.3s;
    transform: rotate(270deg) translate(120%);
  }
  div:nth-child(11) {
    animation-delay: -0.2s;
    transform: rotate(300deg) translate(120%);
  }
  div:nth-child(12) {
    animation-delay: -0.1s;
    transform: rotate(330deg) translate(120%);
  }

  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <Container>
      <Spinner className={className}>
        {[...Array(12)].map((_, i) => (
          <div key={i} />
        ))}
      </Spinner>
    </Container>
  )
}

const StyledButton = styled(MuiButton)`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: solid;
  border-width: 1px;
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.${buttonClasses.loading} {
    cursor: not-allowed;
  }

  &.${buttonClasses.variantSolid} {
    border-color: ${({ theme, color = 'primary' }) => theme.palette[color][900]};
    color: ${({ theme }) => theme.palette.background.body};
    background-color: ${({ theme, color = 'primary' }) => theme.palette[color][900]};

    &:hover {
      color: ${({ theme, color = 'primary' }) => theme.palette[color][500]};
      background-color: ${({ theme }) => theme.palette.background.body};
    }
  }

  &.${buttonClasses.variantOutlined} {
    border-color: ${({ theme, color = 'primary' }) => theme.palette[color][200]};
    color: ${({ theme }) => theme.palette.neutral[500]};
    background-color: ${({ theme }) => theme.palette.background.body};

    &:hover {
      border-color: ${({ theme, color = 'primary' }) => theme.palette[color][500]};
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`
export function Button<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {
    component?: React.ElementType
  },
>(props: ButtonProps<D, P> & { children: ReactNode }) {
  const { disabled, loading, children, ...rest } = props
  return (
    <StyledButton
      // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
      // type={onClick ? 'button' : 'submit'}
      // {...(onClick ? { onClick } : {})}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <LoadingSpinner /> : null}
      <p>{children}</p>
    </StyledButton>
  )
}

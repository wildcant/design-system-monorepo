import { useState } from 'react'
import { Button } from 'ui/button'
import { Container } from 'ui/container'
import { Grid } from 'ui/grid'
import { Stack } from 'ui/stack'
import { ThemeToggle } from 'ui/theme.js'
import { Typography } from 'ui/typography'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid
      container
      component="main"
      alignItems="center"
      width="100%"
      height="100vh"
      sx={{ backgroundColor: 'background.body', color: 'neutral.plainColor' }}
    >
      <Container maxWidth="lg">
        <Typography level="h1" fontSize={64} mb={16}>
          Vite + React + Joy UI + Storybook
        </Typography>

        <ThemeToggle />

        <Stack gap={4}>
          <Stack direction="row">
            <Button variant="solid" color="primary" onClick={() => setCount(count => count + 1)}>
              count is {count}
            </Button>

            <Button variant="outlined" color="primary" onClick={() => setCount(count => count + 1)}>
              count is {count}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default App

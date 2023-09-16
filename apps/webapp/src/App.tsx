import { useState } from 'react'
import { Button, Container, Grid, Stack, Typography } from 'ui'
import { ModeToggle } from './ThemeToggle'

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

        <ModeToggle />

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

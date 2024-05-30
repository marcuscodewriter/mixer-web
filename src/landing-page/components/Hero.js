import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
      : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  outline: '1px solid',
  backgroundImage: `url(${
    theme.palette.mode === 'light'
      ? '/static/images/templates/templates-images/hero-light.png'
      : '/static/images/templates/templates-images/hero-dark.png'
  })`,
  backgroundSize: 'cover',
  outlineColor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 25%, 80%, 0.5)'
      : 'hsla(210, 100%, 80%, 0.1)',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
        style={{ marginBottom: 0, paddingTop: '15vh', paddingBottom: 0}}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
          style={{ marginBottom: 0 }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
            fontFamily={'sans-serif'}
          >
            $TON&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
              fontFamily={'sans-serif'}
            >
              Mixer
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
            fontFamily={'sans-serif'}
          >
            Explore our cutting-edge mixer bot right from within Telegram, anonymize your $TON transfers with ease.
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center">
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
            </Typography> */}
        </Stack>
        <StyledBox id="image" style={{ margin: '20px 20px 20px 20px', padding: '8px 8px 8px 24px', fontFamily: 'sans-serif', height: 'min-content' }}>
          <ul style={{ margin: '2px 0 18px 0', padding: 0, fontFamily: 'sans-serif', fontSize: '16px' }}>
            <li style={{marginBottom: '12px'}}>Simply input the amount of $TON you wish to mix, along with the destination address.</li>
            <li style={{marginBottom: '12px'}}>Then a deposit address is generated and displayed for you to send your $TON.</li>
            <li >Upon confirmation of deposit the bot will go through several steps to mix and finally return your $TON into the destination address.</li>
          </ul>
          <p style={{ fontSize: '15px', paddingTop: '12px' }}><b>This entire process allows users to scramble and mix their $TON such that the trail of transactions cannot be followed, nor can their funds be linked to any previous addresses.</b></p>
          <p style={{ fontSize: '15px', paddingTop: '8px' }}><em>During the process the mixer keeps a live update on the status of your exchange for you to monitor its progress.</em></p>

          <p style={{ fontSize: '15px', paddingTop: '8px', marginBottom: '2px' }}><em>Fees:<br/>0.8% of every TX goes toward buybacks & burns</em>

          <br/><em>Network Fee: ~0.03 - 1 TON<br/><span style={{ fontSize: '14px' }}>Higher if mixing larger amounts {'>='} 80 TON</span></em></p>
        </StyledBox>
      </Container>
    </Box>
  );
}

import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

import screenshot0 from '../screenshot0.png';
import screenshot1 from '../screenshot1.png';
import screenshot2 from '../screenshot2.png';
import screenshot3 from '../screenshot3.png';
import screenshot4 from '../screenshot4.png';
import screenshot5 from '../screenshot5.png';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Toggle design language"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Divider />
      <center style={{ marginTop: '20px', marginBottom: '12px' }}>
        <iframe style={{ alignContent: 'center', borderRadius: '12px' }} height="666" width="90%" id="geckoterminal-embed" title="$MIXER" src="https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQAdFbynSUlzIlh_I4fXuYaer3rvY0TG0BK-NQZ-Y871pZoM" frameBorder="0" allow="clipboard-write" allowFullScreen=""></iframe>
      </center>
      {/* <div style={{ width: '100%', justifyContent: 'center' }}>
        <div className="screenshot-grid" style={{ width: '20px auto'}}>
          <img src={screenshot0} alt="Screenshot 0" className="screenshot"/>
          <img src={screenshot1} alt="Screenshot 1" className="screenshot"/>
          <img src={screenshot2} alt="Screenshot 2" className="screenshot"/>
          <img src={screenshot3} alt="Screenshot 3" className="screenshot"/>
          <img src={screenshot4} alt="Screenshot 4" className="screenshot"/>
          <img src={screenshot5} alt="Screenshot 5" className="screenshot"/>
        </div>
      </div> */}
      <Divider />
      <Footer />
      {/* <Box sx={{ bgcolor: 'background.default' }}>
        {/* <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
    </ThemeProvider>
  );
}

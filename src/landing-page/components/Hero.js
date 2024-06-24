import * as React from 'react';
import './Hero.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import InputLabel from '@mui/material/InputLabel';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// import { Title } from '@mui/icons-material';
import Bottleneck from 'bottleneck';
import axios from 'axios';
import TonWeb from 'tonweb';
import { Address } from 'ton-core';
import dextoolsLogo from '../../dextools.png';
import geckoTerminalLogo from '../../gt.png';
import dexscreenerLogo from '../../dexscreener.png';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, where, query, getDocs, collection, addDoc, Timestamp, Firestore, orderBy, DocumentReference, updateDoc } from 'firebase/firestore';
// import TelegramBot, { Message } from 'telegram-bot-api';

import * as dotenv from 'dotenv';
dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

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

// const changenowLimiter = new Bottleneck({
//   maxConcurrent: 1,
//   minTime: 34
// });
// const changenowKey = process.env.REACT_APP_CHANGENOW_KEY;
// const changenowPrivateKey = process.env.REACT_APP_CHANGENOW_PRIVATE_KEY;
// const changenowUrl = 'https://api.changenow.io/v2/';

// const messageLimiter = new Bottleneck({
//   maxConcurrent: 3,
//   minTime: 102
// });

// const escapeMarkdown = (text) => {
//   return text.replace(/([_{}[\]|()#+-.!])/g, '\\$1');
// };

// const bot = new TelegramBot(process.env.REACT_APP_BOT_TOKEN, { polling: true });
// const db = getFirestore();

// const walletAddress = process.env.REACT_APP_WALLET_ADDRESS;

// const debug = true;

export default function Hero() {

  const [isCreatingMix, setIsCreatingMix] = React.useState(false);

  // const submitMix = async () => {
  //   const amount = document.getElementById('amount').value;
  //   const destination = document.getElementById('destination').value;

  //   if (isNaN(amount) || amount === '' || amount <= 0) {
  //     console.log('Invalid amount');
  //     return;
  //   }
  //   if (destination === '' || !TonWeb.utils.Address.isValid(destination)) {
  //     console.log('Invalid destination');
  //     return;
  //   }
  //   if (isCreatingMix) {
  //     console.log('Already creating mix');
  //     return;
  //   }

  //   const tonMin = 1.5;
  //   const tonMax = 30;

  //   if (amount < tonMin || amount > tonMax) {
  //     console.log('Valid $TON amount required: ', tonMin, ' - ', tonMax, 'TON');
  //     return;
  //   }

  //   const usdtEstimateResponse = await changenowLimiter.schedule(() => axios.get(`${changenowUrl}exchange/estimated-amount?fromCurrency=ton&toCurrency=usdt&fromAmount=${amount}&fromNetwork=ton&toNetwork=ton&flow=standard`, {
  //     headers: {
  //       'x-changenow-api-key': changenowKey
  //     }
  //   }));

  //   const estimatedUSDTAmount = Math.ceil(Number(usdtEstimateResponse.data.toAmount) * 98) / 100;

  //   setIsCreatingMix(true);

  //   try {
  //     const outExchangeResponse = await changenowLimiter.schedule(() => axios.post(`${changenowUrl}exchange`, {
  //       fromCurrency: 'usdt',
  //       fromNetwork: 'ton',
  //       toCurrency: 'ton',
  //       toNetwork: 'ton',
  //       fromAmount: estimatedUSDTAmount,
  //       address: destination,
  //       refundAddress: walletAddress,
  //       flow: "standard",
  //       type: "direct",
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-changenow-api-key': changenowKey
  //       }
  //     }));
  //     const swapOutput = outExchangeResponse.data;
  //     const nonBounceableAddress = swapOutput.payinAddress;

  //     const relayAddress = Address.parse(nonBounceableAddress).toString({ urlSafe: true, bounceable: true });

  //     const inExchangeResponse = await changenowLimiter.schedule(() => axios.post(`${changenowUrl}exchange`, {
  //       fromCurrency: 'ton',
  //       fromNetwork: 'ton',
  //       toCurrency: 'usdt',
  //       toNetwork: 'ton',
  //       fromAmount: amount,
  //       address: relayAddress,
  //       refundAddress: walletAddress,
  //       flow: "standard",
  //       type: "direct",
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-changenow-api-key': changenowKey
  //       }
  //     }))
  //     const exchangeData = inExchangeResponse.data;
  //     const depositAddress = Address.parse(exchangeData.payinAddress).toString({ urlSafe: true, bounceable: true });

  //     const nowTime = Date.now();

  //     const order = {
  //       chatId: '',
  //       amount,
  //       recipientAddress: Address.parse(destination).toString({ urlSafe: true, bounceable: true }),
  //       userRecipientAddress: destination,
  //       messageId: '',
  //       relayAddress,
  //       depositAddress,
  //       status: 'pending',
  //       step: 0,
  //       inExchange: exchangeData.id,
  //       outExchange: swapOutput.id,
  //       createdAt: Timestamp.fromMillis(nowTime),
  //       updatedAt: Timestamp.fromMillis(nowTime),
  //       api: 'changenow'
  //     };

  //     const ref = await addDoc(collection(db, `orders${debug ? '-db' : ''}`), order);
  //     // orderDB.push({
  //     //   id: ref.id,
  //     //   data: order,
  //     //   ref
  //     // });

  //     // if (localOrderMap.get(chatId)) {
  //     //   localOrderMap.get(chatId)!.push({
  //     //     id: ref.id,
  //     //     data: order,
  //     //     ref
  //     //   });
  //     // }

      
  //     const expirationDate = new Date(order.createdAt.toMillis() + 24 * 60 * 60 * 1000);
  //     const formattedDate = expirationDate.toLocaleString('en-US', { timeZone: 'UTC' });
  //     const truncatedRecipientAddress = destination.slice(0, 4) + '...' + destination.slice(-4);

  //     const createdAtText = order.createdAt.toDate().toLocaleString('en-US', { timeZone: 'UTC' });

  //     console.log(`Order created successfully at ${createdAtText} UTC`, ref.id, order);
  //     console.log(`Order to ${truncatedRecipientAddress} expires ${formattedDate} UTC`);


  //     // messageLimiter.schedule(() => bot.editMessageText(escapeMarkdown(`*Order:* \`${ref.id}\`\n\n${createdAtText} UTC\n\n*${tonAmount} $TON  🔀  ${truncatedRecipientAddress}*\nNetwork Fee: *\\~${(amount * 0.003225806452).toPrecision(1)} - ${(amount * 0.05).toFixed(1)} $TON*\n\nSend *${amount} $TON* to the mixer address 👇\n\n\`${depositAddress}\`\n(Click to copy)\n\n*SEND ONLY $TON ALL OTHER TOKENS WILL BE LOST\n\nORDER EXPIRES IN 24 HOURS:*\n${formattedDate} UTC\n\n*Status:* Pending... ⏳\n`)+'_Please allow a few minutes for confirmation after sending_'+escapeMarkdown(`${amount >= 50 ? `\n\n*PLEASE NOTE DEPOSITS OVER 50 $TON MAY TAKE A FEW HOURS TO MIX*` : ''}`), {
  //     //   chat_id: chatId,
  //     //   message_id: messageId,
  //     //   parse_mode: 'MarkdownV2',
  //     //   reply_markup: {
  //     //     inline_keyboard: [
  //     //       [{ text: `✈️  MIX ${tonAmount} $TON  ✈️`, url: `ton://transfer/${depositAddress}?amount=${tonAmount * (10 ** 9)}` }],
  //     //     ]
  //     //   },
  //     // })).then(() => {
  //     //   bot.pinChatMessage(chatId, messageId, { disable_notification: true });
  //     // }).catch((error) => {
  //     //   console.error('Error sending message: ', error);
  //     // });
  //   } catch(error) {
  //     console.error('Error creating order: ', error);
  //   }
  // }

  const copyCa = () => {
    navigator.clipboard.writeText('EQAdFbynSUlzIlh_I4fXuYaer3rvY0TG0BK-NQZ-Y871pZoM');
    alert('Copied to clipboard');
  }

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
              Mixer&nbsp;
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
                + Bridge
              </Typography>
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
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
            fontFamily={'sans-serif'}
          >
            Bridge supports withdrawals/deposits between<br/>TON ↔️ (BTC, ETH, SOL, BASE, BTC, BNB, MATIC)
          </Typography>
          {/* <div style={{ display: 'flex', width: '50vw', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '8px', marginBottom: '8px' }}>
            <iframe src="https://app.chartbrew.com/chart/85108975-be3f-4e4f-b25f-4abbe970f10c/embedded?theme=light" allowTransparency={false} width={700} height={300} scrolling={false} frameborder={0} style={{ backgroundColor: '#ffffff', borderRadius: '12px', marginRight: '12px' }}></iframe>
            <iframe src={"https://app.chartbrew.com/chart/c5f29878-3c6b-4064-98c1-88655b624e9e/embedded?theme=light"} allowTransparency={false} width={700} height={300} scrolling={false} frameborder={0} style={{ backgroundColor: '#ffffff', borderRadius: '12px', marginLeft: '12px' }}></iframe>
          </div> */}
          <div style={{ 
            display: 'flex', 
            width: '66vw', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '8px', 
            marginBottom: '4px' 
          }} className="chart-container">
            <iframe src="https://app.chartbrew.com/chart/85108975-be3f-4e4f-b25f-4abbe970f10c/embedded?theme=light" 
              allowTransparency={false} 
              width={'100%'}
              maxwidth={700}
              height={300} 
              scrolling='no'
              onScroll={false}
              frameborder={0} 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '25px', 
                // marginRight: '12px' 
              }}></iframe>
            <div style={{ height: '25px' }}></div>
            <iframe src="https://app.chartbrew.com/chart/c5f29878-3c6b-4064-98c1-88655b624e9e/embedded?theme=light" 
              allowTransparency={false} 
              width={'100%'}
              maxwidth={700} 
              height={180} 
              scrolling='no'
              onScroll={false}
              frameborder={0} 
              style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '25px', 
                // marginLeft: '12px' 
              }}></iframe>
          </div>
        </Stack>
        {/* <StyledBox id="image" style={{ margin: '20px 20px 20px 20px', padding: '0 16px 16px 16px', fontFamily: 'sans-serif', height: 'min-content', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: '40px', margin: '12px 0 0 0', letterSpacing: 1.2 }}>Mixer Dapp</h2>
          <form style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
            <TextField
              id="amount"
              label="Amount"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
              type='number'
            />
            <TextField
              id="destination"
              label="Destination Address"
              variant="outlined"
              size="small"
              fullWidth
              margin="normal"
            />
            <Button onClick={submitMix} variant="contained" color="primary" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', marginTop: 20}} >
              Submit
            </Button>
          </form>
        </StyledBox> */}
        <Divider/>
        <StyledBox id="image" style={{ width: '75vw', textAlign: 'center', margin: '20px 20px 2px 20px', padding: '8px 8px 15px 24px', fontFamily: 'sans-serif', height: 'min-content' }}>
          <h1 style={{ margin: '0px 10px 15px 10px', fontWeight: 'bold'}} >About</h1>
          {/* <ul style={{ margin: '2px 0 18px 0', padding: 0, fontFamily: 'sans-serif', fontSize: '16px' }}> */}
            <text style={{marginBottom: '12px'}}><b>Simply send /start to our <b><a style={{ color: '#00aaff', fontSize: 18 }} href="https://t.me/ton_mix_bot" target='_'>$Mixer Bot</a></b> and follow the user-friendly flow to mix your $NOT or $TON <br/> or <br/> Bridge between TON ↔️ BTC | ETH | SOL | BASE | BNB | MATIC</b></text>
            {/* <li style={{marginBottom: '12px'}}>Then a deposit address is generated and displayed for you to send your $TON.</li>
            <li >Upon confirmation of deposit the bot will go through several steps to mix and finally return your $TON into the destination address.</li> */}
          {/* </ul> */}
          <br/>
          <br/>
          <p style={{ fontSize: '15px' }}><b>This bot keeps users's wallet addresses concealed and anonymous while transferring $NOT and $TON to any address, allowing them transact in private!</b></p>
          <p style={{ fontSize: '15px'}}><em>During the process the mixer keeps a live update on the status of your exchange for you to monitor its progress via Telegram message.</em></p>

          <p style={{ fontSize: '15px', paddingTop: '20px', marginBottom: '2px' }}><em>Fees:<br/>0.4% of every TX goes toward buybacks & burns</em>

          <br/><em>Network Fee: ~0.03 - 1 TON<br/><span style={{ fontSize: '14px' }}></span></em></p>
        </StyledBox>
        <div style={{ width: '90vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {/* <div style={{ width: '40vw',  marginRight: '12px' }}> */}
            <StyledBox id="image" style={{ width: '75vw', fontWeight: 700, letterSpacing: '0.5px', textAlign: 'center', margin: '12px 5px 10px 5px', padding: '8px 8px 12px 24px', fontFamily: 'sans-serif', height: 'min-content' }}>
              <h1 style={{ margin: '10px'}} > $MIXER Tokenomics</h1>
              <p style={{ fontSize: '15px', margin: '14px 0 14px' }}><em><b><a style={{ textDecoration: 'none', color: '#00aaff', fontSize: 18, margin: '0 12px' }} href="https://tonviewer.com/EQAdFbynSUlzIlh_I4fXuYaer3rvY0TG0BK-NQZ-Y871pZoM?section=jetton" target='_'>CA: Renounced</a></b></em> | <em><b><a style={{ textDecoration: 'none', color: '#00aaff', fontSize: 18, margin: '0 12px' }} href="https://tonviewer.com/EQAUSQROzbfAEC-x0UmKBybyT35U3WRr6k5daPMizWvY8rOk?section=holders" target='_'>LP Burned</a></b></em> | <em><b><a style={{ textDecoration: 'none', color: '#00aaff', fontSize: 18, margin: '0 12px' }} href="https://www.geckoterminal.com/ton/pools/EQAUSQROzbfAEC-x0UmKBybyT35U3WRr6k5daPMizWvY8rOk" target='_'>📈 Chart</a></b></em></p>
              <p style={{ fontSize: '15px', margin: '6px 0' }}></p>
              <p style={{ fontSize: '15px', margin: '6px 0' }}><em>Max Supply: 100m</em></p>
              <p style={{ fontSize: '15px', margin: '6px 0' }}><em>Total Supply: 90.7m</em></p>
              <p style={{ fontSize: '15px', margin: '4px 00' }}><em>Burned: 9.3% Supply</em></p>

            </StyledBox>
          <StyledBox style={{ flexDirection: 'column', fontFamily: 'sans-serif', margin: '6px 0 20px 0', padding: '12px 12px 15px 12px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', height: 'min-content', width: 'min-content', minWidth: '85%'}}>
            <h1 style={{ margin: '0px 10px 15px 10px', fontWeight: 'bold'}}>Socials</h1>
            <a style={{ textDecoration: 'none', color: '#00aaff', marginBottom: '6px' }} href="https://x.com/tonmixbot" target="_">X: @tonmixerbot</a>
            <a style={{ textDecoration: 'none', color: '#00aaff', marginBottom: '6px' }} href="https://t.me/tonmixerchat" target="_">TG: @tonmixerchat</a>
            <a style={{ textDecoration: 'none', color: '#00aaff', marginBottom: '6px' }} href="https://t.me/ton_mix_bot" target="_">Mixer: @ton_mix_bot</a>
            <br/>
            <span style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={copyCa} >$MIXER CA: <em>EQAdFbynSUlzIlh_I4fXuYaer3rvY0TG0BK-NQZ-Y871pZoM</em></span>
            <br/>
            <div style={{ width: '40vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ height: '40px', margin: '20px', cursor: 'pointer' }} src={dextoolsLogo} onClick={() => window.open('https://www.dextools.io/app/en/ton/pair-explorer/EQAUSQROzbfAEC-x0UmKBybyT35U3WRr6k5daPMizWvY8rOk', '_')} alt='Dextools' />
              •
              <img style={{ height: '40px', margin: '20px', cursor: 'pointer' }} src={dexscreenerLogo} onClick={() => window.open('https://dexscreener.com/ton/eqausqrozbfaec-x0umkbybyt35u3wrr6k5dapmizwvy8rok', '_')} alt='Dexscreener' />
              •
              <img style={{ height: '40px', margin: '20px', cursor: 'pointer' }} src={geckoTerminalLogo} onClick={() => window.open('https://www.geckoterminal.com/ton/pools/EQAUSQROzbfAEC-x0UmKBybyT35U3WRr6k5daPMizWvY8rOk', '_')} alt='Gecko Terminal' />
            </div>
            <br/>
            <a style={{ textDecoration: 'none', color: '#00aaff', marginBottom: '6px' }} href="mailto:tonmixerbot@gmail.com" target="_">tonmixerbot@gmail.com</a>
          </StyledBox>
        </div>
      </Container>
    </Box>
  );
}

/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react';
import { Circle, StarBorder } from '@mui/icons-material';
import { Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useAccount } from 'wagmi';
import { useWeb3Store } from 'src/Context/Web3Context';
import { KingFilterButton } from '../Button/KingFilterButton';
import { getTotalDeposited } from 'src/Contracts/kingPad';
import { currentTimeStamp } from 'src/Utils/utcTimePrinter';

export const CradleOfSinSAddress = '0x4d9f39f7Cb7c7444335077223cEeF33dbB58096F';
export const CradleOfSinsProjectName = 'Cradle Of SinS';

export const KingstarterStatusCard = (props: {
  status: string;
  currency: string;
  timeStamp: number;
  softcap: number;
  hardcap: number;
  addressToken: string;
}) => {
  const { status, currency, timeStamp, addressToken, softcap, hardcap } = props;

  const { isConnected, isInitialized } = useWeb3Store();
  const [raisedValue, setRaisedValue] = useState('0');

  const getTotalDepositValue = async () => {
    const total = await getTotalDeposited();
    if (total !== undefined) {
      setRaisedValue(total);
    }
  };

  useEffect(() => {
    getTotalDepositValue();
  }, [isConnected, isInitialized]);

  return (
    <CardBox about="Ends-In-Card">
      <CardButtonGroup>
        <KingFilterButton name="kingstarter" />
        <OngoingButton>
          <Circle
            sx={{
              width: '18px',
              height: '18px',
              color: `${status === 'Ongoing' ? '#00FE9A' : status === 'Upcoming' ? '#fdac52' : '#fc1e42'}`
            }}
          />
          {status === 'Ongoing' ? 'On going' : status}
        </OngoingButton>
      </CardButtonGroup>
      <RaisedContainer>
        {status !== 'Ended' && (
          <>
            <RaisedLabel>Soft/Hard</RaisedLabel>
            <RaisedValue>
              {softcap}
              {currency} - {hardcap}
              {currency}
            </RaisedValue>
          </>
        )}
        <RaisedLabel>Raised</RaisedLabel>
        {addressToken === CradleOfSinSAddress ? (
          <RaisedValue>{`${1800} ${currency}`}</RaisedValue>
        ) : (
          <RaisedValue>{`${raisedValue} ${currency}`}</RaisedValue>
        )}
      </RaisedContainer>
      <EndInContainer>
        <CardLabel>{status === 'Upcoming' ? 'Starts in' : 'Ends in'}</CardLabel>
        {status === 'Ended' ? <EndedLabel>Kingsale ended</EndedLabel> : <CountDown timestamp={timeStamp} />}{' '}
      </EndInContainer>
    </CardBox>
  );
};

const CountDown = (props: { timestamp: number }) => {
  const { timestamp } = props;
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(timestamp));

  function getTimeLeft(timestamp: number) {
    const now = currentTimeStamp();
    if (timestamp < now) {
      timestamp = now;
    }
    const totalSeconds = timestamp === 0 ? timestamp : Math.floor((timestamp - now) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(timestamp));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestamp]);

  return (
    <EndInTimeContainer>
      <EndInTime name="Days" value={timeLeft.days < 10 ? '0' + timeLeft.days : timeLeft.days} />
      <Divider orientation="vertical" sx={{ backgroundColor: '#8462F6' }} />
      <EndInTime name="Hours" value={timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours} />
      <Divider orientation="vertical" sx={{ backgroundColor: '#8462F6' }} />
      <EndInTime name="Minutes" value={timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes} />
      <Divider orientation="vertical" sx={{ backgroundColor: '#8462F6' }} />
      <EndInTime name="Seconds" value={timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds} />
    </EndInTimeContainer>
  );
};

const CardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '35px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  gap: '20px'
}));

const CardButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2.5px'
}));

const KingStarterButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  borderRadius: '20px',
  textTransform: 'uppercase',
  height: '27px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2px',
  backgroundColor: '#8462F6',
  color: '#FFFFFF',
  fontFamily: 'gotham-book',
  '&:hover': {
    backgroundColor: '#8462F6'
  },
  [theme.breakpoints.down(370)]: {
    fontSize: '10px'
  }
}));

const OngoingButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold',
  fontSize: '13px',
  height: '27px',
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  textTransform: 'none',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  border: `1px solid ${theme.palette.primary.contrastText}`,
  [theme.breakpoints.down(370)]: {
    fontSize: '9px'
  }
}));

const EndInTimeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '18px',
  alignItems: 'center',
  paddingTop: '18px',
  color: '#8462F6',
  [theme.breakpoints.down('sm')]: {
    gap: '9px'
  }
}));

const EndInTime = (props: EndInTimeProps) => {
  return (
    <EndInTimeWrapper>
      <EndInTimeValue>{props.value}</EndInTimeValue>
      <EndInTimeName>{props.name}</EndInTimeName>
    </EndInTimeWrapper>
  );
};

interface EndInTimeProps {
  name: string;
  value: string | number;
}

const EndInTimeWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const EndInTimeValue = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  color: theme.palette.primary.contrastText,
  fontWeight: '600',
  letterSpacing: '-0.26px',
  lineHeight: '25px'
}));

const EndInTimeName = styled(Box)(({ theme }) => ({
  fontSize: '8px',
  color: '#8462F6',
  textTransform: 'uppercase'
}));

const CardLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontWeight: '600'
}));

const RaisedContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px'
}));

const RaisedLabel = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  color: '#8462F6',
  fontFamily: 'gotham-bold'
}));

const EndedLabel = styled(Box)(({ theme }) => ({
  fontSize: '19px',
  color: ' #1E0041',
  fontFamily: 'gotham-bold'
}));

const RaisedValue = styled(Box)(({ theme }) => ({
  fontSize: '25px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText
}));

const EndInContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
}));

const Kingsale = styled(Button)(({ theme }) => ({
  borderRadius: '32px',
  fontSize: '15px',
  backgroundColor: '#8462F6',
  fontFamily: 'gotham-bold',
  padding: '5px 34px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#8462F6'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px'
  }
}));

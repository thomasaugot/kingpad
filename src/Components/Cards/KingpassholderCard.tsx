import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { MenuKingPass } from 'src/Config/Images';
import { useWeb3Store } from 'src/Context/Web3Context';
import { getTotalDeposited } from 'src/Contracts/kingPad';
import { CircularProgressBar } from '../Progress/CircularProgress';

export const KingpassholderCard = (props: {
  status: string;
  isKing: boolean;
  hardCap: number;
  isWhiteListed: boolean;
}) => {
  const { hardCap, status, isWhiteListed, isKing } = props;
  const { isConnected, isInitialized } = useWeb3Store();
  const [totalContribution, setTotalContribution] = useState(0);

  useEffect(() => {
    getTotalDepositValue();
  }, [isConnected, isInitialized]);

  const getTotalDepositValue = async () => {
    const total = await getTotalDeposited();
    if (total !== undefined) {
      setTotalContribution(parseFloat(total));
    }
  };

  return (
    <KingpassholderCardContainer status={status}>
      {status === 'Ongoing' ? (
        !isWhiteListed ? (
          <>
            <PrimaryLabel>Sorry!</PrimaryLabel>
            <SecondaryLabel>
              You are not whitelisted, <br /> wait for the open <br />
              Kingsale event.
            </SecondaryLabel>
          </>
        ) : !isKing ? (
          <>
            <KingpassLogo src={MenuKingPass} alt="kingpass-logo" />
            <PrimaryLabel>
              Sorry! You need <br /> a Kingpass to <br /> join this sale
            </PrimaryLabel>
            <Discover onClick={() => window.open('https://kingpass.finance')}>Mint now</Discover>
          </>
        ) : (
          <CircularProgressBar percentage={parseFloat(((totalContribution / hardCap) * 100).toFixed(1))} />
        )
      ) : status === 'Upcoming' ? (
        <>
          <KingpassLogo src={MenuKingPass} alt="kingpass-logo" />
          <PrimaryLabel>
            This sale will <br /> Start soon
          </PrimaryLabel>
          <SecondaryLabel>
            Remember that you <br /> need a Kingpass to have a <br /> guaranteed allocation
          </SecondaryLabel>
          <Discover onClick={() => window.open('https://kingpass.finance')}>Discover</Discover>
        </>
      ) : (
        <></>
      )}
      {status === 'Ended' && <CircularProgressBar percentage={100} />}
    </KingpassholderCardContainer>
  );
};

const KingpassholderCardContainer = styled(Box)<{ status: string }>(({ theme, status }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '35px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px'
}));

const KingpassLogo = styled('img')(({ theme }) => ({
  width: '72px',
  height: 'auto'
}));

const PrimaryLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '30px',
  fontFamily: 'gotham-bold',
  textAlign: 'center',
  lineHeight: '35px',
  [theme.breakpoints.down(1480)]: {
    fontSize: '25px'
  },
  [theme.breakpoints.down(370)]: {
    fontSize: '20px'
  }
}));

const SecondaryLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '15px',
  textAlign: 'center',
  lineHeight: '18px',
  width: '239px',
  fontFamily: 'gotham-bold',
  [theme.breakpoints.down(370)]: {
    fontSize: '13px',
    width: '240px'
  }
}));

const Discover = styled(Button)(({ theme }) => ({
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

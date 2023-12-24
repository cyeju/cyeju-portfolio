import { Container } from '@mui/material';

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{ py: '30px', textAlign: 'center', color: 'white', backgroundColor: '#333', minWidth: '100%' }}
    >
      <a
        href="https://github.com/cyeju/cyeju-portfolio/blob/main/LICENSE"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', color: '#0af', marginRight: '3px' }}
      >
        MIT LICENSE
      </a>
      2023 by brom5033 Yeju Choi
    </Container>
  );
};

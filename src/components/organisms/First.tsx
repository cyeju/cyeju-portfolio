import { Typography } from '@mui/material';
import { ColorSection } from '@/components/atoms/ColorSection';

export const First = () => {
  return (
    <ColorSection color="#BD3455">
      <Typography component="h1" variant="h1">
        FRONTEND
      </Typography>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          position: 'absolute',
          zIndex: '101',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%,-10%)',
          width: '100%',
        }}
      >
        <span style={{ color: 'yellow' }}>개발자 최예주</span>입니다
      </Typography>
    </ColorSection>
  );
};

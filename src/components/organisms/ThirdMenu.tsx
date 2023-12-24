import type { FC } from 'react';
import { ColorSection } from '@/components/atoms/ColorSection';
import { Grid, Box, Stack, Typography, Button, Tooltip } from '@mui/material';

export const ThirdMenu: FC = () => {
  return (
    <ColorSection color="#999a9d">
      <Box
        sx={{
          backgroundColor: '#f7e057',
          transform: 'rotate(-30deg) translate(-50%, -50%)',
          overflow: 'hidden',
          width: '200%',
          height: '200%',
          position: 'absolute',
          top: '0%',
          left: '-35%',
        }}
      />
      <Grid
        container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <img src="/images/eatery.png" width={250} height={300} style={{ margin: 'auto' }} />
            <Typography variant="h4" color="#67676a" sx={{ fontWeight: 'bolder' }}>
              Eatery
            </Typography>
            <Typography variant="body1" color="#6f6e68">
              위치 기반 맛집 추천 서비스
            </Typography>
            <Stack direction="row" gap="12px" sx={{ width: 'fit-content', margin: 'auto' }}>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button
                  sx={{
                    color: '#1c1c1c',
                    border: '1px solid #1c1c1c',
                    boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
                  }}
                  href="https://github.com/Zelusik/frontend-web"
                  target="_blank"
                >
                  깃허브
                </Button>
              </Tooltip>
              <Button
                sx={{
                  color: '#1c1c1c',
                  border: '1px solid #1c1c1c',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
                }}
                href="https://www.notion.so/cyeju-portfolio/v2-0-Eatery-6ebae296f0ae4532949fa72c8866ab23?pvs=4"
                target="_blank"
              >
                v2.0 노션
              </Button>
              <Button
                sx={{
                  color: '#1c1c1c',
                  border: '1px solid #1c1c1c',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
                }}
                href="https://www.notion.so/cyeju-portfolio/v1-0-Eatery-7916f3e11e904b0a91912aa5a6c4f2c2?pvs=4"
                target="_blank"
              >
                v1.0 노션
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <img src="/images/stepit.png" width={250} height={300} style={{ margin: 'auto' }} />
            <Typography variant="h4" color="#f7e057" sx={{ fontWeight: 'bolder' }}>
              Step-IT
            </Typography>
            <Typography variant="body1" color="#f7e057">
              음성인식 기반 춤 학습 서비스
            </Typography>
            <Stack direction="row" gap="12px" sx={{ width: 'fit-content', margin: 'auto' }}>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button
                  sx={{
                    color: 'white',
                    border: '1px solid white',
                    boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
                  }}
                  href="https://github.com/Stepit-GW/Stepit-Client"
                  target="_blank"
                >
                  깃허브
                </Button>
              </Tooltip>
              <Button
                sx={{
                  color: 'white',
                  border: '1px solid white',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
                }}
                href="https://www.notion.so/cyeju-portfolio/Step-IT-336490ea469c4fe2bc3d0b8b527be6dd?pvs=4"
                target="_blank"
              >
                노션
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ColorSection>
  );
};

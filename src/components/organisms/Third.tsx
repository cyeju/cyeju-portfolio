import { ColorSection } from '@/components/atoms/ColorSection';
import { Grid, Stack, Button } from '@mui/material';

export const Third = () => {
  return (
    <ColorSection color="#f7e057">
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <Stack sx={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img src="/images/eatery.png" alt="eatery" width={294} height={394} style={{ borderRadius: '15px' }} />
            </Stack>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                marginTop: '30px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img src="/images/stepit.png" alt="stepit" width={294} height={394} style={{ borderRadius: '15px' }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: '#999a9d', height: '100%', display: 'flex', alignItems: 'center' }}
        >
          <Stack spacing={1}>
            <Stack spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button sx={{ color: '#fff', border: '1px solid white' }} href="https://bobeatery.com/" target="_blank">
                Eatery
              </Button>
              <p>
                eatery 소개: 약속 상황에 맞는 음식점을 제공하고, 사용자들이 작성한 음식점 리뷰들을 공유할 수 있는 맛집
                공유 서비스에요.
              </p>
              <p>
                제작하게 된 이유: 막연하게 무언가를 개발 하고 싶었지만 시중에 많이 나와있는 앱들을 개발하고 개선점을
                보완하여도 제가 만든 프로젝트가 과연 대중화 되있는 앱보다 활용도가 높을지 고민해봤어요. 그러다 블로그나
                인스타에 맛집을 저장해두는 사람들의 글들을 하나로 모으고, 맛집 위치를 지도에서 한눈에 보여주는 기능을
                담으면 좋지않을까? 하는 생각에 개발을 결심하게 되었어요.
              </p>
              <p>
                기술스택 선정 이유: React를 사용 한 이유는 넓은 커뮤니티와 다양한 라이브러리를 사용할 수 있기
                때문이에요. 또한 완성도 높은 결과물을 위해 TypeScript 도 함께 사용했어요. 그리고 pc화면에서의 대응도
                가능 하도록 반응형으로 제작했어요.
              </p>
            </Stack>
            <Stack spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Button sx={{ color: '#fff', border: '1px solid white' }} href="">
                Step-IT
              </Button>
              <p>Step-IT 소개: 춤을 배우고 싶은 초보자들을 위한 음성 인식 기반 춤 학습 서비스에요.</p>
              <p>
                제작하게된 이유: 한동안 코로나로 인해 집에서 머무는 시간이 많아졌어요. 그러다 집에서 운동을 원하는
                사람들의 수요가 늘어난 것을 알게 되었습니다. 그래서 집에서도 운동할 수 있도록 운.
              </p>
              <p>
                기술스택 선정이유: ReactNative와 TypeScript를 사용한 이유는 사이드 프로젝트에서 직접 기술을 사용 해보고
                싶었고, 또한 Typescript를 사용하면서 더 많은 것을 배울 수 있을 것 같아서 선택했어요. ReactNative를
                사용한 이유는 크로스플렛폼 제작이 가능하기 때문이에요.
              </p>
              <p>
                느낀점: 영상 파일을 다루는 경험은 많이 없었는데, 이번 기회에 마음껏 다룰 수 있었어요. 기획자에게 특정
                기획이 불가능한 이유에 대해 설명하고 설득하는 경험을 할 수 있었고, 제 상황과 입장을 제시하는 것도
                중요하다는 사실을 깨달았어요.
              </p>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ColorSection>
  );
};

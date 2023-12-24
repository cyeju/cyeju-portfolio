import { DrawerAppBar } from '@/components/molecules';
import { Footer } from '@/components/organisms';
import { IndexTemplate } from '@/components/templates';

export const Index = () => {
  return (
    <>
      <DrawerAppBar />
      <IndexTemplate />
      <Footer />
    </>
  );
};

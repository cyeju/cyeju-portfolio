import { DrawerAppBar } from '@/components/molecules/DrawerAppBar';
import { Footer } from '@/components/organisms/Footer';
import { IndexTemplate } from '@/components/templates/IndexTemplate';

export const Index = () => {
  return (
    <>
      <DrawerAppBar />
      <IndexTemplate />
      <Footer />
    </>
  );
};

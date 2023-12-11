import { Header } from '@/app/partials/Header/Header';
import { HomeSection } from '@/app/partials/HomeSection/HomeSection';
import { NewAccount } from '@/app/partials/NewAccount/NewAccount';
import { BenefitsSection } from '@/app/partials/BenefitsSection/BenefitsSection';

const Home = () => {
  return (
    <>
      <Header />

      <HomeSection />
      <NewAccount />
      <BenefitsSection />
    </>
  )
}

export default Home;
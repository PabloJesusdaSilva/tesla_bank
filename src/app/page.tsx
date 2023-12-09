import { Header } from '@/app/partials/Header/Header';
import { HomeSection } from '@/app/partials/HomeSection/HomeSection';
import { NewAccount } from '@/app/partials/NewAccount/NewAccount';

const Home = () => {
  return (
    <>
      <Header />

      <HomeSection />
      <NewAccount />
    </>
  )
}

export default Home;
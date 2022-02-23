import type { NextPage } from 'next';
import Head from 'next/head';
import { Avatar, RateComment } from '../components';

const Home: NextPage = () => {
  return (
    <div className="bg-lightGray w-screen min-h-screen flex flex-col items-center py-8 sm:py-10">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg">
        <section>
          <div className="bg-white rounded-lg flex flex-row items-start gap-5 p-8">
            <RateComment />
            <div className="flex flex-col gap-5">
              <div className="flex-flex-row gap-5 items-start">
                <Avatar imgUrl="/assets/avatars/image-amyrobson.png" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

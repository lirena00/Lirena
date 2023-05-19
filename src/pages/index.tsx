import { type NextPage } from "next";
import Head from "next/head";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lirena</title>
        <meta name="description" content="Lirena" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000] to-[#15162c]">
        
        <div className="container flex flex-col w-full lg:w-3/4  gap-12 px-4 py-8 border-2">
        <p className="text-3xl font-bold tracking-tight inline text-white">
        Hi, I`&apos;`m
        <span className="inline text-[hsl(280,100%,70%)]">
          <Typewriter
            options={{
              strings: ['Lirena', 'Saksham Kushwaha'],
              autoStart: true,
              loop: true,
            }}
          />
        </span> 
        </p>

        <p className=" text-gray-400 tracking-tighter font-semibold text-lg">       
        I`&apos;`m an 18-year-old developer from India with a strong command of Python, TypeScript, JavaScript and some C++. 
        <br></br>
        <br></br>
        I started
        my journey in the world of programming seriously in 2018, and since then I have been learning and developing my skills.
        I am currently working on a few projects, including a Discord bot, a website, and a few other things.
        <br></br>
        <br></br>
        In free time I like drawing, writing, and immersing myself in the world of anime and manga.
        </p>
        
        <p className="text-3xl font-bold tracking-tight inline text-white">
        Projects
        </p>
     
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

        <div className="max-w-md mx-auto rounded overflow-hidden  card text-white">
        <Image className="w-full object-cover" src="/aniray.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Aniray</div>
        <p className="text-gray-400 text-base">
        Aniray is an anime streaming site which I used to get into Next.js and Tailwind CSS. It also focuses on the scraping
        of anime from various sources and displaying them in a clean and easy to use interface.
        </p>
        </div>
        <div className="px-auto py-2 w-full flex items-center justify-center bg-[hsl(280,100%,70%)]">
        <a href="https://aniray.lirena.xyz" target="_blank" className="text-white font-bold rounded-xl text-lg">Website</a>
        </div>
        </div>

        <div className="max-w-md mx-auto rounded overflow-hidden  card text-white">
        <Image className="w-full object-cover" src="/clover.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Clover Bot</div>
        <p className="text-gray-400 text-base">
        Clover is a Discord bot which I made to learn more about Python and Discord.py and Database. It had a lot of
        features, including a leveling system, a currency system, and a lot more. It also had several api integrations.
        </p>
        </div>
        <div className="px-auto py-2 w-full flex items-center justify-center bg-[hsl(280,100%,70%)]">
        <a href="https://top.gg/bot/855532494035484743" target="_blank" className="text-white font-bold rounded-xl text-lg">Website</a>
        </div>
        </div>

        </div>

        </div>
      </main>
    </>
  );
};

export default Home;
/*#09ddc1*/
/*#15162c*/
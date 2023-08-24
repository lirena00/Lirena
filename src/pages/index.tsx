import { type NextPage } from "next";
import Head from "next/head";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import Image from 'next/image'


const Home: NextPage = ()=>{
  
  return (
    <>
      <Head>
        <title>Lirena</title>
        <meta name="description" content="Lirena" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex p-5 min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000] to-[#15162c]">
        
        <div className="container flex flex-col w-full lg:w-3/4  gap-8 px-2 py-8">

        <p className="text-3xl font-bold tracking-tight inline text-white">
  Hi, I&apos;m{' '}
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
        I&apos;m an 18-year-old developer from India with a strong command of Python, TypeScript, JavaScript and some C++. 
        <br></br>
        <br></br>
        I started
        my journey in the world of programming seriously in 2018, and since then I have been learning and developing my skills.
        I am currently working on a few projects, including a Discord bot, a website, and a few other things.
        <br></br>
        <br></br>
        In free time I like drawing, writing, and immersing myself in the world of anime and manga.
        </p>
        
        <p className="text-3xl font-bold  text-white">
        Projects
        </p>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">

        <Link href="https://aniray.lirena.xyz" target="_blank" >
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100 card text-white w-full">
        <Image className="w-full object-cover" src="/aniray_banner.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Aniray</div>
        <p className="text-gray-400 text-base h-max ">
        Aniray is an anime streaming site which I used to get into Next.js and Tailwind CSS. It also focuses on the scraping
        of anime from various sources and displaying them in a clean and easy to use interface.
        </p>
        </div>
        </div>
        </Link>



        <Link href="https://top.gg/bot/855532494035484743" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/clover.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Clover Bot</div>
        <p className="text-gray-400 text-base w-full">
        Clover is a Discord bot which I made to learn more about Python and Discord.py and Database. It had a lot of
        features, including a leveling system, a currency system, and a lot more. It also had several api integrations.
        </p>
        </div>
        </div>
        </Link>

        <Link href="https://story.lirena.xyz" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white h-full">
        <Image className="w-full object-cover" src="/story.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Story</div>
        <p className="text-gray-400 text-base w-full">
        This is a website which I made to explore more about libraries like contentlayer and tailwindcss This also have a collection
        of several of the stories which I have written as the part of my hobby. 
        </p>
        </div>
        </div>
        </Link>

        <Link href="https://github.com/LiReNa00/Manga-Miner" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/manga_miner.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Manga Miner</div>
        <p className="text-gray-400 text-base w-full ">
        This was one of the first project that I built for scraping manga from various sources. It was built using Python and BeautifulSoup.
        This also had a feature to download the manga in the form of a pdf.
        </p>
        </div>
        </div>
        </Link>

        <Link href="https://aishiteru.lirena.xyz" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/aishiteru.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Aishiteru</div>
        <p className="text-gray-400 text-base w-full ">
        A rewrite and a better next.js version of one of the first project with same name. This was built with T3 stack and
        uses TS. It&apos;s like Tiktok but for waifu lovers. It has endless scroll of Waifu Images.
        </p>
        </div>
        </div>
        </Link>

        <Link href="" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/manga_miner.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tepi</div>
        <p className="text-gray-400 text-base w-full ">
         A multipurpose private api used in several sites of mine for example Aniray and Story. It is built using flask and Python
        Mostly it serves as an image generation api which have several endpoints for different types of images.
        </p>
        </div>
        </div>
        </Link>

        <Link href="" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/siesta.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Siesta</div>
        <p className="text-gray-400 text-base w-full ">
        A priavte music discord bot only for some servers which is not discontinued. It was built on the same framework as Clover,
        but it was more focused on music and had a lot of features related to music.
        </p>
        </div>
        </div>
        </Link>

        <Link href="" target="_blank">
        <div className=" rounded overflow-hidden transform hover:scale-95 duration-100  card text-white">
        <Image className="w-full object-cover" src="/manga_miner.jpg" alt="Project Banner" width={1000} height={1000}/>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Dash</div>
        <p className="text-gray-400 text-base w-full ">
        A in development homepage for my browser which is built using Next.js and Tailwind CSS. With features like
        quicklinks, weather and in development features like todo list and more.
        </p>
        </div>
        </div>
        </Link>


        </div>

        </div>

 <div className="">
  find me at
 </div>
        
      </main>
    </>
  );
};

export default Home;
/*#09ddc1*/
/*#15162c*/
import { type NextPage } from "next";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

interface Project {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    href: "https://odash.lirena.in",
    imageSrc: "/odash_banner.jpg",
    title: "Odash",
    description:
      "Odash is widget based new tab page which allows you to place items wherever you want and however you want to maximize the personalization one can get.",
  },
  {
    href: "https://animood.lirena.in",
    imageSrc: "/animood_banner.jpg",
    title: "Animood",
    description:
      "Animood is an platform which suggest you anime based on your mood. It uses AI to recognise best genre and tag that would fit your mood. Other than that it also have history and overall animelist recommendation.",
  },
  {
    href: "https://aniray.lirena.in",
    imageSrc: "/aniray_banner.jpg",
    title: "Aniray",
    description:
      "Aniray is an anime streaming site which I used to get into Next.js and Tailwind CSS. It also focuses on the scraping of anime from various sources and displaying them in a clean and easy to use interface.",
  },
  {
    href: "https://top.gg/bot/855532494035484743",
    imageSrc: "/clover.jpg",
    title: "Clover Bot",
    description:
      "Clover is a Discord bot which I made to learn more about Python and Discord.py and Database. It had a lot of features, including a leveling system, a currency system, and a lot more. It also had several api integrations.",
  },
  {
    href: "https://story.lirena.in",
    imageSrc: "/story.jpg",
    title: "Story",
    description:
      "This is a website which I made to explore more about libraries like contentlayer and tailwindcss This also have a collection of several of the stories which I have written as the part of my hobby.",
  },
  {
    href: "https://aishiteru.lirena.in",
    imageSrc: "/aishiteru.jpg",
    title: "Aishiteru",
    description:
      "A rewrite and a better next.js version of one of the first project with same name. This was built with T3 stack and uses TS. It's like Tiktok but for waifu lovers. It has endless scroll of Waifu Images.",
  },
  {
    href: "#",
    imageSrc: "/tepi.jpg",
    title: "Tepi",
    description:
      "A multipurpose private api used in several sites of mine for example Aniray and Story. It is built using flask and Python Mostly it serves as an image generation api which have several endpoints for different types of images.",
  },
  {
    href: "#",
    imageSrc: "/siesta.jpg",
    title: "Siesta",
    description:
      "A priavte music discord bot only for some servers which is not discontinued. It was built on the same framework as Clover, but it was more focused on music and had a lot of features related to music.",
  },
  {
    href: "https://github.com/LiReNa00/Manga-Miner",
    imageSrc: "/manga_miner.jpg",
    title: "Manga Miner",
    description:
      "This was one of the first project that I built for scraping manga from various sources. It was built using Python and BeautifulSoup. This also had a feature to download the manga in the form of a pdf.",
  },
  {
    href: "https://newsense.lirena.in",
    imageSrc: "/newsense.jpg",
    title: "Newsense",
    description:
      "Newsense is a news aggregator website built using Next.js and Tailwind CSS which focuses on saving your time by using power of AI to summarize the articles in points.",
  },
  {
    href: "#",
    imageSrc: "/portfolio.jpg",
    title: "Portfolio",
    description:
      "This site is made using Next.js and Tailwind CSS which serves as portfolio. It showcases all the major projects I have worked on along with techstack and about me.",
  },
  {
    href: "#",
    imageSrc: "/dash.jpg",
    title: "Dash",
    description:
      "An in development homepage for my browser which is built using Next.js and Tailwind CSS. With features like quicklinks, weather and in development features like todo list and more.",
  },
];

const ProjectCard: React.FC<Project> = ({
  href,
  imageSrc,
  title,
  description,
}) => (
  <Link href={href} target="_blank">
    <div className="group relative z-20 h-full overflow-hidden rounded-xl text-white">
      <Image
        className="absolute -z-10 h-full w-full transform object-cover duration-300 group-hover:scale-110"
        src={imageSrc}
        alt="Project Banner"
        width={1000}
        height={1000}
      />
      <div className="card place-items-left grid h-full px-6 py-4 lg:h-40 ">
        <div className="mb-2 text-left text-xl font-semibold ">{title}</div>
        <p className="w-full text-base text-gray-200">{description}</p>
      </div>
    </div>
  </Link>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Saksham Kushwaha | lirena00 | Portfolio</title>
        <meta
          name="description"
          content="Saksham Kushwaha (lirena00), a 19-year-old CS undergrad, is a full-stack developer, programmer, and artist passionate about AI, web development, and creative storytelling. A weeb at heart, I enjoy reading manga, watching anime, and working on my own post-apocalyptic story, soon to be published. Explore projects like Odash, Animood, open-source contributions, and unique anime-inspired tools."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000] to-[#15162c] p-5">
        <div className="container flex w-full flex-col gap-5  px-2 py-8 lg:w-3/4">
          <p className="inline text-3xl font-semibold tracking-tight text-white">
            Hi, I&apos;m{" "}
            <span className="inline text-[#cc66ff] ">
              <Typewriter
                options={{
                  strings: ["Lirena", "Saksham Kushwaha"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <p className=" text-lg font-semibold tracking-tighter text-gray-400">
            I&apos;m an 19-year-old student developer with a strong command of
            Python, TypeScript, JavaScript and some C++.
            <br></br>I started my journey in the world of programming seriously
            in 2018, and since then I have been learning and developing my
            skills. I am currently working on a few projects, including a
            Discord bot, a website, and a few other things.
            <br></br>
            In free time I like drawing, writing, and immersing myself in the
            world of anime and manga and for some reasons almost every project
            of mine revovles around anime and manga.
          </p>

          <p className="text-3xl font-semibold  text-white">Projects</p>

          <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
          <p className="text-3xl font-semibold  text-white">Tech Stack</p>

          <div className="mb-10 grid   grid-cols-3 gap-2 md:flex md:flex-wrap">
            <div className="group flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-yellow-300/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypePython0"
                    x1="-133.268"
                    x2="-133.198"
                    y1="-202.91"
                    y2="-202.84"
                    gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#387eb8"></stop>
                    <stop offset="1" stopColor="#366994"></stop>
                  </linearGradient>
                  <linearGradient
                    id="vscodeIconsFileTypePython1"
                    x1="-133.575"
                    x2="-133.495"
                    y1="-203.203"
                    y2="-203.133"
                    gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffe052"></stop>
                    <stop offset="1" stopColor="#ffc331"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#vscodeIconsFileTypePython0)"
                  d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
                ></path>
                <path
                  fill="url(#vscodeIconsFileTypePython1)"
                  d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214h.03Z"
                ></path>
              </svg>
            </div>
            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-blue-700/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 256 288"
              >
                <path
                  fill="#649AD2"
                  d="M255.987 84.59c-.002-4.837-1.037-9.112-3.13-12.781c-2.054-3.608-5.133-6.632-9.261-9.023c-34.08-19.651-68.195-39.242-102.264-58.913c-9.185-5.303-18.09-5.11-27.208.27c-13.565 8-81.48 46.91-101.719 58.632C4.071 67.6.015 74.984.013 84.58C0 124.101.013 163.62 0 203.141c0 4.73.993 8.923 2.993 12.537c2.056 3.717 5.177 6.824 9.401 9.269c20.24 11.722 88.164 50.63 101.726 58.631c9.121 5.382 18.027 5.575 27.215.27c34.07-19.672 68.186-39.262 102.272-58.913c4.224-2.444 7.345-5.553 9.401-9.267c1.997-3.614 2.992-7.806 2.992-12.539c0 0 0-79.018-.013-118.539"
                ></path>
                <path
                  fill="#004482"
                  d="m128.392 143.476l-125.4 72.202c2.057 3.717 5.178 6.824 9.402 9.269c20.24 11.722 88.164 50.63 101.726 58.631c9.121 5.382 18.027 5.575 27.215.27c34.07-19.672 68.186-39.262 102.272-58.913c4.224-2.444 7.345-5.553 9.401-9.267z"
                ></path>
                <path
                  fill="#1A4674"
                  d="M91.25 164.863c7.297 12.738 21.014 21.33 36.75 21.33c15.833 0 29.628-8.7 36.888-21.576l-36.496-21.141z"
                ></path>
                <path
                  fill="#01589C"
                  d="M255.987 84.59c-.002-4.837-1.037-9.112-3.13-12.781l-124.465 71.667l124.616 72.192c1.997-3.614 2.99-7.806 2.992-12.539c0 0 0-79.018-.013-118.539"
                ></path>
                <path
                  fill="#FFF"
                  d="M249.135 148.636h-9.738v9.74h-9.74v-9.74h-9.737V138.9h9.737v-9.738h9.74v9.738h9.738zM128 58.847c31.135 0 58.358 16.74 73.17 41.709l.444.759l-37.001 21.307c-7.333-12.609-20.978-21.094-36.613-21.094c-23.38 0-42.333 18.953-42.333 42.332a42.13 42.13 0 0 0 5.583 21.003c7.297 12.738 21.014 21.33 36.75 21.33c15.659 0 29.325-8.51 36.647-21.153l.241-.423l36.947 21.406c-14.65 25.597-42.228 42.851-73.835 42.851c-31.549 0-59.084-17.185-73.754-42.707c-7.162-12.459-11.26-26.904-11.26-42.307c0-46.95 38.061-85.013 85.014-85.013m75.865 70.314v9.738h9.737v9.737h-9.737v9.74h-9.738v-9.74h-9.738V138.9h9.738v-9.738z"
                ></path>
              </svg>
            </div>
            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-blue-800/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <rect
                  width="28"
                  height="28"
                  x="2"
                  y="2"
                  fill="#3178c6"
                  rx="1.312"
                ></rect>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
                ></path>
              </svg>
            </div>

            <div className=" flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-yellow-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path fill="#f5de19" d="M2 2h28v28H2z"></path>
                <path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-sky-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"></circle>
                <path
                  fill="#00d8ff"
                  d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
                ></path>
                <path
                  fill="#00d8ff"
                  d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
                ></path>
                <path
                  fill="#00d8ff"
                  d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-gray-800/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path d="M29.874 13.964A14.058 14.058 0 0 0 20.3 2.653a14.74 14.74 0 0 0-2.915-.61c-.263-.027-2.072-.057-2.3-.035c-.06 0-.252.024-.424.038A14.034 14.034 0 0 0 4.6 7.848a13.855 13.855 0 0 0-2.471 6.116A10.731 10.731 0 0 0 2 16a10.737 10.737 0 0 0 .126 2.039A14.055 14.055 0 0 0 11.7 29.352a14.772 14.772 0 0 0 2.956.613a25.525 25.525 0 0 0 2.682 0a14.139 14.139 0 0 0 5.045-1.475c.24-.123.287-.156.254-.183s-1.048-1.393-2.28-3.057l-2.239-3.024l-2.8-4.152c-1.544-2.282-2.814-4.148-2.825-4.148s-.022 1.841-.027 4.094a32.213 32.213 0 0 1-.06 4.2a.5.5 0 0 1-.241.249c-.088.044-.165.052-.578.052h-.473l-.126-.079a.517.517 0 0 1-.184-.2l-.057-.123l.005-5.487l.009-5.49l.084-.107a.768.768 0 0 1 .2-.167c.112-.054.156-.06.629-.06c.559 0 .652.022.8.181c.041.044 1.56 2.331 3.377 5.087s4.3 6.519 5.524 8.366L23.59 27.8l.112-.074a14.357 14.357 0 0 0 2.877-2.526a13.932 13.932 0 0 0 3.295-7.156A10.737 10.737 0 0 0 30 16a10.731 10.731 0 0 0-.126-2.036Zm-8.761 1.855l-.008 4.921l-.868-1.33l-.87-1.33V14.5c0-2.312.011-3.612.027-3.675a.558.558 0 0 1 .271-.345c.112-.058.153-.063.583-.063c.4 0 .476.005.566.055a.546.546 0 0 1 .277.323c.022.074.027 1.595.022 5.024Z"></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-teal-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#44a8b3"
                  d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-green-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <defs>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo0"
                    x1="-645.732"
                    x2="-654.59"
                    y1="839.188"
                    y2="839.25"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".231" stopColor="#999875"></stop>
                    <stop offset=".563" stopColor="#9b9977"></stop>
                    <stop offset=".683" stopColor="#a09f7e"></stop>
                    <stop offset=".768" stopColor="#a9a889"></stop>
                    <stop offset=".837" stopColor="#b7b69a"></stop>
                    <stop offset=".896" stopColor="#c9c7b0"></stop>
                    <stop offset=".948" stopColor="#deddcb"></stop>
                    <stop offset=".994" stopColor="#f8f6eb"></stop>
                    <stop offset="1" stopColor="#fbf9ef"></stop>
                  </linearGradient>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo1"
                    x1="-644.287"
                    x2="-657.028"
                    y1="823.405"
                    y2="845.476"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#48a547"></stop>
                    <stop offset="1" stopColor="#3f9143"></stop>
                  </linearGradient>
                  <linearGradient
                    id="vscodeIconsFileTypeMongo2"
                    x1="-643.386"
                    x2="-652.418"
                    y1="839.485"
                    y2="833.417"
                    gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#41a247"></stop>
                    <stop offset=".352" stopColor="#4ba74b"></stop>
                    <stop offset=".956" stopColor="#67b554"></stop>
                    <stop offset="1" stopColor="#69b655"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#vscodeIconsFileTypeMongo0)"
                  d="m16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 0 0-1.333 1.523A14.1 14.1 0 0 0 16.62 30Z"
                ></path>
                <path
                  fill="url(#vscodeIconsFileTypeMongo1)"
                  d="M17.026 26.329a13.223 13.223 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187Z"
                ></path>
                <path
                  fill="url(#vscodeIconsFileTypeMongo2)"
                  d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.725 1.725 0 0 0 15.846 2c.381.82.319 12.243.359 13.579c.155 5.197-.289 10.009-.718 10.99Z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-blue-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path d="M29.507 18.773a1.378 1.378 0 0 0-1.144-.921a2.619 2.619 0 0 0-.913.051a8.2 8.2 0 0 1-1.406.185a27.125 27.125 0 0 0 2.872-6.83c.953-3.689.444-5.369-.151-6.13A8.239 8.239 0 0 0 22.121 2a11.773 11.773 0 0 0-3.453.484a12.858 12.858 0 0 0-2.02-.184a6.565 6.565 0 0 0-3.518.867a16.039 16.039 0 0 0-2.484-.624a7.694 7.694 0 0 0-5.819.924C3.093 4.691 2.289 6.819 2.438 9.792a36.351 36.351 0 0 0 1.406 6.538a22.579 22.579 0 0 0 1.514 3.863A4.786 4.786 0 0 0 7.8 22.742a2.4 2.4 0 0 0 2.379-.516a2.08 2.08 0 0 0 .5.43a3.328 3.328 0 0 0 .944.4a5.069 5.069 0 0 0 3.3-.2c.006.171.011.335.014.477c.006.229.013.454.021.665a11.641 11.641 0 0 0 .441 3.3c.016.043.037.107.059.176a3.975 3.975 0 0 0 .991 1.745a2.955 2.955 0 0 0 2.09.777a4.7 4.7 0 0 0 .977-.109a4.592 4.592 0 0 0 3.091-1.787c.811-1.155 1.206-2.894 1.277-5.635l.026-.222l.017-.145l.191.017h.049a7.562 7.562 0 0 0 3.163-.548c.631-.293 2.654-1.361 2.177-2.8"></path>
                <path
                  fill="#336791"
                  d="M27.689 19.053c-3.163.652-3.38-.418-3.38-.418c3.339-4.955 4.735-11.245 3.53-12.784c-3.286-4.2-8.975-2.213-9.07-2.162l-.031.006a11.28 11.28 0 0 0-2.11-.22a5.212 5.212 0 0 0-3.34 1S3.14.294 3.612 9.733c.1 2.008 2.878 15.194 6.191 11.211c1.211-1.456 2.381-2.688 2.381-2.688a3.071 3.071 0 0 0 2.006.512l.057-.048a2.21 2.21 0 0 0 .023.567c-.854.954-.6 1.121-2.309 1.472c-1.726.356-.712.989-.05 1.155a3.508 3.508 0 0 0 3.915-1.272l-.05.2c.334.268.569 1.742.53 3.079a8.481 8.481 0 0 0 .2 2.971c.264.717.526 2.329 2.769 1.849a3.307 3.307 0 0 0 2.98-3.179c.1-1.234.313-1.052.326-2.155l.174-.522c.2-1.673.032-2.213 1.186-1.962l.281.025a6.4 6.4 0 0 0 2.615-.44c1.406-.652 2.239-1.742.853-1.455"
                ></path>
                <path
                  fill="#fff"
                  d="M13.882 10.631a.981.981 0 0 0-.674.1a.247.247 0 0 0-.1.164a.48.48 0 0 0 .117.314a.881.881 0 0 0 .559.349a.637.637 0 0 0 .09.006a.725.725 0 0 0 .687-.467c.035-.248-.326-.414-.676-.463m9.442.008c-.027-.195-.374-.25-.7-.2s-.647.194-.62.389a.667.667 0 0 0 .62.411a.592.592 0 0 0 .083-.006a.8.8 0 0 0 .451-.247a.5.5 0 0 0 .169-.343"
                ></path>
                <path
                  fill="#fff"
                  d="M28.741 18.979c-.121-.365-.509-.482-1.154-.349c-1.915.4-2.6.121-2.826-.044a26.327 26.327 0 0 0 3.373-7.565a14.374 14.374 0 0 0 .5-3.253a3.513 3.513 0 0 0-.509-2.2a7.482 7.482 0 0 0-6.049-2.825a10.363 10.363 0 0 0-3.5.551a8.717 8.717 0 0 0-1.968-.253a5.684 5.684 0 0 0-3.372.929a15.051 15.051 0 0 0-2.74-.718a6.978 6.978 0 0 0-5.242.805c-1.5 1.064-2.2 2.966-2.061 5.653a35.489 35.489 0 0 0 1.373 6.348c1.07 3.505 2.233 5.49 3.457 5.9a1.548 1.548 0 0 0 .491.081a2.049 2.049 0 0 0 1.563-.886q1.042-1.25 2.155-2.438a3.472 3.472 0 0 0 1.55.417v.042q-.14.166-.273.338c-.375.475-.452.574-1.658.823c-.343.071-1.254.259-1.267.9c-.014.7 1.077.991 1.2 1.022a5.144 5.144 0 0 0 1.249.162a3.634 3.634 0 0 0 2.5-.934a23.674 23.674 0 0 0 .381 5.684a2.854 2.854 0 0 0 2.729 2.1a4.378 4.378 0 0 0 .917-.1a3.462 3.462 0 0 0 3.156-3.212c.177-1.026.481-3.475.624-4.789a3.859 3.859 0 0 0 1.11.137a6.6 6.6 0 0 0 2.519-.48c.712-.331 2-1.141 1.763-1.846Zm-4.69-8.879a7.968 7.968 0 0 1-.116 1.107a10.229 10.229 0 0 0-.14 1.3a9.859 9.859 0 0 0 .1 1.47a5.236 5.236 0 0 1-.229 2.986a3.882 3.882 0 0 1-.207-.426c-.058-.141-.185-.368-.359-.681c-.68-1.22-2.274-4.078-1.458-5.244c.243-.347.86-.7 2.408-.512Zm-1.877-6.569a6.617 6.617 0 0 1 5.334 2.522c.975 1.245-.1 6.912-3.205 11.8l-.094-.119l-.039-.049a5.524 5.524 0 0 0 .506-3.8a9.114 9.114 0 0 1-.1-1.352a9.572 9.572 0 0 1 .131-1.206a7.614 7.614 0 0 0 .123-1.493a.619.619 0 0 0 .013-.21a8.381 8.381 0 0 0-1.912-3.6a8.61 8.61 0 0 0-3.039-2.284a10.246 10.246 0 0 1 2.28-.214ZM9.479 20.654c-.627.754-1.061.61-1.2.562c-.928-.31-2.006-2.272-2.955-5.384a35.167 35.167 0 0 1-1.34-6.159c-.12-2.4.462-4.074 1.73-4.974c2.063-1.463 5.456-.587 6.819-.143c-.02.019-.04.037-.059.057c-2.237 2.259-2.184 6.119-2.178 6.355c0 .091.007.22.018.4a15.969 15.969 0 0 1-.081 3.226a4.08 4.08 0 0 0 1.067 3.413q.133.138.278.262a55.7 55.7 0 0 0-2.1 2.385Zm2.39-3.19a3.3 3.3 0 0 1-.865-2.764a16.7 16.7 0 0 0 .087-3.381a15.422 15.422 0 0 1-.014-.243A4.3 4.3 0 0 1 14 10.223a1.188 1.188 0 0 1 .918 1.026c.646 2.989.085 4.234-.365 5.235c-.093.206-.181.4-.255.6l-.058.156a10.218 10.218 0 0 0-.368 1.109a2.788 2.788 0 0 1-2-.887Zm.113 4.03a1.733 1.733 0 0 1-.523-.225a2.553 2.553 0 0 1 .557-.166c1.418-.292 1.637-.5 2.116-1.105c.11-.139.234-.3.406-.489c.256-.287.374-.238.586-.15a.829.829 0 0 1 .408.525a.585.585 0 0 1-.05.491a3.1 3.1 0 0 1-3.499 1.12Zm7.424 6.906a2.113 2.113 0 0 1-2.754-1.526a31.129 31.129 0 0 1-.3-6.853a.392.392 0 0 0-.017-.124a1.643 1.643 0 0 0-.048-.23a1.589 1.589 0 0 0-.862-1.034a1.216 1.216 0 0 0-.793-.1a9.586 9.586 0 0 1 .342-1.022l.058-.157c.066-.177.148-.36.235-.554c.471-1.047 1.117-2.482.416-5.722a2.044 2.044 0 0 0-2.468-1.669a5.694 5.694 0 0 0-1.887.591c-.078.04-.15.078-.216.115a8.244 8.244 0 0 1 1.918-4.952a4.711 4.711 0 0 1 3.57-1.336a7.567 7.567 0 0 1 5.781 2.763a8.774 8.774 0 0 1 1.582 2.71c-1.463-.149-2.458.14-2.962.861c-1.1 1.568.6 4.612 1.416 6.075c.15.268.279.5.319.6a5.432 5.432 0 0 0 .861 1.387c.077.1.152.189.208.271c-.443.128-1.239.423-1.166 1.9c-.058.74-.474 4.205-.686 5.43c-.279 1.617-.874 2.22-2.548 2.579Zm7.242-8.288a5.714 5.714 0 0 1-1.931.4a2.422 2.422 0 0 1-1.3-.167c-.045-.919.3-1.015.66-1.117c.057-.016.112-.032.166-.05a1.353 1.353 0 0 0 .11.08c.639.422 1.78.467 3.39.135h.018a4.334 4.334 0 0 1-1.116.72Z"
                ></path>
              </svg>
            </div>

            <div className="group relative flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-orange-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#dd4c35"
                  d="M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"
                ></path>
                <path
                  fill="#fff"
                  d="m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"
                ></path>
              </svg>
              <div className="pointer-events-none absolute  -top-2 left-1/2 w-full -translate-x-1/2 -translate-y-full transform rounded bg-black px-2 py-1.5 text-center text-xs  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Git
              </div>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-teal-600/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#049688"
                  d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 0 0-2.375-.5a36.042 36.042 0 0 1-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563c-2.875-1.172-8.172-3.91-9.984-5.156c-.496-.344-.96-.621-1.031-.621c-.07 0-1.23-.816-2.578-1.813c-8.57-6.343-15.004-14.043-19.653-23.527c-.8-1.629-1.453-3.074-1.453-3.21c0-.134-.144-.505-.32-.817c-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 0 0-.625-1.813c-.195-.46-.352-1.02-.352-1.246c0-.227-.195-.965-.433-1.645c-.238-.675-.43-1.472-.43-1.77c0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894c.23-.957.418-2 .418-2.32c0-.321.145-.95.32-1.4c.18-.448.41-1.253.516-1.788c.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813c.11-.238.539-1.21.957-2.16c.676-1.535 2.125-4.43 2.972-5.945c.309-.555.426-.739 2.098-3.352c2.649-4.148 7.176-9.309 11.39-12.988c1.485-1.297 6.446-5.063 6.669-5.063c.062 0 .53-.281 1.043-.625c1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 0 0 1.836-.953c.285-.164.82-.41 3.567-1.64c.605-.27 1.257-.516 3.136-1.173c.414-.144 1.246-.449 1.84-.672c.598-.222 1.301-.406 1.563-.406c.258 0 .937-.18 1.508-.402c.57-.223 1.605-.477 2.304-.563c.696-.082 1.621-.277 2.055-.43c.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 0 0 3.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 0 0 3.781.445c.953.079 2.168.278 2.703.442c.535.16 1.461.36 2.055.433c.594.079 1.594.325 2.222.551c.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625c.594.18 1.613.535 2.27.797c.652.261 1.527.605 1.945.761c.77.29 6.46 3.137 7.234 3.622c6.281 3.917 9.512 6.476 13.856 10.964c5.238 5.414 8.715 10.57 12.254 18.16c.25.536.632 1.329.851 1.758c.215.434.395.942.395 1.13c0 .19.18.76.402 1.269c.602 1.383 1.117 2.957 1.36 4.16c.12.59.343 1.32.495 1.621c.153.3.332 1.063.403 1.688c.07.624.277 1.648.453 2.269c1.02 3.531 1.527 13.934.91 18.535c-.183 1.367-.39 3.02-.46 3.672c-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809c-1.172 2.07-5.101 7.668-5.843 8.324c-.067.058-.399.45-.735.863c-.336.418-1.414 1.586-2.39 2.594c-4.301 4.441-7.77 7.187-13.86 10.969c-.722.449-6.847 3.441-7.992 3.906c-.594.238-1.586.64-2.203.89c-.613.247-1.297.454-1.512.458c-.215.003-.781.195-1.258.425c-.476.23-1.082.422-1.351.426c-.266.004-1.043.192-1.727.418c-.683.23-1.633.477-2.11.55c-.476.075-1.495.278-2.269.45c-.773.172-3.11.508-5.187.746a59.06 59.06 0 0 1-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027c.18-.723 29.234-58.97 29.781-59.7c.461-.617.504-1.605.082-1.953c-.222-.187-3.004-.246-10.43-.234c-5.57.012-10.253.016-10.406.012c-.226-.008-.273-3.73-.25-19.672c.016-10.817-.035-19.766-.113-19.89c-.078-.126-.383-.227-.68-.227c-.418 0-.613.18-.87.808c-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 0 0-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 0 0-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039c-.41.496-.633 1.64-.402 2.07c.21.394.629.41 11.043.394c5.953-.007 10.863.024 10.914.07c.137.141.086 37.31-.055 38.196c-.093.582-.031.89.235 1.156c.46.461.586.457 1.25-.066zm0 0"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-green-300/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 128 128"
              >
                <defs>
                  <linearGradient
                    id="deviconSupabase0"
                    x1="53.974"
                    x2="94.163"
                    y1="54.974"
                    y2="71.829"
                    gradientTransform="translate(29.387 60.096)scale(1.1436)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#249361"></stop>
                    <stop offset="1" stopColor="#3ecf8e"></stop>
                  </linearGradient>
                  <linearGradient
                    id="deviconSupabase1"
                    x1="36.156"
                    x2="54.484"
                    y1="30.578"
                    y2="65.081"
                    gradientTransform="translate(29.387 60.096)scale(1.1436)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0"></stop>
                    <stop offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#deviconSupabase0)"
                  d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                  transform="translate(-27.722 -60.338)"
                ></path>
                <path
                  fill="url(#deviconSupabase1)"
                  fillOpacity=".2"
                  d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                  transform="translate(-27.722 -60.338)"
                ></path>
                <path
                  fill="#3ecf8e"
                  d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-gray-300/40  from-5% to-gray-800  to-100% p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#d2d2d2"
                  fillRule="evenodd"
                  d="m25.21 24.21l-12.471 3.718a.525.525 0 0 1-.667-.606l4.456-21.511a.43.43 0 0 1 .809-.094l8.249 17.661a.6.6 0 0 1-.376.832m2.139-.878L17.8 2.883A1.531 1.531 0 0 0 16.491 2a1.513 1.513 0 0 0-1.4.729L4.736 19.648a1.592 1.592 0 0 0 .018 1.7l5.064 7.909a1.628 1.628 0 0 0 1.83.678l14.7-4.383a1.6 1.6 0 0 0 1-2.218Z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-green-600/50  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 256 384"
              >
                <path
                  fill="#0ACF83"
                  d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"
                ></path>
                <path
                  fill="#A259FF"
                  d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"
                ></path>
                <path
                  fill="#F24E1E"
                  d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"
                ></path>
                <path
                  fill="#FF7262"
                  d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"
                ></path>
                <path
                  fill="#1ABCFE"
                  d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-orange-700/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="m64 116.8l36.378-10.086l8.559-95.878H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
                ></path>
              </svg>
            </div>

            <div className="flex h-fit w-fit items-center rounded-lg bg-gradient-to-t  from-blue-500/40  from-5% to-gray-800  to-100% p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
                ></path>
                <path
                  fill="#fff"
                  d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
                ></path>
              </svg>
            </div>
          </div>

          <hr className="bg-gray-400"></hr>
          <div className="flex  items-start justify-between gap-2">
            <div className="">
              <p className="left-0 text-xl font-semibold  text-gray-400">
                Socials
              </p>
            </div>

            <div className="flex gap-2   ">
              <Link href="https://twitter.com/LiReNa00" target="_blank">
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"
                    ></path>
                  </svg>
                </div>
              </Link>

              <Link href="https://leetcode.com/lirena00/" target="_blank">
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                    ></path>
                  </svg>
                </div>
              </Link>

              <Link
                href="https://stackoverflow.com/users/13875145/saksham-kushwaha"
                target="_blank"
              >
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M392 440V320h40v160H64V320h40v120Z"
                    ></path>
                    <path
                      fill="#AAAAAA"
                      d="m149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87Zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84Zm50.95-89l156 127.78l25.74-30.52l-156-127.78ZM328 32l-33.39 23.8l120.82 160.37L448 192ZM144 400h204v-40H144Z"
                    ></path>
                  </svg>
                </div>
              </Link>

              <Link
                href="mailto:sakshamkushwaha12776@gmail.com"
                target="_blank"
              >
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                    ></path>
                  </svg>
                </div>
              </Link>

              <Link href="https://github.com/LiReNa00" target="_blank">
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                    ></path>
                  </svg>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/saksham-kushwaha-67758b295/"
                target="_blank"
              >
                <div className="card2 flex w-fit p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#AAAAAA"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-gray-500"></div>
      </main>
    </>
  );
};

export default Home;

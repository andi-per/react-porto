"use client";

import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import devandi from "../public/devandi2.png";
import devandisleep from "../public/devandisleep.png";
import code from "../public/code.png";
import backend from "../public/backend.png";
import web1 from "../public/web1.jpg";
import andiblog from "../public/andiblog.png";
import promptopia from "../public/promptopia.png";
import simpleWeather from "../public/simple-weather.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => setDarkMode((darkMode) => !darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="transition-colors dark:bg-gray-900 bg-gray-200 px-10 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">AndiPer</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl"
                    style={{ color: "white" }}
                    onClick={changeTheme}
                  />
                ) : (
                  <BsSunFill
                    className="cursor-pointer text-2xl"
                    onClick={changeTheme}
                  />
                )}
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1uInfLX8DHd7MhV_GwcDao2WxR933yHPL/view?usp=sharing"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:shadow-[0_0_10px_theme('colors.teal.500')]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2
              className="text-5xl py-2 text-shadow-lg text-teal-500 text-shadow-md font-medium md:text-6xl dark:text-shadow-lg"
              style={
                darkMode
                  ? {
                      textShadow: "2px 2px 10px rgba(20, 184, 166, 0.5)",
                    }
                  : {}
              }
            >
              Andi Permana
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-zinc-300">
              Bringing your ideas to life with the perfect fusion of Frontend
              creativity and Backend ingenuity.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/andi-per" target="_blank">
              <AiFillGithub
                style={{ color: darkMode ? "white" : "" }}
                className="transition-transform transform hover:scale-125"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCyjUVf4dhB6lSmkatwhXXYg"
              target="_blank"
            >
              <AiFillYoutube
                style={{ color: darkMode ? "white" : "" }}
                className="transition-transform transform hover:scale-125"
              />
            </a>
            <a href="https://www.instagram.com/andi_permn/" target="_blank">
              <AiFillInstagram
                style={{ color: darkMode ? "white" : "" }}
                className="transition-transform transform hover:scale-125"
              />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image
              src={darkMode ? devandisleep : devandi}
              alt="me"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              Skills I&#39;ve learned
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-zinc-300">
              In the ever-evolving landscape of web development, my journey is a
              commitment to continuous learning. Frameworks, libraries, and
              emerging technologies are not just tools but opportunities to
              enhance my craft.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-around">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:hover:shadow-[0_0_20px_theme('colors.teal.200')]">
              <Image src={code} alt="code" className="mx-auto" />
              <h3 className="text-lg font-burtons font-medium pt-8 pb-2">
                FRONTEND
              </h3>
              <p className="py-2">
                Transforming Ideas into Interactive Realities.
              </p>
              <h4 className="py-4 text-teal-600">Frontend tech stack :</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Vue</p>
              <p className="text-gray-800 py-1">Svelte</p>
              <p className="text-gray-800 py-1">Javascript/Typescript</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Bootstrap CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:hover:shadow-[0_0_20px_theme('colors.teal.200')]">
              <Image
                src={backend}
                alt="backend"
                height={201}
                className="mx-auto"
              />
              <h3 className="text-lg font-burtons font-medium pt-8 pb-2">
                BACKEND
              </h3>
              <p className="py-2">Commanding Servers, Directing Databases.</p>
              <h4 className="py-4 text-teal-600">Backend tech stack :</h4>
              <p className="text-gray-800 py-1">REST API</p>
              <p className="text-gray-800 py-1">Express JS</p>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">Javascript/Typescript</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">Go</p>
              <p className="text-gray-800 py-1">Postgresql</p>
              <p className="text-gray-800 py-1">Mysql</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Ideas to life</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-zinc-300">
              Here&#39;s a glimpse of the projects that I&#39;ve had the
              pleasure of working on...
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              {/* https://nextjs-14-blog-ecru.vercel.app/ */}
              <a
                href="https://nextjs-14-blog-ecru.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={andiblog}
                  alt="project_1"
                  className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.blue.300')]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              {/* https://nextjs-ideas-sharing.vercel.app/ */}
              <a
                href="https://nextjs-ideas-sharing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={promptopia}
                  alt="project_2"
                  className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.blue.300')]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              {/* https://next-simple-weather.vercel.app/ */}
              <a
                href="https://next-simple-weather.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={simpleWeather}
                  alt="project_3"
                  className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.green.300')]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="project_4"
                className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.green.300')]"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="project_5"
                className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.orange.300')]"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="project_6"
                className="rounded-lg object-cover dark:hover:shadow-[0_0_20px_theme('colors.orange.300')]"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import ProjectCard from './projectCard';

export default function Home() {
  return (
    <div>
      <head>
        <title >Ibrahim Khalid</title>
      </head>

      <main className='bg-black text-white px-10'>
        <nav className='py-10 mb-12 flex justify-between sticky top-0'>
          <h1  className='text-3xl font-semibold'>Ibrahim</h1>
          <ul className='flex items-center space-x-6'>
            <li>
              <a className='cursor-pointer text-xl hover:text-teal-300 hover-glow' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='cursor-pointer text-xl hover:text-teal-300 hover-glow' href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className='cursor-pointer text-xl hover:text-teal-300 hover-glow' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section id='about' className='min-h-screen py-20 bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-5xl py-2 text-teal-300 font-semibold'>Ibrahim AlShaikhli</h2>
            <h3 className='text-2xl py-2'>Software Engineer and Flutter Developer</h3>
            <p className='text-lg py-5 leading-7'>
              Hey there, I'm Ibrahim, a software engineer who's found a unique blend of passions.
              By day, I'm immersed in Flutter development, crafting mobile apps that bridge imagination and functionality.
              When I'm not coding, you'll catch me at the gym, pursuing strength and balance.
              My journey into coding led me to Flutter, where creativity meets technology.
            </p>
          </div>


          <div className='relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image
              src='/dev-ed-wave.png'
              alt='Dev Ed Wave'
              width={500}
              height={500}
              className='object-cover w-full h-full'
            />
          </div>
        </section>

        <section id='projects' className='py-20'>
          <div className='max-w-3xl mx-auto'>
            <h3 className='text-3xl py-1 font-semibold'>My Work</h3>
            <p className='text-lg py-2 leading-7'>
              Projects.
            </p>

            <div className="flex flex-wrap justify-between">
              <ProjectCard
                title="Project 1"
                description="This is the description for Project 1. Replace it with your actual project details."
                thumbnailSrc="/web1.png" // Replace with actual image path
                githubLink={"https://github.com/Marton-Zeisler/Voluny"}
              />
              <ProjectCard
                title="Project 2"
                description="This is the description for Project 2. Replace it with your actual project details."
                thumbnailSrc="/web3.png" // Replace with actual image path
              />
            </div>
          </div>
        </section>


        <section id='contact' className='bg-gray-900 py-20'>
          <div className='text-center max-w-3xl mx-auto'>
            <h3 className='text-3xl py-1 font-semibold'>Contact</h3>
            <p className='text-lg py-2 leading-7'>
              Feel free to reach out for any inquries.
            </p>
          </div>
          <div className='text-4xl flex justify-center gap-6 py-3 text-gray-300 transform hover:scale-110 transition-transform'>
            <a href='https://www.linkedin.com/in/ibrahim-khalid-8b5692176/' target='_blank' rel='noopener noreferrer'>
              <AiFillLinkedin className='hover:text-teal-300' />
            </a>
            <a href='https://github.com/IbrahimShaikhli/' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub className='hover:text-teal-300' />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

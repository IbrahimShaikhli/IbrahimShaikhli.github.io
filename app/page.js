import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import devEdWaveImage from '../public/dev-ed-wave.png';

export default function Home() {
  return (
    <div>
      <head>
        <title>Ibrahim Khalid</title>
      </head>

      <main className=' bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text- xl font-burtons'>DevelopedbyIbrahim</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-xl' />
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Ibrahim AlShaikhli
            </h2>
            <h3 className='text-2xl py-2'>Software Engineer and Flutter Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Hey there, I'm Ibrahim, a software engineer who's found a unique blend of passions. By day, I'm immersed in Flutter development, crafting mobile apps that bridge imagination and functionality. When I'm not coding, you'll catch me at the gym, pursuing strength and balance. My journey into coding led me to Flutter, where creativity meets technology.</p>
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </div>
  )
}


import Link from 'next/link'
import React from 'react'
import { navLinks } from '../../../constants'
import Image from 'next/image'
import { getAllImages } from '@/lib/actions/image.actions'
import { Collection } from '../components/shared/Collection'
const Home = async ({ searchParams}:SearchParamProps) => {
  const page=Number(searchParams?.page)||1;
  const searchQuery=(searchParams?.query as string)||'';
  
  const images=await getAllImages({page,searchQuery});
  return (
    <>
    <section className='home'>
      <h1 className='home-heading'>
        Unleash Your Creative Vision  With Imaginify
      </h1>
      <ul className='flex-center w-full gap-20'>
        {navLinks.slice(1,5).map((link)=>(
          <Link
          key={link.route}
          href={link.route}
          className='flex-center flex-col gap-2'
          >
            <li>
              <Image src={link.icon} alt="image" width={24} height={24}/>
            </li>
            <p className='p-14-medium text-center tetx-white'>{link.label}</p>
          </Link>
        ))}
      </ul>
    </section>
<Collection
hasSearch={true}
images={images?.data}
totalPages={images?.totalPage}
page={page}
/>
    <section className='sm:mt-12'>

    </section>
    </>
  )
}

export default Home
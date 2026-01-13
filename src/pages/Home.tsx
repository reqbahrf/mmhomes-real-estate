import { RiHotelBedLine, RiDropLine } from '@remixicon/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import profile from '@/assets/profile.webp';
import the_ridge from '@/assets/compliance/the_ridge.png';
import equal_housing from '@/assets/compliance/equal_housing.png';
import realtor from '@/assets/compliance/realtor.jpg';
import pahrump from '@/assets/compliance/pahrump.jpg';
import featured_property from '@/assets/house3.jpg';

export default function Home() {
  return (
    <>
      <section
        id='hero'
        className='flex min-h-[90dvh] w-full flex-col bg-gray-50 font-sans lg:flex-row'
      >
        {/* Left Content Side */}
        <div className='flex w-full flex-col justify-center px-8 py-12 md:px-16 lg:w-1/2 lg:px-24'>
          {/* Profile Tag */}
          <div className='mb-8 flex items-center gap-4'>
            <LazyLoadImage
              effect='blur'
              src={profile}
              alt='MARCI METZGER'
              className='h-16 w-16 rounded-full border-2 border-gray-100 object-cover'
            />
            <div>
              <h3 className='text-sm font-bold tracking-wide text-blue-600 uppercase'>
                Marci Metzger
              </h3>
              <p className='text-sm text-gray-500'>Senior Realtor</p>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className='mb-6 text-5xl leading-tight font-extrabold text-slate-900 md:text-7xl'>
            Elevating Your <br />
            <span className='text-blue-600'>Lifestyle</span>
          </h1>

          <p className='mb-10 max-w-md text-lg leading-relaxed text-gray-600'>
            Experience a curated approach to buying and selling premier
            properties. We combine market intelligence with an exclusive network
            to find your perfect home.
          </p>

          {/* Action Buttons */}
          <div className='mb-16 flex flex-wrap gap-4'>
            <button className='rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700'>
              Work with me
            </button>
            <button className='rounded-lg border border-gray-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:bg-gray-50'>
              View Listings
            </button>
          </div>

          {/* Stats Section */}
          <div className='flex gap-12 border-t border-gray-100 pt-8'>
            <div>
              <p className='text-2xl font-bold text-slate-900'>$250M+</p>
              <p className='text-sm text-gray-500'>Sales Volume</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-slate-900'>15+</p>
              <p className='text-sm text-gray-500'>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className='relative h-[500px] w-full lg:h-auto lg:w-1/2'>
          <img
            src={featured_property}
            alt='Featured Property'
            className='h-full w-full object-cover'
          />

          {/* Property Overlay Card */}
          <div className='absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-8 text-white'>
            <p className='mb-2 text-xs font-medium tracking-[0.2em] text-gray-200 uppercase'>
              Featured Property
            </p>
            <h2 className='mb-4 text-2xl font-bold'>
              The Highland Estate, Beverly Hills
            </h2>
            <div className='flex gap-6 text-sm'>
              <div className='flex items-center gap-2'>
                <RiHotelBedLine size={18} className='text-gray-300' />
                <span>4 Beds</span>
              </div>
              <div className='flex items-center gap-2'>
                <RiDropLine size={18} className='text-gray-300' />
                <span>3 Baths</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='properties' className='bg-gray-50'></section>
      <section id='market-stats' className='bg-gray-50'></section>
      <section id='compliance-and-memberships' className='bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>
              Professional Affiliations & Compliance
            </h2>
            <p className='mx-auto max-w-2xl text-gray-600'>
              Proudly maintaining the highest standards of professional ethics
              and industry compliance through our trusted partnerships.
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12'>
            <LazyLoadImage
              src={the_ridge}
              alt='The Ridge'
              effect='blur'
              className='h-16 w-auto object-contain opacity-70 grayscale filter transition-all duration-300 hover:opacity-100 hover:grayscale-0'
            />

            <LazyLoadImage
              src={equal_housing}
              alt='Equal Housing Opportunity'
              effect='blur'
              className='h-20 w-auto object-contain opacity-70 grayscale filter transition-all duration-300 hover:opacity-100 hover:grayscale-0'
            />

            <LazyLoadImage
              src={realtor}
              alt='Realtor'
              effect='blur'
              className='h-16 w-auto object-contain opacity-70 grayscale filter transition-all duration-300 hover:opacity-100 hover:grayscale-0'
            />

            <LazyLoadImage
              src={pahrump}
              alt='Pahrump'
              effect='blur'
              className='h-16 w-auto object-contain opacity-70 grayscale filter transition-all duration-300 hover:opacity-100 hover:grayscale-0'
            />
          </div>
        </div>
      </section>
    </>
  );
}

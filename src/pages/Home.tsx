import {
  RiHotelBedLine,
  RiDropLine,
  RiSearchLine,
  RiExchangeLine,
  RiBarChart2Line,
  RiArrowRightLine,
  RiHomeLine,
  RiTimerLine,
  RiSpeedLine,
  RiDownloadLine,
} from '@remixicon/react';
import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoadingSkeleton from '@/components/common/LoadingSkeleton';
import profile from '@/assets/profile.webp';
import the_ridge from '@/assets/compliance/the_ridge.webp';
import equal_housing from '@/assets/compliance/equal_housing.webp';
import realtor from '@/assets/compliance/realtor.webp';
import pahrump from '@/assets/compliance/pahrump.webp';
import featured_property from '@/assets/house3.webp';
const PropertyCard = lazy(() => import('@/components/PropertyCard'));
import ServiceCard from '@/components/ServiceCard';
const TestimonialSection = lazy(
  () => import('@/components/layout/TestimonialSection'),
);
import MarketStatCard from '@/components/MarketStatCard';
import ShowcaseCard from '@/components/ShowcaseCard';

import { servicesDummy } from '@/data/servicesDummy';
import { propertiesDummy } from '@/data/propertiesDummy';
import { marketStatsDummy } from '@/data/marketStatsDummy';
import { showcaseDummy } from '@/data/showcaseDummy';

const serviceIconMap = {
  RiSearchLine: <RiSearchLine />,
  RiExchangeLine: <RiExchangeLine />,
  RiBarChart2Line: <RiBarChart2Line />,
};

const marketIconMap = {
  RiHomeLine: <RiHomeLine />,
  RiTimerLine: <RiTimerLine />,
  RiSpeedLine: <RiSpeedLine />,
};

export default function Home() {
  return (
    <>
      <section
        id='hero'
        className='flex min-h-[90dvh] w-full flex-col border-t border-gray-50 bg-white font-sans lg:flex-row dark:border-gray-800 dark:bg-[#111921]'
      >
        {/* Left Content Side */}
        <div className='flex w-full flex-col justify-center px-8 py-12 md:px-16 lg:w-1/2 lg:px-24'>
          {/* Profile Tag */}
          <div className='mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start'>
            <LazyLoadImage
              effect='blur'
              src={profile}
              alt='MARCI METZGER'
              className='h-16 w-16 rounded-full border-2 border-gray-100 object-cover md:h-20 md:w-20 lg:h-24 lg:w-24'
            />
            <div>
              <h3 className='text-sm font-bold tracking-wide text-blue-600 uppercase md:text-base lg:text-lg'>
                Marci Metzger
              </h3>
              <p className='text-center text-sm text-gray-500 md:text-base lg:text-lg dark:text-gray-400'>
                Senior Realtor
              </p>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className='mb-6 text-5xl leading-tight font-extrabold text-slate-900 md:text-7xl dark:text-white'>
            Elevating Your <br />
            <span className='text-blue-600'>Lifestyle</span>
          </h1>

          <p className='mb-10 max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
            Experience a curated approach to buying and selling premier
            properties. We combine market intelligence with an exclusive network
            to find your perfect home.
          </p>

          {/* Action Buttons */}
          <div className='mb-16 flex flex-wrap gap-4'>
            <button className='rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 dark:bg-blue-500 dark:shadow-blue-900/20 dark:hover:bg-blue-600'>
              Work with me
            </button>
            <button className='rounded-lg border border-gray-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'>
              View Listings
            </button>
          </div>

          {/* Stats Section */}
          <div className='flex gap-12 border-t border-gray-100 pt-8'>
            <div>
              <p className='text-2xl font-bold text-slate-900 dark:text-white'>
                $250M+
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Sales Volume
              </p>
            </div>
            <div>
              <p className='text-2xl font-bold text-slate-900 dark:text-white'>
                15+
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Years Experience
              </p>
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
      <section
        id='properties'
        className='border-t border-gray-50 bg-white px-6 py-24 lg:px-40 dark:border-gray-800 dark:bg-[#111921]'
      >
        <div className='mx-auto max-w-7xl px-6 pt-12'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white'>
            Exclusive Collections
          </h2>
          <div className='mb-8 flex flex-col justify-between gap-4 md:flex-row'>
            <p className='w-full text-sm text-gray-600 md:w-1/2 md:text-base'>
              Discover our most prestigious properties available now.
            </p>
            <button className='flex items-center gap-2 rounded-lg text-sm text-blue-600 hover:text-blue-700 md:text-base'>
              View All listings <RiArrowRightLine size={20} />
            </button>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {propertiesDummy.map((property, index) => (
              <Suspense
                key={index}
                fallback={<LoadingSkeleton variant='card' />}
              >
                <PropertyCard {...property} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
      <section
        id='showcase'
        className='border-t border-gray-50 bg-white px-6 py-24 lg:px-40 dark:border-gray-800 dark:bg-[#111921]'
      >
        <div className='mx-auto max-w-[1440px]'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-[#111418] lg:text-4xl dark:text-white'>
              Get It Sold
            </h2>
          </div>
          <div className='space-y-20'>
            {showcaseDummy.map((item, index) => (
              <ShowcaseCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
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
      <section
        id='services'
        className='border-t border-gray-50 bg-white px-6 py-24 lg:px-40 dark:border-gray-800 dark:bg-[#111921]'
      >
        <div className='mx-auto max-w-[1440px]'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-[#111418] lg:text-4xl dark:text-white'>
              Our Services
            </h2>
            <div className='bg-primary mx-auto mb-6 h-1 w-16'></div>
            <p className='mx-auto max-w-2xl text-gray-500 dark:text-gray-400'>
              Providing a bespoke real estate experience tailored to your unique
              objectives and lifestyle.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-20'>
            {servicesDummy.map((service, index) => (
              <ServiceCard
                key={index}
                icon={
                  serviceIconMap[
                    service.iconName as keyof typeof serviceIconMap
                  ]
                }
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Suspense
        fallback={
          <section
            id='testimonials'
            className='bg-gray-50 px-6 py-24 lg:px-40 dark:bg-[#111921]'
          >
            <div className='mx-auto max-w-[1440px]'>
              <div className='mb-16 text-center'>
                <div className='mx-auto mb-4 h-10 w-64 rounded bg-gray-200 dark:bg-gray-700'></div>
                <div className='mx-auto mb-6 h-1 w-16 rounded bg-gray-200 dark:bg-gray-700'></div>
                <div className='mx-auto h-4 w-96 rounded bg-gray-200 dark:bg-gray-700'></div>
              </div>
              <div className='relative overflow-hidden py-6'>
                <div className='flex gap-6'>
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className='w-80 shrink-0'>
                      <LoadingSkeleton variant='card' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        }
      >
        <TestimonialSection />
      </Suspense>
      <section
        id='market-stats'
        className='bg-gray-50 px-6 py-24 lg:px-40 dark:bg-[#111921]'
      >
        <div className='mx-auto max-w-[1440px]'>
          <div className='mb-16 text-center'>
            <span className='text-primary mb-2 block text-sm font-bold tracking-widest text-gray-500 uppercase dark:text-gray-300'>
              Data Driven
            </span>
            <h2 className='mb-4 text-3xl font-black text-[#111418] lg:text-4xl dark:text-white'>
              Local Market Pulse
            </h2>
            <p className='mx-auto max-w-2xl text-gray-600 dark:text-gray-300'>
              Stay informed with real-time trends and data from your local
              luxury real estate market. We provide the insights you need to
              make confident decisions.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {marketStatsDummy.map((stat, index) => (
              <MarketStatCard
                key={index}
                icon={
                  marketIconMap[stat.iconName as keyof typeof marketIconMap]
                }
                title={stat.title}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
          <div className='mt-12 text-center'>
            <button className='border-primary hover:text-primary inline-flex cursor-pointer items-center gap-2 border-b-2 border-b-blue-500 pb-1 text-xs font-semibold text-[#111418] transition-colors md:text-sm dark:text-white'>
              Download full market report
              <RiDownloadLine className='text-xs' />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

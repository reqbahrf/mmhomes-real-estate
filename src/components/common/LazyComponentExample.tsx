import React, { Suspense, lazy } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

// Example usage with lazy loaded components
const LazyPropertyCard = lazy(() => import('../PropertyCard'));
const LazyTestimonialCard = lazy(() => import('../TestimonialCard'));

// Example wrapper component showing different skeleton variants
const LazyComponentExample: React.FC = () => {
  return (
    <div className='space-y-8 p-6'>
      {/* Card skeleton for property cards */}
      <Suspense fallback={<LoadingSkeleton variant='card' />}>
        <LazyPropertyCard
          image='/house1.jpg'
          price='$450,000'
          status='JUST LISTED'
          title='Modern Family Home'
          city='Miami'
          address='123 Main St'
          beds={3}
          baths={2}
          size='2,500 sqft'
        />
      </Suspense>

      {/* List skeleton for testimonials with avatar */}
      <Suspense fallback={<LoadingSkeleton variant='list' showAvatar />}>
        <LazyTestimonialCard
          rating={5}
          quote='Excellent service and beautiful properties!'
          authorName='John Doe'
          authorTitle='Home Buyer'
        />
      </Suspense>

      {/* Text skeleton for content areas */}
      <Suspense fallback={<LoadingSkeleton variant='text' lines={4} />}>
        <div>Some lazy loaded text content</div>
      </Suspense>

      {/* Image skeleton for images */}
      <Suspense
        fallback={
          <LoadingSkeleton variant='image' width='100%' height='300px' />
        }
      >
        <img src='/path/to/image.jpg' alt='Lazy loaded' />
      </Suspense>

      {/* Custom skeleton with specific dimensions */}
      <Suspense
        fallback={
          <LoadingSkeleton
            variant='custom'
            width='200px'
            height='50px'
            className='mx-auto'
          />
        }
      >
        <button>Lazy loaded button</button>
      </Suspense>
    </div>
  );
};

export default LazyComponentExample;

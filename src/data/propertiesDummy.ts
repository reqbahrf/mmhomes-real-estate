export type PropertyCardProps = {
  image: string;
  price: string;
  status?: 'JUST LISTED' | 'PENDING';
  title: string;
  city: string;
  address: string;
  beds: number;
  baths: number;
  size: string;
};

import house1 from '@/assets/house1.webp';
import house2 from '@/assets/house2.webp';
import house3 from '@/assets/house3.webp';

export const propertiesDummy: PropertyCardProps[] = [
  {
    image: house3,
    price: '$3,200,000',
    title: 'Highland Estate',
    city: 'Beverly Hills',
    address: '1234 Sunset Boulevard, Beverly Hills, CA 90210',

    beds: 4,
    baths: 3,
    size: '5,800 sq ft',
  },
  {
    image: house1,
    price: '$2,850,000',
    status: 'JUST LISTED',
    title: 'Modern Luxury Villa',
    city: 'Brentwood',
    address: '890 Hillcrest Road, Brentwood, CA 90049',
    beds: 5,
    baths: 4,
    size: '4,500 sq ft',
  },
  {
    image: house2,
    price: '$1,750,000',
    status: 'PENDING',
    title: 'Ocean View Condo',
    city: 'Manhattan Beach',
    address: '567 Ocean Drive, Manhattan Beach, CA 90266',
    beds: 3,
    baths: 2,
    size: '2,200 sq ft',
  },
];

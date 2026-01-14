import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type MarketStatCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
};

export default function MarketStatCard({
  icon,
  title,
  value,
  description,
}: MarketStatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900'
    >
      {/* Icon */}
      <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'>
        {icon}
      </div>

      {/* Content */}
      <h4 className='text-md font-bold text-gray-600 dark:text-gray-400'>
        {title}
      </h4>

      <div className='mt-1 text-3xl font-bold text-blue-600 dark:text-blue-400'>
        {value}
      </div>

      <div
        className='mt-1 text-sm text-gray-500 dark:text-gray-400'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </motion.div>
  );
}

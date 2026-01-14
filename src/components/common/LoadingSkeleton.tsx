import React from 'react';

interface LoadingSkeletonProps {
  variant?: 'card' | 'list' | 'text' | 'image' | 'custom';
  lines?: number;
  className?: string;
  width?: string | number;
  height?: string | number;
  showAvatar?: boolean;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'card',
  lines = 3,
  className = '',
  width,
  height,
  showAvatar = false,
}) => {
  const skeletonBase = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';

  const renderCardSkeleton = () => (
    <div
      className={`rounded-lg border border-gray-200 p-4 dark:border-gray-600 ${className}`}
    >
      <div className={`${skeletonBase} mb-4 h-48 w-full`} />
      <div className={`${skeletonBase} mb-2 h-4 w-3/4`} />
      <div className={`${skeletonBase} mb-2 h-4 w-1/2`} />
      <div className={`${skeletonBase} h-4 w-full`} />
    </div>
  );

  const renderListSkeleton = () => (
    <div className={`flex items-center space-x-4 p-4 ${className}`}>
      {showAvatar && (
        <div className={`${skeletonBase} h-12 w-12 shrink-0 rounded-full`} />
      )}
      <div className='flex-1 space-y-2'>
        <div className={`${skeletonBase} h-4 w-3/4`} />
        <div className={`${skeletonBase} h-3 w-1/2`} />
      </div>
    </div>
  );

  const renderTextSkeleton = () => (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${skeletonBase} h-4`}
          style={{
            width: index === lines - 1 ? '70%' : '100%',
          }}
        />
      ))}
    </div>
  );

  const renderImageSkeleton = () => (
    <div
      className={`${skeletonBase} ${className}`}
      style={{
        width: width || '100%',
        height: height || '200px',
      }}
    />
  );

  const renderCustomSkeleton = () => (
    <div
      className={`${skeletonBase} ${className}`}
      style={{
        width: width || '100%',
        height: height || '100px',
      }}
    />
  );

  const variants = {
    card: renderCardSkeleton,
    list: renderListSkeleton,
    text: renderTextSkeleton,
    image: renderImageSkeleton,
    custom: renderCustomSkeleton,
  };

  return variants[variant]();
};

export default LoadingSkeleton;

'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-purple-950/40 dark:via-purple-900/30 dark:to-purple-950/40 rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
};

export const DocumentSkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6 animate-pulse">
      <div className="space-y-3 w-full max-w-2xl">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
        </div>
        <Skeleton className="h-6 w-4/5 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-3/5 rounded" />
        <div className="pt-2 flex items-center gap-4">
          <Skeleton className="h-4 w-40 rounded" />
          <Skeleton className="h-4 w-28 rounded" />
        </div>
      </div>
      <div className="flex-shrink-0">
        <Skeleton className="h-11 w-36 rounded-xl" />
      </div>
    </div>
  );
};

export const TramiteSkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card flex flex-col justify-between space-y-4 animate-pulse">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
      </div>
      <Skeleton className="h-10 w-full rounded-xl mt-4" />
    </div>
  );
};

export const SearchSkeletonItem: React.FC = () => {
  return (
    <div className="p-4 flex items-start gap-3 animate-pulse">
      <Skeleton className="w-9 h-9 rounded-lg flex-shrink-0" />
      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <Skeleton className="h-5 w-3/4 rounded" />
        <Skeleton className="h-3.5 w-full rounded" />
      </div>
    </div>
  );
};

export const NewsSkeletonCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#15241C] rounded-2xl overflow-hidden border border-lineas/80 dark:border-verde-valle/30 shadow-card flex flex-col justify-between h-full animate-pulse">
      <div>
        <Skeleton className="h-48 w-full rounded-none" />
        <div className="p-5 space-y-3">
          <Skeleton className="h-3 w-28 rounded" />
          <Skeleton className="h-5 w-4/5 rounded" />
          <Skeleton className="h-3.5 w-full rounded" />
          <Skeleton className="h-3.5 w-3/4 rounded" />
        </div>
      </div>
      <div className="p-5 pt-0">
        <Skeleton className="h-4 w-32 rounded" />
      </div>
    </div>
  );
};

export const HomeLoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-16 pb-16 animate-fade-in">
      {/* Hero Skeleton */}
      <div className="pt-10 pb-12 px-4 bg-gradient-to-b from-[#F4EAF5]/50 via-papel to-papel border-b border-lineas/60">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          <div className="flex justify-center">
            <Skeleton className="h-7 w-72 rounded-full" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-12 w-3/4 max-w-xl rounded-2xl" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-5 w-96 rounded-lg" />
          </div>
          <div className="max-w-3xl mx-auto pt-2">
            <Skeleton className="h-16 w-full rounded-2xl shadow-hero" />
          </div>
          <div className="max-w-4xl mx-auto pt-4">
            <Skeleton className="h-44 w-full rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Trámites Skeleton Section */}
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-8 w-64 rounded-xl" />
          </div>
          <Skeleton className="h-6 w-36 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
        </div>
      </div>

      {/* Noticias Skeleton Section */}
      <div className="py-14 bg-[#F4EAF5]/30 border-y border-lineas/60">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-8 w-72 rounded-xl" />
            </div>
            <Skeleton className="h-6 w-36 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NewsSkeletonCard />
            <NewsSkeletonCard />
            <NewsSkeletonCard />
            <NewsSkeletonCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2.5',
    lg: 'w-8 h-8 border-3'
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-t-[#F07D26] border-r-transparent border-b-[#5E1757] border-l-transparent ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Cargando contenido..."
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

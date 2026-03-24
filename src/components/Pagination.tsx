'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface Pages {
  currentPage: number;
  totalPages: number;
}

function Pagination({ currentPage, totalPages }: Pages) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-row gap-1 justify-self-center">
      {currentPage > 1 && (
        <Link className="dark:text-white place-self-center" href={createPageURL(currentPage - 1)}>
          {' '}
          назад{' '}
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          prefetch={true}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === page ? 'bg-darkmode-10 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link className="dark:text-white place-self-center" href={createPageURL(currentPage + 1)}>
          {' '}
          вперед{' '}
        </Link>
      )}
    </div>
  );
}

export default Pagination;

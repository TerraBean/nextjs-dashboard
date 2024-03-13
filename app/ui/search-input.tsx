import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function SearchInput({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = (term: string) => {
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  };

  return (

    <input
      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      placeholder={placeholder}
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />

  );
};

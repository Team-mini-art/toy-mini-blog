import Button from './Button';

export default function Pagination() {
  return (
    <div className='mt-16 flex justify-center'>
      {Array(10).fill(0).map((_, idx) => 
        <Button key={idx} addClass="mx-2 py-3 px-5">{idx + 1}</Button>
      )}
    </div>
  )
}

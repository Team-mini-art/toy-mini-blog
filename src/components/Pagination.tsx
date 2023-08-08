export default function Pagination() {
  return (
    <div className="mx-auto pt-6 pb-8 max-w-3xl">
      <nav className="flex justify-between">
        <button className="cursor-auto disabled:opacity-50" disabled>
          Previous
        </button>
        <span>1 of 2</span>
        <button className="cursor-auto disabled:opacity-50" disabled>
          Next
        </button>
      </nav>
    </div>
  );
}

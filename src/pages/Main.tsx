import Button from '../components/Button';
import List from '../components/List';
import Pagination from '../components/Pagination';

export default function Main() {
  return (
    <div className="mt-40 w-full max-w-screen-lg">
      <h1 className="container-title text-center">Mini Blog</h1>
      <div className="shadow_type1 p-5">
        <div className="text-right">
          <Button addClass="py-3 px-5">새글 작성</Button>
        </div>
        <List />
      </div>
      <Pagination />
    </div>
  );
}

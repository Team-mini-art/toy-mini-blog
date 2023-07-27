import List from '../components/List';

export default function Main() {
  return (
    <div className="container-basic w-full max-w-screen-lg">
      <h1 className="container-title text-center">Mini Blog</h1>
      <List />
      <div>
        <button>새글 작성</button>
        <p>페이지네이션</p>
      </div>
    </div>
  );
}

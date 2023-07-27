export default function ListItem() {
  // 게시글 id, 제목, 내용, 회원id 생성일 수정일
  return (
    <li>
      <div className="py-5 flex justify-between items-end gap-10">
        <div className="cursor-pointer">
          <h3 className="text-3xl">제목</h3>
          <p className="mt-3 text-xl line-clamp-2">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          </p>
        </div>
        <div className="shrink-0 text-lg text-gray-500">생성일</div>
      </div>
    </li>
  );
}

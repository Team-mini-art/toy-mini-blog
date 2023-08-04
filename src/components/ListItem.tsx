export default function ListItem() {
  // 게시글 id, 제목, 내용, 회원id 생성일 수정일
  return (
    <li>
      <div className="my-3 py-5 px-10 flex justify-between items-end gap-10">
        <div className="cursor-pointer group">
          <h3 className="text-3xl group-hover:text-purple-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <p className="mt-5 text-xl line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus in voluptate dicta eius id facilis eaque ipsum at cum ad
            tempora aspernatur dolores enim explicabo eligendi deserunt, itaque
            magni perspiciatis.
          </p>
        </div>
        <div className="shrink-0 text-lg text-gray-500">2023.06.01</div>
      </div>
    </li>
  );
}

// border-radius: 50px;
// background: linear-gradient(145deg, #cacaca, #f0f0f0);
// box-shadow:  0.1rem 0.1rem 0.2rem #bebebe, -0.1rem -0.1rem 0.2rem #ffffff;

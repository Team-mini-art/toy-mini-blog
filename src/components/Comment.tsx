import Button from './Button';
import CommentItem from './CommentItem';

export default function Comment() {
  return (
    <div className="mt-40">
      <strong className="font-bold">4 comments</strong>
      <div className="mt-4">
        <textarea
          className="input-basic"
          placeholder="Leave a comment"
        ></textarea>
        <div className="mt-4 flex justify-end">
          <Button>Comment</Button>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <strong className="font-bold text-gray-400">yezi</strong>
              <time className="text-sm text-gray-400">September 4, 2023</time>
            </div>
            <div className="flex gap-2">
              <button className="button-hover text-sm">Edit</button>
              <button className="button-hover text-sm">Delete</button>
            </div>
          </div>
          <CommentItem />
        </div>
      </div>
    </div>
  );
}

import ListItem from './ListItem';

export default function List() {
  const arr = Array(10).fill(0);

  return (
    <ul className="divide-y divide-gray-200">
      {arr.map((_, idx) => {
        if (idx >= 3) return null;
        return <ListItem key={idx}></ListItem>;
      })}
    </ul>
  );
}

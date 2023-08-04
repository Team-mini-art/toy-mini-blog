import ListItem from './ListItem';

export default function List() {
  const arr = Array(10).fill(0);

  return (
    <ul className="mt-10">
      {arr.map((_, idx) => (
        <ListItem key={idx}></ListItem>
      ))}
    </ul>
  );
}

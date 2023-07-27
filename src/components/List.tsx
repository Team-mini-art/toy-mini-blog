import ListItem from './ListItem';

export default function List() {
  const arr = Array(5).fill(0);

  return (
    <ul>
      {arr.map((_, idx) => {
        return <ListItem key={idx}></ListItem>;
      })}
    </ul>
  );
}

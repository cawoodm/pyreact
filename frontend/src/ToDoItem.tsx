
export default function ToDoItem(props: { name: string }) {
  return (
    <li>
      [{props.name}]
    </li>
  );
}
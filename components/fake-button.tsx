export default function Button({ text, idea }: { text: string, idea?: number }) {
  return (
    // <button onClick={() => alert('you clicked')} >{text} {idea}</button>
    <button onClick={() => console.log('you clicked')} >{text} {idea}</button>
  );
}
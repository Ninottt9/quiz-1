export default function Answer({ ...props }) {
  const handleClick = () => {};
  return (
    <button
      className='flex w-35 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      {...props}
    >
      Answer
    </button>
  );
}

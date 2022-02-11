export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" autoComplete="off" value={value} onChange={onChange} />
    </label>
  );
}

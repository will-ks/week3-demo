const Controls = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value={"male"}>Male</option>
      <option value={"female"}>Female</option>
    </select>
  );
};

export default Controls;

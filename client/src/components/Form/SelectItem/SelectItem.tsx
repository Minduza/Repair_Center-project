import '../Form.scss';

type listType = {
  optionsList: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

const SelectItem = ({ optionsList, state, setState, label }: listType) => {
  return (
    <div className="formItem">
      <div className="label">
        <label>{label}</label>
      </div>
      <select
        className="selectItem"
        onChange={(e) => setState(e.target.value)}
        value={state}
      >
        <option value="">--Please choose an option--</option>
        {optionsList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;

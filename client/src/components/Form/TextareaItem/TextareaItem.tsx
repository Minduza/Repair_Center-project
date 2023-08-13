import '../Form.scss';

type listType = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  label: string;
};

const TextareaItem = ({ label, setState, state, rows, cols }: listType) => {
  return (
    <div className="textareaItem">
      <div className="label">
        <label>{label}</label>
      </div>
      <textarea
        onChange={(e) => setState(e.target.value)}
        value={state}
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

export default TextareaItem;

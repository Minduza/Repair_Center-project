import '../Form.scss';

type inputType<T> = {
  type: string;
  label: string;
  placeholder?: string;
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
};

const InputItem = <T extends string | boolean>({
  type,
  label,
  placeholder,
  state,
  setState,
}: inputType<T>) => {
  const stringValue = typeof state === 'string' ? state : '';

  return (
    <div className="formItem">
      <div className="label">
        <label>{label}</label>
      </div>

      <input
        className="inputItem"
        type={type}
        placeholder={placeholder}
        value={stringValue}
        onChange={(e) => setState(e.target.value as T)}
      />
    </div>
  );
};

export default InputItem;

import '../Form.scss';

type RratioButtonType = {
  label: string;
  htmlFor: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RatioButton = ({
  label,
  htmlFor,
  name,
  value,
  checked,
  onChange,
}: RratioButtonType) => {
  return (
    <div className="ratioButton">
      <input
        type="radio"
        id={htmlFor}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default RatioButton;

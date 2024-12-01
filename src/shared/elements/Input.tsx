interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  themes: "footer" | "auth";
  require?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type,
  placeholder,
  themes,
  require,
  value,
  onChange,
}: InputProps) => {
  const capitalFirstLetter = (text: string) => {
    const firstChar = text[0].toLocaleUpperCase();
    const remainingChars = text.slice(1);
    return firstChar + remainingChars;
  };

  const themesStyle = {
    footer: "text-white bg-black font-bold",
    auth: "text-black bg-white",
  };

  return (
    <div>
      <label className={`${themesStyle[themes]}`} htmlFor={name}>
        {capitalFirstLetter(name)}
      </label>
      <div className="relative group">
        <input
          id={name}
          name={name}
          type={type}
          className={`${themesStyle[themes]} text-sm py-1 border-b border-gray-300 w-full focus:outline-none`}
          placeholder={placeholder}
          required={require}
          value={value}
          onChange={onChange}
        />
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#717FE0] transition-all duration-500 group-focus-within:w-full"></span>
      </div>
    </div>
  );
};

export default Input;

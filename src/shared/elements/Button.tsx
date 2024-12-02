interface ButtonProps {
  title: string;
  isActive?: boolean;
  themes: "footer" | "auth";
  disabled?: boolean;
  type: "button" | "submit";
  onClick?: () => void;
}

const Button = ({
  title,
  isActive,
  themes,
  disabled,
  type,
  onClick,
}: ButtonProps) => {
  const buttonStyle = {
    footer:
      "text-white text-sm bg-[#717FE0] w-[179px] p-3 font-bold hover:bg-gray-200 hover:text-[#717FE0]",
    auth: `${
      isActive ? "bg-blue-500 hover:bg-[#717FE0] cursor-pointer" : "bg-gray-500"
    } p-4 mt-2 text-white`,
  };
  return (
    <button
      type={type}
      className={buttonStyle[themes]}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

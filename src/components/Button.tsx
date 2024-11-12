interface Props {
  name: string;
  onClick: () => void;
  color?: string;
}

const Button = ({ name, color = "primary", onClick }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {name}
      </button>
    </>
  );
};
export default Button;

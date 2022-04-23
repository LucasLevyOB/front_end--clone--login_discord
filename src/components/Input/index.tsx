import { StyledInput } from "./StyledInput";

type Props = {
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
};

const Input = ({ type, id, value, placeholder }: Props) => {
  return (
    <StyledInput type={type} id={id} value={value} placeholder={placeholder} />
  );
};

export default Input;

import { Group, Input, FormIputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormIputLabel shrink={otherProps.value.length}>{label}</FormIputLabel>
      )}
    </Group>
  );
};

export default FormInput;

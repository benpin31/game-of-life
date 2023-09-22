import { ChangeEvent, Dispatch, useState } from "react";
import { DEFAULT_NB_COLS, DEFAULT_NB_LINES, FormInputSize } from "../../models";
import { useCurrent } from "../../hooks/useCurrent";
import { string2Number } from "../../utils";
import { ChooseSizeInput } from "./ChooseSizeInput";
import { Button } from "../System/Button";
import { Form } from "../System/Form";

type ChooseSizeFormProps = { setGridSize: Dispatch<number[]> };

export const ChooseSizeForm = ({ setGridSize }: ChooseSizeFormProps) => {
  const [inputSize, setFormValues] = useState<FormInputSize>([
    DEFAULT_NB_LINES.toString(),
    DEFAULT_NB_COLS.toString(),
  ]);
  const inputSizeRef = useCurrent(inputSize);

  const HandleChange = (inputIndex: 0 | 1) => {
    return (event: ChangeEvent<HTMLInputElement>) =>
      setFormValues(
        (current) =>
          current.map((c, index) => {
            if (index === inputIndex) {
              return event.target.value;
            }
            return c;
          }) as [string, string]
      );
  };

  const onSubmit = () => {
    const [nbLine, nbCol] = inputSizeRef.current ?? [];
    if (nbLine && nbCol) {
      setGridSize([string2Number(nbLine), string2Number(nbCol)]);
    }
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <ChooseSizeInput
        id="nb-line"
        value={inputSize[0]}
        onChange={HandleChange(0)}
        label="Number of lines"
      />
      <ChooseSizeInput
        id="nb-col"
        value={inputSize[1]}
        onChange={HandleChange(1)}
        label="Number of columns"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

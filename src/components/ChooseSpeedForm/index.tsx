import { Form } from "../System/Form";

type ChooseSpeedFormProps = {
  label: string;
  id: string;
  handleChangeSpeed: (newSpeed: number) => void;
  speed: number;
};

const MIN_SPEED_IN_STEP_BY_SECOND = 0.5;
const MAX_SPEED_IN_STEP_BY_SECOND = 20;
const STEP = 0.5;

export const ChooseSpeedForm = ({
  label,
  id,
  handleChangeSpeed,
  speed,
}: ChooseSpeedFormProps) => {
  return (
    <Form>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-white">
          {label}
        </label>
        <span className="text-white">{speed} step/s</span>
      </div>
      <input
        id={id}
        type="range"
        min={MIN_SPEED_IN_STEP_BY_SECOND}
        max={MAX_SPEED_IN_STEP_BY_SECOND}
        step={STEP}
        value={speed}
        onChange={(event) => handleChangeSpeed(Number(event.target.value))}
        className="bg-yellow-600 appearance-none h-2 rounded [&::-webkit-slider-thumb]:bg-yellow-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5  [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full cursor-pointer "
      />
    </Form>
  );
};

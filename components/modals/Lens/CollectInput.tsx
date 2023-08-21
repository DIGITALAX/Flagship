import { FormEvent, FunctionComponent } from "react";
import { CollectInputProps } from "../../types/common.types";

const CollectInput: FunctionComponent<CollectInputProps> = ({
  id,
  name,
  step,
  min,
  placeholder,
  defaultValue,
  col,
  row,
  label,
  handleValueChange,
}): JSX.Element => {
  return (
    <div
      className={`relative w-fit h-fit grid grid-flow-row auto-rows-auto row-start-${row} col-start-${col} text-white font-mana text-xs justify-self-start gap-2 pr-2 self-start`}
    >
      <div className="relative w-fit h-fit row-start-1 text-white text-xs whitespace-pre-wrap break-words sm:whitespace-nowrap justify-self-start self-center text-left">
        {label}
      </div>
      <input
        type="number"
        id={id}
        name={name}
        min={min}
        required
        step={step}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`relative w-20 border border-white bg-oscurazul text-offBlack h-10 row-start-2 rounded-md p-1.5 font-mana justify-self-start self-center caret-transparent`}
        onChange={(e: FormEvent) =>
          handleValueChange((e?.target as HTMLFormElement)?.value)
        }
      />
    </div>
  );
};

export default CollectInput;

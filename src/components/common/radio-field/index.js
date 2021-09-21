import { RadioGroup } from "@headlessui/react";
function RadioField({ data, mainClass, selected, setSelected }) {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className={`${mainClass}`}>{data}</div>
    </RadioGroup>
  );
}
RadioField.defaultProps = {
  mainClass: "py-2",
};
export default RadioField;

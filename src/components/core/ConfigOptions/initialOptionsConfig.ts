export interface IOptions {
  name: string;
  type: string;
  value: boolean | string;
  label: string;
}

export const initialOptionsConfig = [
  {
    name: "lower",
    type: "checkbox",
    value: true,
    label: "Include Lower Letters",
  },
  {
    name: "upper",
    type: "checkbox",
    value: true,
    label: "Include Upper Letters",
  },
  {
    name: "numbers",
    type: "checkbox",
    value: false,
    label: "Include number Letters",
  },
  {
    name: "symbols",
    type: "checkbox",
    value: false,
    label: "Include Symbols",
  },
];

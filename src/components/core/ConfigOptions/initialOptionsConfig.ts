export interface IOptions {
  name: string;
  type: string;
  value: boolean | string;
  chars: string;
  label: string;
}

export const initialOptionsConfig = [
  {
    name: "lower",
    type: "checkbox",
    value: true,
    chars: "abcdefghijklmnopqrstuvyxz",
    label: "Include Lower Letters",
  },
  {
    name: "upper",
    type: "checkbox",
    value: false,
    chars: "abcdefghijklmnopqrstuvyxz".toUpperCase(),
    label: "Include Upper Letters",
  },
  {
    name: "numbers",
    type: "checkbox",
    value: false,
    chars: "0123456789",
    label: "Include number Letters",
  },
  {
    name: "symbols",
    type: "checkbox",
    value: false,
    chars: "!@#$%&*_+",
    label: "Include Symbols",
  },
];

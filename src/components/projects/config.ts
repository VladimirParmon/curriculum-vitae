import { myBreakpoints } from "../../constants/breakpoints";
import { AxisOptionType } from "embla-carousel/components/Axis";

const x = "x" as AxisOptionType;
const y = "y" as AxisOptionType;
const w = `(max-width: ${myBreakpoints.l}px)`;
export const options = {
  dragFree: true,
  startIndex: 1,
  axis: x,
  breakpoints: {
    [w]: { axis: y },
  },
};

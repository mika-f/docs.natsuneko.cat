import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const merge = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { merge };

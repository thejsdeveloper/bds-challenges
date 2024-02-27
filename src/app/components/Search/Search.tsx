import { cn } from "@/app/utils/cn";
import {
  Input,
  InputProps,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import { IoSearchSharp } from "react-icons/io5";

type SearchProps = InputProps & {
  containerClass?: string;
};

export const Search = ({
  containerClass,
  className,
  ...props
}: SearchProps) => {
  return (
    <TextField
      className={cn(
        "flex items-center relative text-black/90 ",
        containerClass
      )}
      aria-label="Search Box"
    >
      <IoSearchSharp className="fill-black/60 absolute left-2 top-1/2 -translate-y-1/2" />

      <Input
        {...props}
        className={cn(
          "flex-1 py-2 pl-8 rounded-lg outline-none  bg-gray-100 focus:ring-2 ring-pink-500 ring-offset-2 focus:bg-gray-200 transition-all",
          containerClass
        )}
      />
    </TextField>
  );
};

import { ComponentProps, forwardRef } from 'react';

interface IInput extends ComponentProps<'input'> {}

export const Input = forwardRef<HTMLInputElement, IInput>(
    ({ ...props }: IInput, ref) => {
        return (
            <input
                {...props}
                ref={ref}
                className="rounded-md p-3 border border-solid border-slate-300 outline-none w-full focus:border-slate-800 transition-all duration-150"
            />
        );
    }
);

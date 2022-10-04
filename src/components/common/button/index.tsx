import {IconType} from 'react-icons';
import React from 'react';
import {cn} from '../../../utils';

/**
 * Properties for an interacting button component.
 */
type ButtonProps = {
    className?: string;
    onClick?: () => void;
    variant: 'primary' | 'secondary' | 'rounded_with_primary' | 'rounded_with_secondary';
    text?: string;
    icon?: IconType;
    children?: React.ReactNode;
    buttonRef?: React.Ref<HTMLButtonElement>;
    type?: 'button';
};

/**
 * Pre-defined styling variants.
 */
const variants = {
    primary: 'border-transparent bg-primary text-white font-bold',
    secondary: 'border-transparent bg-secondary text-white hover:bg-primary font-bold',
    rounded_with_primary: 'rounded-full',
    rounded_with_secondary: 'rounded-full',
};

/**
 * Definition of an interacting button component.
 *
 * @param type `type` Attribute of the `<button>` element.
 * @param variant Variations relating to pre-defined styling of the element
 * @param text Text to display in the button.
 */
const Button = ({
                    className,
                    onClick,
                    buttonRef,
                    type = 'button',
                    variant = 'primary',
                    text: value,
                    children,
                    icon,
                }: ButtonProps) => (
    <button
        className={cn(
            variants[variant],
            variant === 'rounded_with_primary' ? variants['primary'] : '',
            variant === 'rounded_with_secondary' ? variants['secondary'] : '',
            'inline-block px-6 my-1 py-2.5',
            'hover:-translate-y-[0.15rem] active:translate-y-[0.025rem] active:scale-[0.975]',
            icon && !value && !children ? 'aspect-square p-3' : 'px-5 py-3',
            className,
        )}
        onClick={onClick}
        ref={buttonRef}
        type={type}
    >
        {icon && React.createElement(icon, {size: 20})}
        {value && (
            <span>
                {value}
            </span>
        )}
        {children}
    </button>
);

export default Button;
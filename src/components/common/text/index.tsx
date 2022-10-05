import React from 'react';
import Link from 'next/link';
import {cn} from 'utils';

/**
 * Properties for a text component.
 */
type TextProps = {
    variant:
        | 'hero'
        | 'big-heading'
        | 'heading'
        | 'sub-heading'
        | 'paragraph'
        | 'input'
        | 'label';
    className?: string;
    href?: string;
    children?: React.ReactNode;
};

/**
 * Pre-defined styling.
 */
const variants = {
    'big-heading': 'text-4xl font-bold text-primary relative underline underline-offset-4 ' +
        'ml-[14px] mb-[3.75rem]',
    heading: 'text-4xl font-bold',
    'sub-heading': 'text-lg font-medium',
    paragraph: 'text-lg',
    input: 'text-sm uppercase tracking-wide',
    label: 'text-xs uppercase tracking-wide',
};

/**
 *
 * @param variant Variations relating to pre-defined styling of the element.
 * @param className Custom classes to be applied to the element.
 * @param children Child elements to be rendered within the component.
 */
const Text = ({variant, className, href, children}: TextProps) => (
    <p className={`${cn(variants[variant], className)}`}>
        {href ? (
            <Link href={href}>
                <a className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                    {children}
                </a>
            </Link>
        ) : (
            children
        )}
    </p>
);

export default Text;
export const openWebPage = (url: string) => {
    window.open(url, '_blank');
}

// Concatenates classes into a single className string
export const cn = (...args: string[]) => args.join(' ');

export const truncateText = (input, length) => {
    return input.length > length ? `${input.substring(0, length)}...` : input;
}
export const openWebPage = (url: string) => {
    window.open(url, '_blank');
}

// Concatenates classes into a single className string
export const cn = (...args: string[]) => args.join(' ');
export const openWebPage = (url: string) => {
    window.open(url, '_blank');
}

// Concatenates classes into a single className string
export const cn = (...args: string[]) => args.join(' ');

export const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
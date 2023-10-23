export const Link = (obj) => {
    const { link, textContent } = obj;

    return <a href={link}>{textContent}</a>;
};

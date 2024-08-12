import { marked } from 'marked';

/**
 * The `markdownify` function takes a string input, checks if it is defined, and then parses it as
 * inline markdown using the `marked` library.
 * @param {string | undefined} content - The `markdownify` function takes a parameter `content` of type
 * string or undefined. If the `content` is not provided (undefined), the function will return null.
 * Otherwise, it will parse the inline markdown content using the `marked` library and return the
 * parsed result.
 * @returns The `markdownify` function returns the parsed inline markdown content using the `marked`
 * library. If the `content` parameter is `undefined` or falsy, the function returns `null`.
 */
export const markdownify = (content: string | undefined) => {
    if (!content) return null;

    return marked.parseInline(content);
};

/**
 * The `plainify` function takes a string of HTML content, removes all HTML tags and extra spaces, and
 * returns the plain text content.
 * @param {string} content - The `plainify` function takes a string `content` as input. This function
 * removes HTML tags, extra spaces, and decodes HTML entities from the input content to make it plain
 * text. If the input content is empty or falsy, the function returns `null`.
 * @returns The `plainify` function returns the `stripHTML` variable, which is the result of processing
 * the input `content` string to remove HTML tags, extra spaces, and decode HTML entities.
 */
export const plainify = (content: string) => {
    if (!content) return null;

    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, '');
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, '');
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};

/**
 * The function `htmlEntityDecoder` decodes HTML entities in a given string.
 * @param {string} htmlWithEntities - The `htmlWithEntities` parameter is a string that contains HTML
 * text with encoded entities such as `&nbsp;`, `&lt;`, `&gt;`, `&amp;`, `&quot;`, and `&#39;`. The
 * `htmlEntityDecoder` function decodes these
 * @returns The `htmlEntityDecoder` function returns a string with HTML entities decoded into their
 * corresponding characters.
 */
const htmlEntityDecoder = (htmlWithEntities: string): string => {
    let entityList: { [key: string]: string } = {
        '&nbsp;': ' ',
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
        '&quot;': '"',
        '&#39;': "'",
    };
    let htmlWithoutEntities: string = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity: string): string => {
        return entityList[entity];
    });
    return htmlWithoutEntities;
};

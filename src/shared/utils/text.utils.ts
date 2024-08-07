import { marked } from 'marked';

export const markdownify = (content: string | undefined) => {
    if (!content) return null;

    return marked.parseInline(content);
};

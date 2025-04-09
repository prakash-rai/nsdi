
const hello world
export function stripHtmlTags(text: string): string {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
}

export function getCategoryLabel(categoryPath: string): string {
    const prefix = "/Categories/";
    if (categoryPath.startsWith(prefix)) {
        return categoryPath.slice(prefix.length);
    }
    return categoryPath;
}



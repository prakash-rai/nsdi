import { atom } from "nanostores";
import { type IItem } from "@esri/arcgis-rest-portal";
import fetchGroupItems from "../utility/fetchGroupItems";


const portalGroupId = import.meta.env.PORTAL_GROUP_ID;

export const portalItemStore = atom<IItem[]>([]);

let hasLoaded = false;

export async function loadPortalItems() {
    if (!hasLoaded) {
        const groups = await fetchGroupItems(portalGroupId);
        portalItemStore.set(groups);
        hasLoaded = true;
    }
}

export interface CategoryCount {
    category: string;
    counts: number;
}

export async function getCategoriesCounts(): Promise<CategoryCount[]> {
    const counts: { [key: string]: number } = {};

    await loadPortalItems();

    const items = portalItemStore.get()

    items.forEach((item) => {
        if (Array.isArray(item.categories)) {
            item.categories.forEach((category) => {
                counts[category] = (counts[category] || 0) + 1;
            });
        }
    });

    return Object.entries(counts).map(([category, count]) => {
        return {
            category: category,
            counts: count,
        };
    });
}

import { atom } from "nanostores";
import { type CategoryCount, getCategoriesCounts } from "../stores/portalItems"

type appState = {
    activeCategory?: string;
}


export const appStateStore = atom<appState>({});

export function setActiveCatogory(category: string) {
    appStateStore.set({ activeCategory: category })
}

export async function getActiveCatogory() {
    if (!appStateStore.get().activeCategory) {
        const catagoriesCount = await getCategoriesCounts();
        return catagoriesCount[0].category;
    }
    return appStateStore.get().activeCategory;
}
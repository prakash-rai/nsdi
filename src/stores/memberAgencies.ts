import { atom } from "nanostores";
import { type IGroup } from "@esri/arcgis-rest-portal";
import { fetchAllGroupsByTag } from "../utility/fetchGroupsByTag";


export const memberAgenciesStore = atom<IGroup[]>([]);

let hasLoaded = false;


export async function loadMemberAgencies() {
    if (!hasLoaded) {
        const groups = await fetchAllGroupsByTag("member agency");
        memberAgenciesStore.set(groups);
        hasLoaded = true;
    }
}
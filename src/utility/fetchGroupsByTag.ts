import { type ISearchResult, type IGroup } from "@esri/arcgis-rest-portal";
import { request } from "@esri/arcgis-rest-request";

const portalUrl = import.meta.env.PORTAL_URL;

export async function fetchAllGroupsByTag(tag: string): Promise<IGroup[]> {
    const apiUrl = portalUrl + "/sharing/rest/community/groups";
    const pageSize = 100; // Maximum allowed by the API
    let start = 1;
    let allGroups: IGroup[] = [];
    let totalResults = 0;

    try {
        do {
            const response: ISearchResult<IGroup> = await request(apiUrl, {
                params: {
                    q: `tags:${tag}`,
                    start,
                    num: pageSize,
                    f: 'json'
                }
            });


            if (response.results) {
                allGroups.push(...response.results);
            }

            totalResults = response.total;
            start += pageSize;
        } while (allGroups.length < totalResults);

        return allGroups;
    } catch (error) {
        console.error("Error fetching groups:", error);
        return [];
    }
}
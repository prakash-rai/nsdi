import { getGroupContent } from "@esri/arcgis-rest-portal";
import type { IGetGroupContentOptions, IItem } from "@esri/arcgis-rest-portal";

const portalUrl = import.meta.env.PORTAL_URL;

export default async function fetchGroupItems(
  groupId: string
): Promise<IItem[]> {
  const batchSize = 100;
  let start = 1;
  let allItems: IItem[] = [];

  while (start !== -1) {
    const options: IGetGroupContentOptions = {
      portal: portalUrl + "/sharing/rest",
      paging: {
        start,
        num: batchSize,
      },
    };

    const response = await getGroupContent(groupId, options);

    allItems = allItems.concat(response.items);
    start = response.nextStart;
  }

  return allItems;
}


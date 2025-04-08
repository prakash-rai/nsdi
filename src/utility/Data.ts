import { getActiveCatogory } from "../stores/appState";
import { getCategoryLabel } from "../utility/utilityFunctions"

export type MenuItem = {
    label: string;
    path: string;
    icon?: string;
    subItems?: MenuItem[];
};

const activeCategory = await getActiveCatogory();


export const menu: MenuItem[] = [
    {
        label: "Home",
        path: "/",
        icon: `  <path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>`,
    },
    {
        label: "Data",
        path: "/data/" + getCategoryLabel(activeCategory ?? ""),
        icon: `<rect fill="none" height="24" width="24"/><path d="M3,14h4v-4H3V14z M3,19h4v-4H3V19z M3,9h4V5H3V9z M8,14h13v-4H8V14z M8,19h13v-4H8V19z M8,5v4h13V5H8z"/>`,
    },
    {
        label: "Documents",
        path: "/documents",
        icon: `<path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>`,
        subItems: [
            { label: "Data Management, Sharing, and Update Guideline", path: "#" },
            {
                label: "SOP for GI Categorization & Identification of SSOT",
                path: "#",
            },
            { label: "NSDI Standard Operating Procedure", path: "#" },
        ],
    },
    {
        label: "Maps & Apps",
        path: "/maps&apps",
        icon: `<path d="M0 0h24v24H0z" fill="none"/><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>`,
    },
    {
        label: "Thematic Maps",
        path: "/thematic",
        icon: `<path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>`,
    },
];

import { cache } from "react";
import config from "@arcgis/core/config";
import { executeQueryJSON } from "@arcgis/core/rest/query";

config.request.useIdentity = false;

const CRIME_URL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/FEEDS/MPD/MapServer/6/query?outFields=*&where=1%3D1&f=geojson"

export const getCrimeData = cache(async () => {
    const query = {
        outFields: ["OFFENSE"],
        where: "1=1",
        returnDistinctValues: true,
        returnGeometry: false,
    };
    const results = await executeQueryJSON(CRIME_URL, query);
    const values = results.features.map((feature)  => feature.attributes["OFFENSE"]).filter(Boolean).sort();

    const data = {types: values } as const;
    return data;
});
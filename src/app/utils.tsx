import { cache } from "react";
import config from "@arcgis/core/config";
import { executeQueryJSON } from "@arcgis/core/rest/query";

config.request.useIdentity = false;

const SCHOOL_URL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/12";

export const getSchoolData = cache(async () => {
    const query = {
        outFields: ["NAME"],
        where: "1=1",
        returnDistinctValues: true,
        outSpatialReference: { wkid: 4326 },
        returnGeometry: false,
    };
    const results = await executeQueryJSON(SCHOOL_URL, query);
    const values = results.features
        .map((feature)  => feature.attributes["NAME"])
        .filter(Boolean)
        .sort();


    const data = {types: values } as const;
    return data;
});
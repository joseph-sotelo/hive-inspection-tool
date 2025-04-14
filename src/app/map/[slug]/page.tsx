"use client"

import "@arcgis/core/assets/esri/themes/dark/main.css";
import {
    ArcgisExpand,
    ArcgisLegend,
    ArcgisMap,
} from "@arcgis/map-components-react";

import config from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import { useEffect, useState } from "react";


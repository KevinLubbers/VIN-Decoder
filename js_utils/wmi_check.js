import { showError } from "./error.js";
import wmiCache from "../scraped_wmi_data.js";

export function getWMI(wmi) {
    const found = wmiCache[wmi];
    if (found) return found;
    showError("WMI not found");
    throw new Error("WMI not found");
}
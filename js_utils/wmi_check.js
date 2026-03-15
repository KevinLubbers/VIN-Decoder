import { showError } from "./error.js";

let wmiCache = null;
export async function getWMI(wmi) {
    try {
        if (!wmiCache) {
            const response = await fetch("../scraped_wmi_data.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            wmiCache = await response.json();
        }
        const found = wmiCache[wmi];
        if (found) {
            return found;
        } else {
            throw new Error("WMI not found");
        }
    } catch (error) {
        showError(error.message);
        throw error;
    }
}
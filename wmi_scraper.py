import json
from playwright.sync_api import sync_playwright

WEBSITE_URL = "https://en.wikipedia.org/wiki/Vehicle_identification_number"
with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto(WEBSITE_URL)
    page.wait_for_selector("table.wikitable.sortable.jquery-tablesorter")
    rows = page.query_selector_all("table.wikitable.sortable.jquery-tablesorter > tbody > tr")
    scrape_text = []
    for row in rows:
        cells = row.query_selector_all("td")
        cell_texts = [
            cell.inner_text()
            for i, cell in enumerate(cells)
            if not (len(cells) == 3 and i == 1)
        ]
        if not cell_texts: 
            continue

        # Split the first cell if it has spaces
        first_cell_parts = cell_texts[0].split(" ") if " " in cell_texts[0] else [cell_texts[0]]

        # Create a new row for each part of the first cell
        for part in first_cell_parts:
            # Combine the split first cell with the rest of the original row
            new_row = [part] + cell_texts[1:]
            scrape_text.append(new_row)
    print(len(scrape_text))
    scrape_text = dict(scrape_text)
    with open("scraped_wmi_data.json", "w") as f:
        json.dump(scrape_text, f, indent=4)
    browser.close()


const URL_MAP = {
  };

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": { "type": "redirect", "redirect": { "url": dst } },
    "condition": { "urlFilter": src, "resourceTypes": ["image"] }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  { addRules: rules, removeRuleIds: rules.map(rule => rule.id) },
  () => {
    if (chrome.runtime.lastError) console.error("Error updating:", chrome.runtime.lastError);
    else console.log("All tool textures applied successfully!");
  }
);

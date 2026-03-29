const URL_MAP = {
  "||miniblox.*textures/spritesheet.png": "https://raw.githubusercontent.com/notsenpai52013-bit/Texture-Pack-For-Eggwars/refs/heads/main/Its_Starooo_best_pack_every.png"
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

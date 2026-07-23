/* ========== Dashboard 页面逻辑 ========== */

function showDashPage(pageName) {
    document.querySelectorAll(".dsb-item").forEach(item => {
        item.classList.toggle("active", item.dataset.page === pageName);
    });
    document.querySelectorAll(".dash-page").forEach(page => {
        page.classList.toggle("active", page.dataset.page === pageName);
    });
    if (pageName !== "overview") {
        renderPageContent(pageName);
    }
}

function renderPageContent(feat) {
    const lang = window.__currentLang || "zh";
    const data = window.dashFeatData && window.dashFeatData[feat];
    if (!data) return;
    const user = getCurrentUser();

    const containerId = "page" + feat.charAt(0).toUpperCase() + feat.slice(1);
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `<ul class="dp-list">`;
    data.items.forEach(item => {
        let label = item.labelKey ? (i18n[lang][item.labelKey] || item.labelKey) : item.label;
        let value = "";
        if (item.valueKey) {
            value = i18n[lang][item.valueKey] || item.valueKey;
        } else if (item.value) {
            value = item.value;
        }
        if (feat === "settings" && user) {
            if (item.labelKey === "dash.settings.name") value = user.name || "";
            if (item.labelKey === "dash.settings.phone") value = user.phone || "";
            if (item.labelKey === "dash.settings.role") {
                value = user.role === "family"
                    ? (lang === "zh" ? "家属" : "Family")
                    : (lang === "zh" ? "长者" : "Elder");
            }
            if (item.labelKey === "dash.settings.lang") {
                value = lang === "zh" ? "中文" : "English";
            }
        }
        html += `<li><span class="dp-item-label">${label}</span><span class="dp-item-value ${item.cls || ""}">${value}</span></li>`;
    });
    html += `</ul>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dsb-item").forEach(item => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;
            if (page) showDashPage(page);
        });
    });

    document.querySelectorAll(".dash-card").forEach(card => {
        card.addEventListener("click", () => {
            const feat = card.dataset.feat;
            if (feat) showDashPage(feat);
        });
    });

    const user = getCurrentUser();
    if (user && typeof renderDashboard === "function") {
        renderDashboard(user);
    }
});

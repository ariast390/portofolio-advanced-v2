// Skills & Competencies section (#skills) — filter, live search, copy summary.
// Functions are called from inline onclick/oninput attributes in index.html,
// so they must stay global (no module scope).

// NOTE (2026-09-29): mobile skills accordion (#skills-accordion-l1 nested
// with #skills-accordion-l2-hard) used to require a manual window.Accordion
// workaround here because the previously-pinned Flowbite CDN build (v1.6.5)
// had a bug where nested `data-accordion="collapse"` containers were NOT
// scoped correctly (initAccordions() picked up L2 triggers as L1 items too).
// Project was upgraded to Flowbite v4.0.2, whose initAccordions() has the
// proper `$triggerEl.closest('[data-accordion]') === $accordionEl` scoping
// check built in, so nested accordions now work correctly with plain native
// data-accordion attributes again — no manual JS init needed. See
// /memories/repo/notes.md for the full history if this regresses.

// filter pill kategori (all / hard / soft / infra)
function filterSkillCategory(category, buttonElement) {
  const pills = document.querySelectorAll("#filter-container .filter-pill");
  pills.forEach((p) => {
    p.classList.remove("bg-primary", "text-white");
    p.classList.add(
      "bg-white",
      "dark:bg-gray-700",
      "text-slate-500",
      "dark:text-slate-300",
    );
  });
  buttonElement.classList.remove(
    "bg-white",
    "dark:bg-gray-700",
    "text-slate-500",
    "dark:text-slate-300",
  );
  buttonElement.classList.add("bg-primary", "text-white");

  const hardSection = document.getElementById("hard-skills-section");
  const softSection = document.getElementById("soft-skills-section");
  const groups = document.querySelectorAll(".skill-category-group");

  // mobile accordion L1 items mirroring hard/soft desktop sections
  const mobileHardHeading = document.getElementById("acc-hard-heading");
  const mobileHardBody = document.getElementById("acc-hard-body");
  const mobileSoftHeading = document.getElementById("acc-soft-heading");
  const mobileSoftBody = document.getElementById("acc-soft-body");
  const mobileCoreHeading = document.getElementById("acc-core-heading");
  const mobileCoreBody = document.getElementById("acc-core-body");
  const mobileHardEls = [mobileHardHeading, mobileHardBody];
  // soft + core strengths sit together like desktop's soft-skills-section
  const mobileSoftEls = [
    mobileSoftHeading,
    mobileSoftBody,
    mobileCoreHeading,
    mobileCoreBody,
  ];
  const showMobile = (els) =>
    els.forEach((el) => el && el.classList.remove("hidden"));
  const hideMobile = (els) =>
    els.forEach((el) => el && el.classList.add("hidden"));

  if (category === "all") {
    groups.forEach((g) => g.classList.remove("hidden"));
    hardSection.classList.remove("hidden");
    softSection.classList.remove("hidden");
    showMobile(mobileHardEls);
    showMobile(mobileSoftEls);
  } else if (category === "hard") {
    groups.forEach((g) => {
      g.classList.toggle("hidden", g.dataset.category !== "hard");
    });
    hardSection.classList.remove("hidden");
    softSection.classList.add("hidden");
    showMobile(mobileHardEls);
    hideMobile(mobileSoftEls);
  } else if (category === "soft") {
    groups.forEach((g) => {
      if (g.dataset.category === "soft") {
        g.classList.remove("hidden");
      } else {
        g.classList.add("hidden");
      }
    });
    hardSection.classList.add("hidden");
    softSection.classList.remove("hidden");
    hideMobile(mobileHardEls);
    showMobile(mobileSoftEls);
  } else if (category === "infra") {
    groups.forEach((g) => {
      g.classList.toggle("hidden", g.dataset.category !== "infra");
    });
    hardSection.classList.remove("hidden");
    softSection.classList.add("hidden");
    showMobile(mobileHardEls);
    hideMobile(mobileSoftEls);
  }
}

// live search skill dengan multi kelas transisi visual (bisa redup)
function searchSkills(query) {
  const term = query.trim().toLowerCase();
  const items = document.querySelectorAll(".skill-item");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const dataName = (item.dataset.name || "").toLowerCase();
    if (term === "" || text.includes(term) || dataName.includes(term)) {
      item.classList.remove("opacity-20", "scale-95");
      item.classList.add("opacity-100");
    } else {
      item.classList.add("opacity-20", "scale-95");
      item.classList.remove("opacity-100");
    }
  });
}

// salin ringkasan semua skill ke clipboard
function copySkillsSummary() {
  const items = document.querySelectorAll(".skill-item");
  const summary = Array.from(items)
    .map((item) => item.textContent.trim())
    .join(", ");

  const finish = () => {
    const toast = document.getElementById("copy-toast");
    if (!toast) return;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summary).then(finish).catch(finish);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = summary;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      /* clipboard copy fallback failed silently */
    }
    document.body.removeChild(textarea);
    finish();
  }
}

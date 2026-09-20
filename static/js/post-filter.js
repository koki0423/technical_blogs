(() => {
  const filter = document.querySelector("[data-post-filter]");

  if (!filter) return;

  const buttons = [...filter.querySelectorAll("[data-tag-filter]")];
  const posts = [...document.querySelectorAll("[data-post-item]")];
  const status = filter.querySelector("[data-post-filter-status]");
  const initialTag = new URLSearchParams(window.location.search).get("tag");
  const availableTags = new Set(buttons.map((button) => button.dataset.tagFilter));

  const displayName = (tag) => buttons.find((button) => button.dataset.tagFilter === tag)?.childNodes[0].textContent.trim() || tag;

  const applyFilter = (tag, updateUrl) => {
    const activeTag = availableTags.has(tag) ? tag : "all";
    let visibleCount = 0;

    posts.forEach((post) => {
      const tags = post.dataset.tags ? post.dataset.tags.split(",") : [];
      const isVisible = activeTag === "all" || tags.includes(activeTag);

      post.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    buttons.forEach((button) => {
      const isActive = button.dataset.tagFilter === activeTag;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (status) {
      status.textContent = activeTag === "all"
        ? `すべての記事を表示しています（${visibleCount}件）。`
        : `タグ「${displayName(activeTag)}」の記事を表示しています（${visibleCount}件）。`;
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (activeTag === "all") url.searchParams.delete("tag");
      else url.searchParams.set("tag", activeTag);
      window.history.replaceState({}, "", url);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.tagFilter, true));
  });

  applyFilter(initialTag && availableTags.has(initialTag) ? initialTag : "all", false);
})();

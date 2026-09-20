(() => {
  const images = [...document.querySelectorAll(".article-content img")];

  if (!images.length) return;

  const dialog = document.createElement("dialog");
  const closeButton = document.createElement("button");
  const figure = document.createElement("figure");
  const viewer = document.createElement("img");
  const caption = document.createElement("figcaption");
  let trigger = null;

  dialog.className = "image-lightbox";
  dialog.setAttribute("aria-label", "画像の拡大表示");
  closeButton.className = "image-lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "拡大表示を閉じる");
  closeButton.textContent = "×";
  figure.className = "image-lightbox-figure";
  viewer.className = "image-lightbox-image";
  caption.className = "image-lightbox-caption";

  figure.append(viewer, caption);
  dialog.append(closeButton, figure);
  document.body.append(dialog);

  const open = (image) => {
    trigger = image;
    viewer.src = image.currentSrc || image.src;
    viewer.alt = image.alt;
    caption.textContent = image.alt;
    caption.hidden = !image.alt;
    dialog.showModal();
    closeButton.focus();
  };

  const close = () => dialog.close();

  images.forEach((image) => {
    const description = image.alt ? `画像を拡大: ${image.alt}` : "画像を拡大";

    image.classList.add("image-zoomable");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-haspopup", "dialog");
    image.setAttribute("aria-label", description);
    image.addEventListener("click", () => open(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(image);
      }
    });
  });

  closeButton.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener("close", () => {
    viewer.removeAttribute("src");
    trigger?.focus();
    trigger = null;
  });
})();

import DOMPurify from "dompurify";

// The blog editor (Quill 1.x) saves a pasted or typed URL as plain text unless
// someone selects it and applies the link button. This turns any bare
// http(s):// address in a post into a real, clickable link when the post is
// displayed, so every post — old and new — works without re-editing it.
//
// Sanitises first, then builds the anchors with DOM APIs (never string
// concatenation), so the output is still safe to inject.

const BARE_URL = /https?:\/\/[^\s<>"]+/gi;
const TRAILING_PUNCTUATION = /[.,;:!?)\]'"]+$/;
const OWN_HOST = /^https?:\/\/(www\.)?elonatech\.com\.ng(\/|$|\?|#)/i;

export const linkifyPostHtml = (html) => {
  const clean = DOMPurify.sanitize(html || "");
  if (typeof DOMParser === "undefined") return clean;

  const doc = new DOMParser().parseFromString(`<body>${clean}</body>`, "text/html");
  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);

  const textNodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    // Skip text already inside a link so existing links are never nested.
    if (!node.parentElement.closest("a") && /https?:\/\//i.test(node.nodeValue)) {
      textNodes.push(node);
    }
  }

  textNodes.forEach((node) => {
    const text = node.nodeValue;
    const frag = doc.createDocumentFragment();
    let last = 0;

    for (const match of text.matchAll(BARE_URL)) {
      const trimmed = match[0].replace(TRAILING_PUNCTUATION, "");
      if (!trimmed) continue;

      frag.appendChild(doc.createTextNode(text.slice(last, match.index)));
      const a = doc.createElement("a");
      a.setAttribute("href", trimmed);
      a.textContent = trimmed;
      // Links to our own site stay in the same tab; everything else opens
      // in a new one (with noopener so the new page can't touch this one).
      if (!OWN_HOST.test(trimmed)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
      frag.appendChild(a);
      last = match.index + trimmed.length;
    }

    frag.appendChild(doc.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });

  return doc.body.innerHTML;
};

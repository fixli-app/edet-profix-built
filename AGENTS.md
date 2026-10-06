<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public site as a single-page experience with anchored sections because the business needs a simple, direct customer journey.
- Reuse the shared semantic design tokens and UI controls so the brand remains consistent and maintainable.
- Keep all visible site copy in a local typed translation dictionary and persist language preference in browser storage, because the single-page site must work consistently in five languages without a translation service.
- Store site images as real files in public/images and point asset.json urls there — the site is also deployed to Vercel, where Lovable-hosted asset paths do not resolve.
- Gallery project cards open their complete image sequence directly in the shared ImageLightbox instead of rendering expanded image grids, to keep browsing compact on mobile.

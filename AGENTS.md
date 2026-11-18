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

## Architecture

- All portfolio copy (identity, hero, projects, experience, skills, leadership, education, contact, footer) lives in `src/data/portfolio.ts` — edit content there, never in components. Unconfirmed fields (tech stack, links, screenshots, project status, contact URLs) are intentionally empty and hidden in the UI until the owner fills them in.
- Fonts (Syne, Space Grotesk, JetBrains Mono) load via `<link>` in `src/routes/__root.tsx`; never @import remote fonts in `src/styles.css`.

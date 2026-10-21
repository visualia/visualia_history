# visualia_history

Archive of the Visualia repos from 2020–2022: a JavaScript framework for
creating interactive learning experiences in the browser. Each folder is one
former repo with its **full commit history**; every former branch is kept as
`<folder>/<branch>` (111 branches in total).

| Folder | Was | When | What it was |
|---|---|---|---|
| [`2020_editor/`](2020_editor/) | `editor` | 2020-03 → 2020-04 | Microsoft's Monaco code editor (the editor inside VS Code) packaged as a ready-to-import ES module, served from GitHub Pages so Visualia pages could add a live code editor with one script tag. |
| [`2021_prev/`](2021_prev/) | `visualia-prev` | 2021-06 → 2021-08 | The main Visualia of 2021: a Vue-based library for interactive learning experiences in the browser, with SVG, math, animation, p5 and three.js helpers. |
| [`2021_visualia2_test/`](2021_visualia2_test/) | `visualia_tmp` | 2021-06 | A one-week test bed for Visualia 2's tooling: TypeScript library build with Vite, VitePress docs, Cypress tests and a release setup, tried out before the real visualia2. |
| [`2021_editor/`](2021_editor/) | `visualia-editor` | 2021-06 → 2021-07 | A browser editor for writing Visualia pages: Monaco on one side, live Markdown + Visualia preview on the other (Vue, marked, monaco-editor). |
| [`2021_create_vitepress/`](2021_create_vitepress/) | `create-visualia-vitepress` | 2021-06 | Starter template showing Visualia inside VitePress documentation sites. |
| [`2021_create_slidev/`](2021_create_slidev/) | `create-visualia-slidev` | 2021-06 | Starter template showing Visualia inside Slidev slide decks. |
| [`2021_visualia2/`](2021_visualia2/) | `visualia2` | 2021-12 | A Vue 3 + TypeScript rewrite (Visualia 2): a Markdown-to-Vue compiler, KaTeX math, examples and a VitePress setup. |
| [`2021_vite/`](2021_vite/) | `visualia-vite` | 2021-12 | Minimal starter: Visualia 3 in a plain Vue 3 + Vite app, with Markdown pages. |
| [`2021_vitepress/`](2021_vitepress/) | `visualia-vitepress` | 2021-12 | Minimal starter: Visualia 3 inside a VitePress site. |
| [`2022_visualia3/`](2022_visualia3/) | `visualia3` | 2021-12 → 2022-01 | The last framework rewrite (Visualia 3): Vue 3 components and functions for interactive diagrams: paths and points, transforms, PDF export (v-pdf), KaTeX, with docs and tests. |

Not in this archive:

- [`visualia/visualia_original`](https://github.com/visualia/visualia_original):
  the original framework (2018–2022), kept as its own archived repo because its
  documentation site is still live at https://visualia.github.io/visualia_original/.
- [`visualia/visualia`](https://github.com/visualia/visualia): the current
  Visualia (2026 onward), a shared canvas and studio for learning with AI.

To see one project's history: `git log -- 2021_prev/`.
To check out a former branch: `git switch 2022_visualia3/canvas3`.

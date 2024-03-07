<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">PRUEBA-TECNICA-NEXTJS</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/soyRicardoCastro/prueba-tecnica-nextjs?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/soyRicardoCastro/prueba-tecnica-nextjs?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/soyRicardoCastro/prueba-tecnica-nextjs?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/soyRicardoCastro/prueba-tecnica-nextjs?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=flat&logo=Typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=Next.js&logoColor=white" alt="Next.js">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue?style=flat&logo=tailwind-css">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running prueba-tecnica-nextjs](#-running-prueba-tecnica-nextjs)

---

## 📍 Overview

<code>This project is built with the latest version of NextJS and Tailwind, it is a note app, using the latest in nextjs that are server components, keeping state of auth in all its pages</code>

---

## 📦 Features

1. **Authentication**: Implements authentication with NextAuth.js and middlewares.
2. **Posts**: Allows you to create, edit, and delete notes.
3. **Dashboard**: Allows you to manage notes and user profile.
4. **Editor**: Allows you to edit your notes.
5. **EditorJS**: Use EditorJS for note editing.
6. **Tailwind**: Use Tailwind CSS for the look and feel of the app.
7. **Prisma**: Uses Prisma for database management.
---

## 📂 Repository Structure

```sh
└── prueba-tecnica-nextjs/
    ├── README.md
    ├── bun.lockb
    ├── components.json
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.js
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── manifest.json
    │   ├── next.svg
    │   └── vercel.svg
    ├── src
    │   ├── app
    │   │   ├── (auth)
    │   │   │   ├── layout.tsx
    │   │   │   ├── login
    │   │   │   │   └── page.tsx
    │   │   │   └── register
    │   │   │       └── page.tsx
    │   │   ├── (dashboard)
    │   │   │   └── dashboard
    │   │   │       ├── layout.tsx
    │   │   │       ├── loading.tsx
    │   │   │       ├── page.tsx
    │   │   │       └── settings
    │   │   ├── (editor)
    │   │   │   └── editor
    │   │   │       ├── [postId]
    │   │   │       └── layout.tsx
    │   │   ├── (home)
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── api
    │   │   │   ├── auth
    │   │   │   │   └── [...nextauth]
    │   │   │   ├── posts
    │   │   │   │   ├── [postId]
    │   │   │   │   └── route.ts
    │   │   │   └── users
    │   │   │       └── [userId]
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── robots.ts
    │   ├── assets
    │   │   └── fonts
    │   │       └── CalSans-SemiBold.woff2
    │   ├── components
    │   │   ├── card-skeleton.tsx
    │   │   ├── editor.tsx
    │   │   ├── empty-placeholder.tsx
    │   │   ├── header.tsx
    │   │   ├── icons.tsx
    │   │   ├── main-nav.tsx
    │   │   ├── mobile-nav.tsx
    │   │   ├── mode-toggle.tsx
    │   │   ├── nav.tsx
    │   │   ├── page-header.tsx
    │   │   ├── post-create-button.tsx
    │   │   ├── post-item.tsx
    │   │   ├── post-operations.tsx
    │   │   ├── shell.tsx
    │   │   ├── sidebar-nav.tsx
    │   │   ├── site-footer.tsx
    │   │   ├── tailwind-indicator.tsx
    │   │   ├── theme-provider.tsx
    │   │   ├── ui
    │   │   │   ├── accordion.tsx
    │   │   │   ├── alert-dialog.tsx
    │   │   │   ├── alert.tsx
    │   │   │   ├── avatar.tsx
    │   │   │   ├── badge.tsx
    │   │   │   ├── button.tsx
    │   │   │   ├── calendar.tsx
    │   │   │   ├── card.tsx
    │   │   │   ├── checkbox.tsx
    │   │   │   ├── collapsible.tsx
    │   │   │   ├── command.tsx
    │   │   │   ├── context-menu.tsx
    │   │   │   ├── dialog.tsx
    │   │   │   ├── drawer.tsx
    │   │   │   ├── dropdown-menu.tsx
    │   │   │   ├── form.tsx
    │   │   │   ├── hover-card.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── menubar.tsx
    │   │   │   ├── navigation-menu.tsx
    │   │   │   ├── pagination.tsx
    │   │   │   ├── popover.tsx
    │   │   │   ├── progress.tsx
    │   │   │   ├── select.tsx
    │   │   │   ├── separator.tsx
    │   │   │   ├── sheet.tsx
    │   │   │   ├── skeleton.tsx
    │   │   │   ├── slider.tsx
    │   │   │   ├── sonner.tsx
    │   │   │   ├── switch.tsx
    │   │   │   ├── table.tsx
    │   │   │   ├── tabs.tsx
    │   │   │   ├── textarea.tsx
    │   │   │   ├── toast.tsx
    │   │   │   ├── toaster.tsx
    │   │   │   ├── toggle-group.tsx
    │   │   │   ├── toggle.tsx
    │   │   │   ├── tooltip.tsx
    │   │   │   └── use-toast.ts
    │   │   ├── user-account-nav.tsx
    │   │   ├── user-auth-form.tsx
    │   │   ├── user-avatar.tsx
    │   │   └── user-name-form.tsx
    │   ├── config
    │   │   ├── dashboard.ts
    │   │   └── site.ts
    │   ├── env.mjs
    │   ├── hooks
    │   │   └── use-lock-body.ts
    │   ├── lib
    │   │   ├── auth.ts
    │   │   ├── db.ts
    │   │   ├── session.ts
    │   │   ├── utils.ts
    │   │   └── validations
    │   │       ├── post.ts
    │   │       └── user.ts
    │   ├── middleware.ts
    │   ├── styles
    │   │   └── editor.css
    │   └── types
    │       └── index.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---



## 🚀 Getting Started

***Requirements***

Ensure you have the following installed on your system:

* **Node**: `version 18.x`
* **npm**: `version 8.x`
* **pnpm**: `version 7.x`

### ⚙️ Installation

1. Clone the prueba-tecnica-nextjs repository:

```sh
git clone https://github.com/soyRicardoCastro/prueba-tecnica-nextjs
```

2. Change to the project directory:

```sh
cd prueba-tecnica-nextjs
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running prueba-tecnica-nextjs

Use the following command to run prueba-tecnica-nextjs:

```sh
npm run dev
```

### 🧪 Build

To run build:

```sh
npm run build
```

---

# 星动科技官网 · Star Innovation Website

[English](./README.en.md) | 中文

星动科技（Star Innovation）官网，聚焦**外贸、软件开发、美容医疗**三大业务板块，以数据、内容和全球协作能力，帮助企业建立更可持续的增长方式。

## 线上地址

- **生产环境**：https://star-innovation.pages.dev/

## 技术栈

- [Astro](https://astro.build) 7（静态输出）
- [Tailwind CSS](https://tailwindcss.com) v4
- [Cloudflare Pages](https://pages.cloudflare.com) 部署

## 本地开发

```bash
npm install
npm run dev        # 启动开发服务器（热更新）
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## 部署

```bash
npm run build
npx wrangler pages deploy dist --project-name star-innovation
```

## 页面结构

| 页面 | 路由 |
|------|------|
| 首页 | `/` |
| 外贸服务 | `/foreign-trade/` |
| 软件开发 | `/software/` |
| 美容医疗 | `/beauty-medical/` |
| 关于我们 | `/about/` |
| 联系我们 | `/contact/` |
| 404 | `/404` |

## 目录结构

```
src/
├── components/     # 组件（Header/Footer/BusinessCard 等）
├── data/site.ts    # 站点与业务内容（数据驱动，业务文案集中于此）
├── layouts/        # 布局
├── pages/          # 页面
├── scripts/        # 客户端脚本（主题切换）
└── styles/         # 全局样式与设计系统（翡翠绿 + 香槟金配色）
```

## 内容维护

三大业务板块（外贸 / 软件开发 / 美容医疗）的能力点与服务流程文案统一维护在 `src/data/site.ts`，新增或调整业务内容无需改动页面组件。

## 分支约定

```
main ← 唯一主干（生产代码）
feature/* ← 功能迭代分支（开发完成合并回 main）
```

功能迭代基于 feature 分支开发，完成后合并回 `main`。

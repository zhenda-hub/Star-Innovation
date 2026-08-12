# 星动科技官网 · Star Innovation Website

星动科技（Star Innovation）官网，聚焦外贸、自媒体、美容医疗三大业务板块。

## 线上地址

- **生产环境**：https://star-innovation.pages.dev/
- **分支预览**：https://feature-website.star-innovation.pages.dev/

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
| 自媒体服务 | `/self-media/` |
| 美容医疗 | `/beauty-medical/` |
| 关于我们 | `/about/` |
| 联系我们 | `/contact/` |

## 目录结构

```
src/
├── components/     # 组件（Header/Footer/BusinessCard 等）
├── data/site.ts    # 站点与业务内容（数据驱动）
├── layouts/        # 布局
├── pages/          # 页面
├── scripts/        # 客户端脚本（主题切换）
└── styles/         # 全局样式与设计系统
```

## 分支 / Worktree 约定

```
main              ← 集成主干
feature/website   ← 整体官网（已上线）
feature/<板块>    ← 后续逐板块深化细节
```

每个业务板块使用独立分支 + worktree 开发，完成后合并回 `main`。

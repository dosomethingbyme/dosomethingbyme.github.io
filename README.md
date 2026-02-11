# 个人学术主页

本项目基于 https://github.com/RayeRen/acad-homepage.github.io 进行二次开发与改造，保留其整体结构与可维护性，并针对个人站点需求做了系统化优化。

## 基于原项目的主要改造
- 移除原模板 logo/branding，改为更干净的个人化首页呈现。
- 论文卡片（paper-box）尺寸与布局重构，提升信息密度与可读性。
- 视觉体系统一（配色、标题装饰、badge、链接、卡片阴影与动效）。
- 侧边栏与导航栏样式重做（头像、社交链接、毛玻璃与悬停反馈）。
- 交互体验优化（淡入动画、平滑滚动、统一 hover/transition）。
- 响应式布局细节完善（移动端与大屏适配）。
- SEO 与抓取友好性增强（robots.txt、sitemap、提交指南）。
- Google Scholar 引用显示与细节样式修复。

## 站点内容位置
- 主页与个人信息：`_pages/about.md`
- 站点配置：`_config.yml`
- 样式与主题：`assets/css/main.scss`

## 本地运行
1. 安装 Ruby/Jekyll 依赖。
2. 运行 `bash run_server.sh`。
3. 访问 http://127.0.0.1:4000。

## 说明与致谢
- 原始模板来自：https://github.com/RayeRen/acad-homepage.github.io
- 同时受到 minimal-mistakes 与 academicpages 的启发（详见 LICENSE）。

# 搜索引擎优化（SEO）设置指南

本指南将帮助您将网站提交到主要搜索引擎，提高网站的可见性。

## ✅ 已完成的配置

### 1. Sitemap（网站地图）
- ✅ Jekyll Sitemap 插件已启用
- ✅ 自动生成 sitemap.xml
- ✅ 网站 URL 已配置：https://aichina.me
- ✅ robots.txt 已创建并配置

### 2. Robots.txt
- ✅ 允许所有搜索引擎爬虫访问
- ✅ 排除不必要的目录
- ✅ 指向 sitemap.xml 位置

## 📋 需要完成的步骤

### 一、Google Search Console（推荐）

#### 1. 验证网站所有权

**方法A：HTML 文件验证（推荐）**
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 点击"添加资源"，选择"网址前缀"
3. 输入：`https://aichina.me`
4. 选择"HTML 文件"验证方法
5. 下载验证文件（如 `googleXXXXXXXX.html`）
6. 将文件放到网站根目录
7. 提交并推送到 GitHub
8. 返回 Google Search Console 点击"验证"

**方法B：HTML 标签验证**
1. 在 Google Search Console 选择"HTML 标签"验证
2. 复制提供的 meta 标签
3. 在 `_config.yml` 中添加：
   ```yaml
   google_site_verification: "你的验证码"
   ```
4. 提交并推送到 GitHub
5. 等待几分钟后点击"验证"

#### 2. 提交 Sitemap
1. 验证成功后，在左侧菜单选择"站点地图"
2. 在"添加新的站点地图"输入框中输入：`sitemap.xml`
3. 点击"提交"
4. 等待 Google 抓取（通常需要几天）

#### 3. 请求编入索引
1. 在 Search Console 顶部搜索框输入：`https://aichina.me`
2. 点击"请求编入索引"
3. 对重要页面重复此操作

### 二、Bing Webmaster Tools

#### 1. 验证网站
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 点击"添加网站"
3. 输入：`https://aichina.me`
4. 选择验证方法：
   - **推荐**：如果已验证 Google，可以直接导入
   - 或使用 XML 文件验证
   - 或使用 meta 标签验证

#### 2. 提交 Sitemap
1. 验证成功后，进入"站点地图"
2. 添加：`https://aichina.me/sitemap.xml`
3. 点击"提交"

### 三、百度搜索资源平台

#### 1. 验证网站
1. 访问 [百度搜索资源平台](https://ziyuan.baidu.com)
2. 注册/登录百度账号
3. 点击"用户中心" -> "站点管理" -> "添加网站"
4. 输入：`https://aichina.me`
5. 选择验证方式：
   - 文件验证（下载 HTML 文件）
   - HTML 标签验证
   - CNAME 验证

#### 2. 提交 Sitemap
1. 验证成功后，选择"数据引入" -> "链接提交"
2. 选择"sitemap"
3. 输入：`https://aichina.me/sitemap.xml`
4. 提交

#### 3. 主动推送（可选但推荐）
百度支持主动推送，可以更快被收录：
1. 在"链接提交"页面找到"主动推送"
2. 复制推送接口调用地址
3. 每次发布新内容时，可以使用 API 主动推送 URL

### 四、其他搜索引擎（可选）

#### 360 搜索
1. 访问 [360 站长平台](http://zhanzhang.so.com)
2. 添加网站并验证
3. 提交 sitemap

#### 搜狗搜索
1. 访问 [搜狗站长平台](http://zhanzhang.sogou.com)
2. 添加网站并验证
3. 提交 sitemap

## 🔍 验证 Sitemap 是否正常

### 在线检查
访问以下 URL 确认 sitemap 可访问：
- https://aichina.me/sitemap.xml
- https://aichina.me/robots.txt

### Sitemap 内容检查
Sitemap 应该包含：
- 网站首页
- 所有页面（关于、荣誉奖项等）
- 如果有博客文章，也应包含在内

### 使用工具验证
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Google Search Console 的"站点地图"报告

## 📊 监控和优化

### 1. 定期检查
- 每周查看 Google Search Console
- 关注"覆盖率"报告
- 检查是否有抓取错误

### 2. 性能优化
- 确保网站加载速度快
- 优化移动端体验
- 使用 PageSpeed Insights 检查

### 3. 内容更新
- 定期发布新内容
- 更新旧内容
- 每次更新后可以请求重新抓取

## ⏰ 预期时间线

- **Google**: 通常 3-7 天开始收录
- **Bing**: 通常 5-10 天开始收录
- **百度**: 通常 1-4 周开始收录

## 🎯 提高收录效果的建议

### 1. 提高内容质量
- 确保内容原创且有价值
- 定期更新内容
- 添加详细的页面描述

### 2. 建立外部链接
- 在学术平台添加个人主页链接
- 在社交媒体分享
- 参与学术社区

### 3. 优化页面结构
- 使用语义化的 HTML 标签
- 添加结构化数据（Schema.org）
- 优化页面标题和描述

### 4. 技术 SEO
- 确保 HTTPS 可用
- 优化页面加载速度
- 确保移动端友好

## 📝 当前配置文件

### _config.yml
```yaml
url: "https://aichina.me"
baseurl: ""
google_site_verification: ""  # 从 Google Search Console 获取
bing_site_verification: ""    # 从 Bing Webmaster 获取
baidu_site_verification: ""   # 从百度搜索资源平台获取
```

### robots.txt
位置：网站根目录
内容：已配置允许所有搜索引擎抓取

### sitemap.xml
自动生成：由 jekyll-sitemap 插件自动生成
访问地址：https://aichina.me/sitemap.xml

## ❓ 常见问题

### Q: 为什么我的网站还没被收录？
A: 新网站通常需要几天到几周时间。可以：
- 确认 sitemap 已提交
- 请求编入索引
- 建立外部链接

### Q: 如何加快收录速度？
A:
- 主动提交 URL
- 建立高质量外部链接
- 保持内容更新
- 提高网站质量

### Q: 百度收录很慢怎么办？
A: 百度收录确实较慢，建议：
- 使用主动推送功能
- 提交更多高质量内容
- 建立国内网站的外链

## 📞 需要帮助？

如果遇到问题：
1. 查看搜索引擎的帮助文档
2. 检查 Search Console 的错误报告
3. 确认网站可以正常访问
4. 检查 sitemap 格式是否正确

## ✅ 完成清单

- [ ] Google Search Console 验证
- [ ] Google Search Console 提交 sitemap
- [ ] Bing Webmaster Tools 验证
- [ ] Bing Webmaster Tools 提交 sitemap
- [ ] 百度搜索资源平台验证
- [ ] 百度搜索资源平台提交 sitemap
- [ ] 确认 sitemap.xml 可访问
- [ ] 确认 robots.txt 可访问
- [ ] 请求重要页面编入索引
- [ ] 设置每周检查提醒

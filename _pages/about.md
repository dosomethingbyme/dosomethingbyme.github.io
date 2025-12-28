---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="tech-hero">
  <div class="tech-hero__content">
    <p class="tech-hero__eyebrow">PERSONAL RESEARCH HUB</p>
    <h1 class="tech-hero__title">杨烨 · 智能系统与大模型研究</h1>
    <p>我是上海电机学院电子信息专业的硕士研究生，本科毕业于安徽新华学院软件工程专业。专注于大语言模型、强化学习与综合能源系统的交叉研究，已发表/录用 <strong>7+ 篇学术论文</strong>，涵盖 EMNLP、IEEE IoT Journal 等顶级会议期刊。
    <a href='https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用" alt="Google Scholar citations"/></a></p>
    <div class="tech-hero__actions">
      <a class="tech-button tech-button--primary" href="https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN">Google Scholar</a>
      <a class="tech-button tech-button--ghost" href="mailto:yangye@aichina.me">联系我</a>
    </div>
    <div class="tech-hero__stats">
      <div class="data-pill">
        <span class="label">论文</span>
        <span class="value">7+</span>
        <span class="note">EMNLP · IEEE IoT J. · ITSC</span>
      </div>
      <div class="data-pill">
        <span class="label">研究方向</span>
        <span class="value">3</span>
        <span class="note">LLM · RL · 综合能源</span>
      </div>
      <div class="data-pill">
        <span class="label">奖项</span>
        <span class="value">2</span>
        <span class="note">研究生国奖 & 一等学业奖</span>
      </div>
    </div>
  </div>
  <div class="tech-hero__visual">
    <div class="floating-card">
      <h3>当前聚焦</h3>
      <ul class="tech-chip-list">
        <li class="tech-chip">LLM × 多智能体</li>
        <li class="tech-chip">强化学习调度</li>
        <li class="tech-chip">综合能源系统</li>
        <li class="tech-chip">人机协同决策</li>
        <li class="tech-chip">Battery Health</li>
      </ul>
    </div>
    <div class="floating-orb floating-orb--one"></div>
    <div class="floating-orb floating-orb--two"></div>
  </div>
</div>

<div class="section-panel" id="research-focus">
  <div class="section-title">
    <span class="section-title__eyebrow">FOCUS</span>
    <h2>研究兴趣</h2>
    <p>以大语言模型为基础，探索智能体在能源、交通与工业场景中的可解释决策与协同控制。</p>
  </div>
  <div class="research-focus-grid">
    <article class="research-focus-card">
      <div class="icon">🤖</div>
      <h3>大语言模型（LLM）</h3>
      <p>构建面向任务的 LLM agent，解决信息提取、场景推理与人机交互等问题。</p>
    </article>
    <article class="research-focus-card">
      <div class="icon">🎯</div>
      <h3>强化学习</h3>
      <p>探索人类意图与规则融合的强化学习策略，支撑无人驾驶、智慧港航等应用。</p>
    </article>
    <article class="research-focus-card">
      <div class="icon">⚡</div>
      <h3>综合能源系统</h3>
      <p>在建筑与社区能源管理中引入 LLM，以实现电池调度、能耗预测与可持续运营。</p>
    </article>
  </div>
</div>

<span class='anchor' id='-xl'></span>
<div class="section-panel">
  <div class="section-title">
    <span class="section-title__eyebrow">EDUCATION</span>
    <h2>🎓 学历</h2>
  </div>
  <div class="timeline">
    <div class="timeline__item">
      <div class="timeline__year">2023.09 - 2026.03</div>
      <div class="timeline__body">
        <h3>上海电机学院 · 电子信息 · 硕士</h3>
        <p>聚焦智能系统、综合能源与大模型结合方向，位于上海。</p>
      </div>
    </div>
    <div class="timeline__item">
      <div class="timeline__year">2018.09 - 2022.07</div>
      <div class="timeline__body">
        <h3>安徽新华学院 · 软件工程 · 本科</h3>
        <p>扎实的软件工程与算法基础，位于安徽合肥。</p>
      </div>
    </div>
  </div>
</div>

<span class='anchor' id='-lwzl'></span>
<div class="section-panel" id="publications">
  <div class="section-title">
    <span class="section-title__eyebrow">PUBLICATIONS</span>
    <h2>📝 论文与成果</h2>
    <p>聚焦大模型安全、智能体协同与能源系统的多篇代表性工作。</p>
  </div>

  <h3 class="subsection-title">英文</h3>
  ---
  <div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/emnlp2025.svg' alt="sym" width="100%"></div></div>
  <div class='paper-box-text' markdown="1">

-       `Ye Yang`, Donghe Li, et al. MisinfoBench: A Multi-Dimensional Benchmark for Evaluating LLMs' Resilience to Misinformation. *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)*, 2025. (CCF-B, 已录用) [[网页]](https://doi.org/10.18653/v1/2025.findings-emnlp.540)

  </div>
  </div>

  <div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE IoT J. 2025</div><img src='images/iotj2025.svg' alt="sym" width="100%"></div></div>
  <div class='paper-box-text' markdown="1">

-       `Ye Yang`, et al. Human-in-the-Loop Battery Scheduling in Buildings via Intent-Guided Rule–Reinforcement Learning. *IEEE Internet of Things Journal*, 2025. (SCI 二区 Top, 已发表) [[网页]](https://dx.doi.org/10.1109/JIOT.2025.3618644)

  </div>
  </div>

  <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ITSC 2025</div><img src='images/itsc2025.svg' alt="sym" width="100%"></div></div>
  <div class='paper-box-text' markdown="1">

-       `Ye Yang`, Donghe Li*, et al. Detection and Correction of Driver Mode Confusion Using LLM-Based Semantic Feedback in SAE Level 2 Automation. *IEEE Intelligent Transportation Systems Conference (ITSC)*, 2025. (交通顶会, 已录用)

  </div>
  </div>

- `Ye Yang`, Qingyu Yang, Donghe Li, et al. LLM-MAC: LLM-Driven Multi-Agent Coordination for Generalizable Home Energy Management. *Chinese Control Conference (CCC)*, 2025. (EI, 已录用) [[网页]](https://doi.org/10.23919/CCC64809.2025.11179521)
- `Ye Yang`, Rong Hu, et al. LLM-BAS: Large Language Model-Based Battery Health-Aware Scheduling in Building Energy Systems. *IEEE-China Conference on System Simulation Technology and its Applications (CCSSTA)*, 2025. (EI, 已检索) [[网页]](https://doi.org/10.1109/IEEECONF65522.2025.11137012)
- `Ye Yang`, Qingyu Yang, et al. Large Language Model-Driven Rule Synthesis for Adaptive Household Energy Management. *Cyber-Physical Energy Systems*, 2025. (中国卓越期刊, 已录用)
- Jiaheng Li, Donghe Li, `Ye Yang`, et al. Zero-shot Load Forecasting for Integrated Energy Systems: A Large Language Model-based Framework with Multi-task Learning. *Neurocomputing*, 2025. (SCI 二区, 已检索)  [[网页]](https://doi.org/10.1016/j.neucom.2025.131288)
- Rong Hu, `Ye Yang`（共一通讯）, et al. Large Language Model Driven Transferable Key Information Extraction Mechanism for Nonstandardized Tables. *Scientific Reports*, 2025. (SCI 三区, 已检索)  [[网页]](https://dx.doi.org/10.1038/s41598-025-15627-z)

  <h3 class="subsection-title">专利</h3>
  ---
  <ul class="stacked-list">
    <li>孙莉, `杨烨`, 等. 一种基于大模型进行海关命名实体识别方法.</li>
    <li>孙莉, `杨烨`, 等. 基于知识图谱和大规模语言模型的海关实务问答识别方法.</li>
  </ul>

  <h3 class="subsection-title">软著</h3>
  ---
  <ul class="stacked-list">
    <li>`杨烨`. 基于智能分类的大学生技术交流平台.</li>
  </ul>
</div>

<span class='anchor' id='-ryjx'></span>
<div class="section-panel">
  <div class="section-title">
    <span class="section-title__eyebrow">HONORS</span>
    <h2>🏅 荣誉奖项</h2>
  </div>
  <ul class="stacked-list award-list">
    <li><strong>2025</strong> 获得 研究生国家奖学金</li>
    <li><strong>2025</strong> 获得 研究生一等学业奖学金</li>
  </ul>
</div>

<span class='anchor' id='-gzsx'></span>
<div class="section-panel">
  <div class="section-title">
    <span class="section-title__eyebrow">EXPERIENCE</span>
    <h2>💻 工作实习</h2>
  </div>
  <div class="timeline">
    <div class="timeline__item">
      <div class="timeline__year">2025.05 - 2025.09</div>
      <div class="timeline__body">
        <h3>方舟智能港航口岸服务(青岛)有限公司 · 青岛港集团</h3>
        <p>参与智慧港航场景的智能调度研发，推动港航自动化与大模型结合。</p>
      </div>
    </div>
    <div class="timeline__item">
      <div class="timeline__year">2024.01 - 2025.02</div>
      <div class="timeline__body">
        <h3>上海亿通国际股份有限公司 · 上海</h3>
        <p>负责跨境贸易业务的智能化方案，探索知识图谱与大模型的应用。</p>
      </div>
    </div>
  </div>
</div>

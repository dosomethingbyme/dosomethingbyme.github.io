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

<div class="hero-panel">
  <p class="hero-panel__eyebrow">Yang Ye · 上海电机学院电子信息硕士研究生</p>
  <h1 class="hero-panel__title">面向智能能源与语言智能的研究者</h1>
  <p class="hero-panel__lede">
    我专注于大语言模型、强化学习与综合能源系统的交叉研究，探索如何以稳健、可解释的智能方法连接人机协作场景。
    我已经发表/录用 7+ 篇学术论文
    <a href='https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用" alt="Google Scholar"></a>，
    正在将 LLM 能力引入能源系统优化与决策。
  </p>
  <div class="hero-panel__meta">
    <div class="hero-panel__meta-item">
      <span>研究方向</span>
      <p>大语言模型 · 强化学习 · 综合能源系统</p>
    </div>
    <div class="hero-panel__meta-item">
      <span>所在机构</span>
      <p>上海电机学院 · 电子信息专业硕士</p>
    </div>
    <div class="hero-panel__meta-item">
      <span>当前关注</span>
      <p>面向能源场景的人机协同与可解释智能</p>
    </div>
  </div>
  <div class="hero-panel__actions">
    <a class="hero-panel__link" href="mailto:yangye@aichina.me">联系我</a>
    <a class="hero-panel__link hero-panel__link--ghost" href="https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN" target="_blank" rel="noreferrer noopener">Google Scholar</a>
  </div>
  <div class="hero-panel__stats">
    <article class="stat-card">
      <span class="stat-card__value">7+</span>
      <span class="stat-card__label">论文 / 专利 / 软著</span>
    </article>
    <article class="stat-card">
      <span class="stat-card__value">LLM × Energy</span>
      <span class="stat-card__label">将语言智能引入能源管理与交通系统</span>
    </article>
    <article class="stat-card stat-card--badge">
      <span class="stat-card__value">Google Scholar</span>
      <span class="stat-card__badge">
        <a href='https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用" alt="Google Scholar"/></a>
      </span>
    </article>
  </div>
</div>

<section class="section-block">
  <div class="section-heading">
    <p class="section-heading__eyebrow">Research</p>
    <h2>研究兴趣</h2>
    <p>围绕可信大模型、强化学习与综合能源系统构建具有工程落地能力的智能体。</p>
  </div>
  <div class="pill-list">
    <span class="pill">大语言模型（LLM）</span>
    <span class="pill">强化学习（Reinforcement Learning）</span>
    <span class="pill">综合能源系统</span>
  </div>
</section>

<span class='anchor' id='-xl'></span>
<section class="section-block">
  <div class="section-heading">
    <p class="section-heading__eyebrow">Academic Journey</p>
    <h2>🎓 学历</h2>
  </div>
  <div class="timeline">
    <article class="timeline__item">
      <div class="timeline__time">2023.09 - 2026.03</div>
      <div class="timeline__content">
        <h3>上海电机学院 · 电子信息（硕士）</h3>
        <p>上海 · 专注于语言智能与能源系统协同</p>
      </div>
    </article>
    <article class="timeline__item">
      <div class="timeline__time">2018.09 - 2022.07</div>
      <div class="timeline__content">
        <h3>安徽新华学院 · 软件工程（本科）</h3>
        <p>安徽合肥 · 夯实计算机科学与工程基础</p>
      </div>
    </article>
  </div>
</section>

<span class='anchor' id='-lwzl'></span>
<section class="section-block">
  <div class="section-heading">
    <p class="section-heading__eyebrow">Publications</p>
    <h2>📝 论文专利</h2>
  </div>
  <div class="section-card">
    <h3>英文论文</h3>
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
  </div>

  <div class="section-card">
    <h3>专利</h3>
    <ul class="plain-list">
      <li>孙莉, `杨烨`, 等. 一种基于大模型进行海关命名实体识别方法.</li>
      <li>孙莉, `杨烨`, 等. 基于知识图谱和大规模语言模型的海关实务问答识别方法.</li>
    </ul>
  </div>

  <div class="section-card">
    <h3>软著</h3>
    <ul class="plain-list">
      <li>`杨烨`. 基于智能分类的大学生技术交流平台.</li>
    </ul>
  </div>
</section>

<span class='anchor' id='-ryjx'></span>
<section class="section-block">
  <div class="section-heading">
    <p class="section-heading__eyebrow">Recognition</p>
    <h2>🏅 荣誉奖项</h2>
  </div>
  <div class="list-card">
    <span class="list-card__time">2025</span>
    <p>研究生国家奖学金</p>
  </div>
  <div class="list-card">
    <span class="list-card__time">2025</span>
    <p>研究生一等学业奖学金</p>
  </div>
</section>

<span class='anchor' id='-gzsx'></span>
<section class="section-block">
  <div class="section-heading">
    <p class="section-heading__eyebrow">Experience</p>
    <h2>💻 工作实习</h2>
  </div>
  <div class="timeline timeline--compact">
    <article class="timeline__item">
      <div class="timeline__time">2025.05 - 2025.09</div>
      <div class="timeline__content">
        <h3>方舟智能港航口岸服务(青岛)有限公司 · 青岛港集团</h3>
        <p>聚焦口岸业务的智能产品化与大模型应用</p>
      </div>
    </article>
    <article class="timeline__item">
      <div class="timeline__time">2024.01 - 2025.02</div>
      <div class="timeline__content">
        <h3>上海亿通国际股份有限公司 · 上海</h3>
        <p>负责能源与港航领域的数据智能研发</p>
      </div>
    </article>
  </div>
</section>

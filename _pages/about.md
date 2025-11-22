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

<div class="page-shell">
  <section class="aero-card hero-card">
    <p class="lead-intro">我是上海电机学院电子信息专业的硕士研究生。本科毕业于安徽新华学院软件工程专业。我已经发表/录用 7+ 篇学术论文 <a href='https://scholar.google.com/citations?user=6j4_bnUAAAAJ&hl=zh-CN'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用"></a>。</p>
    <div class="chip-row">
      <span class="chip">大语言模型（LLM）</span>
      <span class="chip">强化学习（Reinforcement Learning）</span>
      <span class="chip">综合能源系统</span>
    </div>
  </section>

  <span class='anchor' id='-xl'></span>
  <section class="card-section">
    <div class="section-header">
      <h2 class="section-title">🎓 学历</h2>
    </div>
    <div class="card-grid card-grid--two">
      <div class="info-card">
        <span class="info-card__eyebrow">2023.09 - 2026.03</span>
        <div class="info-card__title">上海电机学院 电子信息</div>
        <div class="info-card__meta">上海, 硕士</div>
      </div>
      <div class="info-card">
        <span class="info-card__eyebrow">2018.09 - 2022.07</span>
        <div class="info-card__title">安徽新华学院 软件工程</div>
        <div class="info-card__meta">安徽合肥, 本科</div>
      </div>
    </div>
  </section>

  <span class='anchor' id='-lwzl'></span>
  <section class="card-section">
    <div class="section-header">
      <h2 class="section-title">📝 论文专利</h2>
    </div>

    <div class="section-frame">
      <h3>英文</h3>
      <div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/emnlp2025.svg' alt="sym" width="100%"></div></div>
      <div class='paper-box-text' markdown="1">

-       Ye Yang, Donghe Li, et al. MisinfoBench: A Multi-Dimensional Benchmark for Evaluating LLMs' Resilience to Misinformation. *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)*, 2025. (CCF-B, 已录用) [[网页]](https://doi.org/10.18653/v1/2025.findings-emnlp.540)

      </div>
      </div>

      <div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE IoT J. 2025</div><img src='images/iotj2025.svg' alt="sym" width="100%"></div></div>
      <div class='paper-box-text' markdown="1">

-       Ye Yang, et al. Human-in-the-Loop Battery Scheduling in Buildings via Intent-Guided Rule–Reinforcement Learning. *IEEE Internet of Things Journal*, 2025. (SCI 二区 Top, 已发表) [[网页]](https://dx.doi.org/10.1109/JIOT.2025.3618644)

      </div>
      </div>

      <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ITSC 2025</div><img src='images/itsc2025.svg' alt="sym" width="100%"></div></div>
      <div class='paper-box-text' markdown="1">

-       Ye Yang, Donghe Li*, et al. Detection and Correction of Driver Mode Confusion Using LLM-Based Semantic Feedback in SAE Level 2 Automation. *IEEE Intelligent Transportation Systems Conference (ITSC)*, 2025. (交通顶会, 已录用)

      </div>
      </div>

      <ul class="card-list">
        <li class="card-list__item">Ye Yang, Qingyu Yang, Donghe Li, et al. LLM-MAC: LLM-Driven Multi-Agent Coordination for Generalizable Home Energy Management. *Chinese Control Conference (CCC)*, 2025. (EI, 已录用) [[网页]](https://doi.org/10.23919/CCC64809.2025.11179521)</li>
        <li class="card-list__item">Ye Yang, Rong Hu, et al. LLM-BAS: Large Language Model-Based Battery Health-Aware Scheduling in Building Energy Systems. *IEEE-China Conference on System Simulation Technology and its Applications (CCSSTA)*, 2025. (EI, 已检索) [[网页]](https://doi.org/10.1109/IEEECONF65522.2025.11137012)</li>
        <li class="card-list__item">Ye Yang, Qingyu Yang, et al. Large Language Model-Driven Rule Synthesis for Adaptive Household Energy Management. *Cyber-Physical Energy Systems*, 2025. (中国卓越期刊, 已录用)</li>
        <li class="card-list__item">Jiaheng Li, Donghe Li, Ye Yang, et al. Zero-shot Load Forecasting for Integrated Energy Systems: A Large Language Model-based Framework with Multi-task Learning. *Neurocomputing*, 2025. (SCI 二区, 已检索)  [[网页]](https://doi.org/10.1016/j.neucom.2025.131288)</li>
        <li class="card-list__item">Rong Hu, Ye Yang（共一通讯）, et al. Large Language Model Driven Transferable Key Information Extraction Mechanism for Nonstandardized Tables. *Scientific Reports*, 2025. (SCI 三区, 已检索)  [[网页]](https://dx.doi.org/10.1038/s41598-025-15627-z)</li>
      </ul>
    </div>

    <div class="section-frame">
      <h3>专利</h3>
      <ul class="card-list">
        <li class="card-list__item">孙莉, 杨烨, 等. 一种基于大模型进行海关命名实体识别方法.</li>
        <li class="card-list__item">孙莉, 杨烨, 等. 基于知识图谱和大规模语言模型的海关实务问答识别方法.</li>
      </ul>
    </div>

    <div class="section-frame">
      <h3>软著</h3>
      <ul class="card-list">
        <li class="card-list__item">杨烨. 基于智能分类的大学生技术交流平台.</li>
      </ul>
    </div>
  </section>

  <span class='anchor' id='-ryjx'></span>
  <section class="card-section">
    <div class="section-header">
      <h2 class="section-title">🏅 荣誉奖项</h2>
    </div>
    <ul class="card-list">
      <li class="card-list__item"><strong>2025</strong> 获得 研究生国家奖学金</li>
      <li class="card-list__item"><strong>2025</strong> 获得 研究生一等学业奖学金</li>
    </ul>
  </section>

  <span class='anchor' id='-gzsx'></span>
  <section class="card-section">
    <div class="section-header">
      <h2 class="section-title">💻 工作实习</h2>
    </div>
    <ul class="card-list">
      <li class="card-list__item"><strong>2025.05 - 2025.09</strong> 方舟智能港航口岸服务(青岛)有限公司 青岛港集团, 青岛</li>
      <li class="card-list__item"><strong>2024.01 - 2025.02</strong> 上海亿通国际股份有限公司, 上海</li>
    </ul>
  </section>
</div>

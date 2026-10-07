/* =========================================================
   김재민 포트폴리오 — 다국어(ko/en/zh/ja) · 다크/라이트 · 반응형
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. 고정 문구 번역 ---------- */
  var I18N = {
    ko: {
      'ui.skip': '본문으로 건너뛰기',
      'ui.lang': '언어',
      'ui.toDark': '다크 모드로 전환',
      'ui.toLight': '라이트 모드로 전환',
      'ui.menu': '메뉴',
      'nav.about': '소개', 'nav.skills': '기술', 'nav.projects': '프로젝트', 'nav.timeline': '이력', 'nav.contact': '연락처',
      'hero.eyebrow': '백엔드 · 데이터 개발자',
      'hero.name': '김재민',
      'hero.sub': '金載旻 · Kim Jaemin',
      'hero.lead': '데이터를 다루고 관리해 문제를 해결하는 개발자를 목표로 합니다. Spring·eGovFrame 백엔드부터 Python ETL, LLM 파인튜닝까지 직접 만들고 배포해 왔습니다.',
      'hero.cta1': '프로젝트 보기', 'hero.cta2': '연락하기',
      'hero.cron': '매시 정각 ETL 실행 · 결과는 로그로 기록',
      'hero.caption': '스마트금융과 · 2026',
      'hero.photoAlt': '김재민 프로필 사진',
      'about.title': '소개',
      'about.motto': '스스로의 가치를 증명하는 개발자가 되겠습니다.',
      'about.p1': '한국폴리텍대학 스마트금융과에서 Java 웹 개발, 데이터 엔지니어링, AI/ML을 함께 공부하고 있습니다. 수원대학교 전자공학과에서 쌓은 공학적 사고를 바탕으로, 여러 환경에서 안정적으로 동작하는 서비스와 시스템을 만드는 데 관심이 많습니다.',
      'about.p2': '데이터를 조작하고 관리해 문제를 해결하고 가치를 만드는 개발자가 되는 것이 목표입니다. 현장의 기술적 문제를 빠르게 파악하고, 데이터 기반으로 개선안을 도출하는 실무형 엔지니어로 성장하고 싶습니다.',
      'about.s1t': '책임감',
      'about.s1d': '맡은 일은 어떤 상황에서도 끝까지 완수합니다.',
      'about.s2t': '유연하고 효율적인 사고',
      'about.s2d': '목표를 위해 더 효율적인 방법을 찾고, 중간 과정을 유연하게 조정합니다. 팀원과 소통하며 더 좋은 결과를 만들어 왔습니다.',
      'about.s3t': '실행 중심으로 개선 중',
      'about.s3d': '최선의 방법을 찾다 의사결정이 늦어진 경험이 있어, 큰 틀과 우선순위를 먼저 정하고 일정에 맞춰 움직이는 습관을 만들고 있습니다.',
      'skills.title': '보유 기술',
      'skills.sub': '수업과 프로젝트에서 직접 사용해 본 기술입니다.',
      'skills.thArea': '분야', 'skills.thName': '기술명', 'skills.thLevel': '수준', 'skills.thDetail': '상세 내용',
      'projects.title': '프로젝트',
      'projects.sub': '팀·개인 프로젝트로 설계부터 배포까지 진행한 작업입니다.',
      'filter.all': '전체', 'filter.web': '웹 · 백엔드', 'filter.data': '데이터', 'filter.ai': 'AI · LLM',
      'timeline.title': '이력', 'timeline.edu': '학력 · 교육', 'timeline.cert': '자격증',
      'contact.title': '연락처',
      'contact.lead': '채용, 협업 제안 모두 환영합니다. 이메일로 연락 주세요.',
      'contact.copy': '복사', 'contact.copied': '이메일 주소를 복사했습니다.', 'contact.copyFail': '복사가 막혀 있어 주소를 선택해 두었습니다. Ctrl+C로 복사하세요.',
      'footer.note': 'HTML · CSS · JavaScript로 제작',
      'level.beginner': '초급',
      'team': '팀 프로젝트', 'solo': '개인 프로젝트',
      'link.code': '코드 보기', 'link.model': '모델 보기',
      'cat.web': '웹 · 백엔드', 'cat.data': '데이터', 'cat.ai': 'AI · LLM'
    },
    en: {
      'ui.skip': 'Skip to content',
      'ui.lang': 'Language',
      'ui.toDark': 'Switch to dark mode',
      'ui.toLight': 'Switch to light mode',
      'ui.menu': 'Menu',
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.timeline': 'Timeline', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Backend & Data Developer',
      'hero.name': 'Kim Jaemin',
      'hero.sub': '김재민 · 金載旻',
      'hero.lead': 'I want to be a developer who solves problems by handling and managing data. I have built and deployed work ranging from Spring and eGovFrame backends to Python ETL pipelines and LLM fine-tuning.',
      'hero.cta1': 'View projects', 'hero.cta2': 'Get in touch',
      'hero.cron': 'Run ETL every hour · results go to a log file',
      'hero.caption': 'Smart Finance · 2026',
      'hero.photoAlt': 'Portrait of Kim Jaemin',
      'about.title': 'About',
      'about.motto': 'A developer who proves his own value.',
      'about.p1': 'I study Java web development, data engineering and AI/ML in the Smart Finance program at Korea Polytechnics. Building on the engineering mindset I gained in Electronic Engineering at the University of Suwon, I focus on services and systems that run reliably across different environments.',
      'about.p2': 'My goal is to create value by working with data to solve real problems. I want to grow into a hands-on engineer who spots technical issues quickly and proposes data-driven improvements.',
      'about.s1t': 'Responsibility',
      'about.s1d': 'I finish what I take on, whatever the situation.',
      'about.s2t': 'Flexible, efficient thinking',
      'about.s2d': 'I look for more efficient ways to reach the goal and adjust the process as I go, working closely with teammates to get better results.',
      'about.s3t': 'Getting better at execution',
      'about.s3d': 'Searching for the best approach has sometimes slowed my decisions, so I now set the big picture and priorities first and move on schedule.',
      'skills.title': 'Skills',
      'skills.sub': 'Technologies I have used hands-on in classes and projects.',
      'skills.thArea': 'Area', 'skills.thName': 'Skill', 'skills.thLevel': 'Level', 'skills.thDetail': 'Details',
      'projects.title': 'Projects',
      'projects.sub': 'Team and personal projects taken from design through deployment.',
      'filter.all': 'All', 'filter.web': 'Web · Backend', 'filter.data': 'Data', 'filter.ai': 'AI · LLM',
      'timeline.title': 'Timeline', 'timeline.edu': 'Education', 'timeline.cert': 'Certifications',
      'contact.title': 'Contact',
      'contact.lead': 'Open to job offers and collaboration. Email is the best way to reach me.',
      'contact.copy': 'Copy', 'contact.copied': 'Email address copied.', 'contact.copyFail': 'Copying is blocked here, so the address is selected. Press Ctrl+C to copy it.',
      'footer.note': 'Built with HTML · CSS · JavaScript',
      'level.beginner': 'Beginner',
      'team': 'Team project', 'solo': 'Personal project',
      'link.code': 'View code', 'link.model': 'View model',
      'cat.web': 'Web · Backend', 'cat.data': 'Data', 'cat.ai': 'AI · LLM'
    },
    zh: {
      'ui.skip': '跳到正文',
      'ui.lang': '语言',
      'ui.toDark': '切换到深色模式',
      'ui.toLight': '切换到浅色模式',
      'ui.menu': '菜单',
      'nav.about': '简介', 'nav.skills': '技能', 'nav.projects': '项目', 'nav.timeline': '履历', 'nav.contact': '联系方式',
      'hero.eyebrow': '后端 · 数据开发者',
      'hero.name': '金载旻',
      'hero.sub': '김재민 · Kim Jaemin',
      'hero.lead': '我的目标是成为一名通过处理和管理数据来解决问题的开发者。从 Spring、eGovFrame 后端到 Python ETL 和 LLM 微调，我都亲手构建并部署过。',
      'hero.cta1': '查看项目', 'hero.cta2': '联系我',
      'hero.cron': '每小时整点执行 ETL · 结果写入日志',
      'hero.caption': '智能金融专业 · 2026',
      'hero.photoAlt': '金载旻的个人照片',
      'about.title': '简介',
      'about.motto': '成为用实力证明自身价值的开发者。',
      'about.p1': '我目前在韩国理工大学（Korea Polytechnics）智能金融专业学习 Java Web 开发、数据工程和 AI/ML。基于在水原大学电子工程专业培养的工程思维，我关注能够在各种环境中稳定运行的服务与系统。',
      'about.p2': '我的目标是通过处理和管理数据来解决问题、创造价值。希望成长为能够快速发现现场技术问题、并基于数据提出改进方案的实战型工程师。',
      'about.s1t': '责任感',
      'about.s1d': '无论遇到什么情况，都会把负责的工作坚持完成。',
      'about.s2t': '灵活高效的思维',
      'about.s2d': '为了达成目标会主动寻找更高效的方法，并灵活调整过程；与队友积极沟通，取得更好的成果。',
      'about.s3t': '正在强化执行力',
      'about.s3d': '曾因追求最佳方案而导致决策变慢，因此现在先确定整体框架和优先级，再按计划推进。',
      'skills.title': '技能',
      'skills.sub': '在课程和项目中亲自使用过的技术。',
      'skills.thArea': '领域', 'skills.thName': '技术', 'skills.thLevel': '水平', 'skills.thDetail': '详细内容',
      'projects.title': '项目',
      'projects.sub': '从设计到部署全程参与的团队及个人项目。',
      'filter.all': '全部', 'filter.web': 'Web · 后端', 'filter.data': '数据', 'filter.ai': 'AI · LLM',
      'timeline.title': '履历', 'timeline.edu': '学历 · 培训', 'timeline.cert': '资格证书',
      'contact.title': '联系方式',
      'contact.lead': '欢迎招聘与合作邀请，请通过电子邮件联系我。',
      'contact.copy': '复制', 'contact.copied': '已复制邮箱地址。', 'contact.copyFail': '当前环境无法复制，已为您选中地址，请按 Ctrl+C 复制。',
      'footer.note': '使用 HTML · CSS · JavaScript 制作',
      'level.beginner': '初级',
      'team': '团队项目', 'solo': '个人项目',
      'link.code': '查看代码', 'link.model': '查看模型',
      'cat.web': 'Web · 后端', 'cat.data': '数据', 'cat.ai': 'AI · LLM'
    },
    ja: {
      'ui.skip': '本文へスキップ',
      'ui.lang': '言語',
      'ui.toDark': 'ダークモードに切り替え',
      'ui.toLight': 'ライトモードに切り替え',
      'ui.menu': 'メニュー',
      'nav.about': '紹介', 'nav.skills': 'スキル', 'nav.projects': 'プロジェクト', 'nav.timeline': '経歴', 'nav.contact': '連絡先',
      'hero.eyebrow': 'バックエンド・データ開発者',
      'hero.name': 'キム・ジェミン',
      'hero.sub': '金載旻 · 김재민',
      'hero.lead': 'データを扱い・管理して課題を解決する開発者を目指しています。Spring・eGovFrame のバックエンドから Python ETL、LLM のファインチューニングまで、自ら作りデプロイしてきました。',
      'hero.cta1': 'プロジェクトを見る', 'hero.cta2': 'お問い合わせ',
      'hero.cron': '毎時0分に ETL を実行 · 結果はログに記録',
      'hero.caption': 'スマート金融科 · 2026',
      'hero.photoAlt': 'キム・ジェミンのプロフィール写真',
      'about.title': '紹介',
      'about.motto': '自らの価値を証明できる開発者になります。',
      'about.p1': '韓国ポリテク大学スマート金融科で、Java Web 開発・データエンジニアリング・AI/ML を学んでいます。水原大学電子工学科で培ったエンジニアリング的な思考をもとに、さまざまな環境で安定して動くサービスとシステムづくりに関心があります。',
      'about.p2': 'データを扱い・管理することで課題を解決し、価値を生み出す開発者になることが目標です。現場の技術的な課題をすばやく把握し、データに基づく改善案を出せる実務型エンジニアへ成長したいと考えています。',
      'about.s1t': '責任感',
      'about.s1d': '任された仕事は、どんな状況でも最後までやり遂げます。',
      'about.s2t': '柔軟で効率的な思考',
      'about.s2d': '目標達成のためにより効率的な方法を探し、途中のプロセスを柔軟に調整します。チームと話し合いながら、より良い成果を出してきました。',
      'about.s3t': '実行力を強化中',
      'about.s3d': '最善の方法を探すあまり意思決定が遅れた経験から、まず大枠と優先順位を決め、スケジュールどおりに動く習慣づくりをしています。',
      'skills.title': 'スキル',
      'skills.sub': '授業やプロジェクトで実際に使った技術です。',
      'skills.thArea': '分野', 'skills.thName': '技術', 'skills.thLevel': 'レベル', 'skills.thDetail': '詳細',
      'projects.title': 'プロジェクト',
      'projects.sub': '設計からデプロイまで手がけたチーム・個人プロジェクトです。',
      'filter.all': 'すべて', 'filter.web': 'Web · バックエンド', 'filter.data': 'データ', 'filter.ai': 'AI · LLM',
      'timeline.title': '経歴', 'timeline.edu': '学歴 · 教育', 'timeline.cert': '資格',
      'contact.title': '連絡先',
      'contact.lead': '採用・協業のご提案を歓迎します。メールでご連絡ください。',
      'contact.copy': 'コピー', 'contact.copied': 'メールアドレスをコピーしました。', 'contact.copyFail': 'この環境ではコピーできないため、アドレスを選択しました。Ctrl+C でコピーしてください。',
      'footer.note': 'HTML · CSS · JavaScript で制作',
      'level.beginner': '初級',
      'team': 'チームプロジェクト', 'solo': '個人プロジェクト',
      'link.code': 'コードを見る', 'link.model': 'モデルを見る',
      'cat.web': 'Web · バックエンド', 'cat.data': 'データ', 'cat.ai': 'AI · LLM'
    }
  };

  /* ---------- 2. 보유 기술 데이터 (이력서 기준) ---------- */
  var SKILLS = [
    { area: { ko: '프로그래밍 언어', en: 'Language', zh: '编程语言', ja: 'プログラミング言語' }, name: 'JavaScript',
      detail: {
        ko: ['DB를 연동한 CRUD 화면 개발', 'Vue.js · axios · ajax를 이용한 외부 API 기반 화면 개발'],
        en: ['CRUD screens connected to a database', 'Screens built on external APIs with Vue.js, axios and ajax'],
        zh: ['开发连接数据库的 CRUD 页面', '使用 Vue.js、axios、ajax 开发基于外部 API 的页面'],
        ja: ['DB と連携した CRUD 画面の開発', 'Vue.js・axios・ajax を使った外部 API ベースの画面開発'] } },
    { area: { ko: '프로그래밍 언어', en: 'Language', zh: '编程语言', ja: 'プログラミング言語' }, name: 'Python',
      detail: {
        ko: ['Jupyter Lab 설치 및 작업 환경 구축', '데이터 크롤링 및 전처리'],
        en: ['Set up Jupyter Lab work environments', 'Web crawling and data preprocessing'],
        zh: ['安装 Jupyter Lab 并搭建开发环境', '数据爬取与预处理'],
        ja: ['Jupyter Lab の導入と作業環境の構築', 'データのクローリングと前処理'] } },
    { area: { ko: '데이터베이스', en: 'Database', zh: '数据库', ja: 'データベース' }, name: 'Oracle · MariaDB · MySQL',
      detail: {
        ko: ['Oracle, MariaDB, MySQL을 활용한 쿼리 작업'],
        en: ['Writing queries on Oracle, MariaDB and MySQL'],
        zh: ['使用 Oracle、MariaDB、MySQL 编写查询'],
        ja: ['Oracle・MariaDB・MySQL を使ったクエリ作成'] } },
    { area: { ko: '자바 프레임워크', en: 'Java framework', zh: 'Java 框架', ja: 'Java フレームワーク' }, name: 'Spring Framework',
      detail: {
        ko: ['POJO 및 DI 실습', 'MyBatis 연동 및 Mapper 인터페이스 개발', 'Spring MVC 백엔드 및 화면 연동'],
        en: ['POJO and dependency-injection practice', 'MyBatis integration and Mapper interfaces', 'Spring MVC backend wired to views'],
        zh: ['POJO 与 DI 实践', 'MyBatis 集成及 Mapper 接口开发', 'Spring MVC 后端与页面联动'],
        ja: ['POJO・DI の実習', 'MyBatis 連携と Mapper インターフェース開発', 'Spring MVC バックエンドと画面の連携'] } },
    { area: { ko: '전자정부 프레임워크', en: 'Gov. framework', zh: '电子政府框架', ja: '電子政府フレームワーク' }, name: 'eGovFrame',
      detail: {
        ko: ['Spring MVC + MyBatis + JSP 기반 시스템 프로젝트', 'CRUD 화면 개발 및 관리자 승인 워크플로우 구현'],
        en: ['System project on Spring MVC + MyBatis + JSP', 'CRUD screens and an admin approval workflow'],
        zh: ['基于 Spring MVC + MyBatis + JSP 的系统项目', '开发 CRUD 页面并实现管理员审批流程'],
        ja: ['Spring MVC + MyBatis + JSP ベースのシステム開発', 'CRUD 画面と管理者承認ワークフローの実装'] } },
    { area: { ko: 'AI / LLM 활용', en: 'AI / LLM', zh: 'AI / LLM 应用', ja: 'AI / LLM 活用' }, name: 'LLM',
      detail: {
        ko: ['인증 프로세스 구현', 'MCP, RAG 프로세스 구현', 'Gemma 모델 파인튜닝 및 노코드 기반 챗봇 개발'],
        en: ['Implemented authentication flows', 'Built MCP and RAG pipelines', 'Fine-tuned Gemma and built a no-code chatbot'],
        zh: ['实现认证流程', '实现 MCP、RAG 流程', 'Gemma 模型微调及无代码聊天机器人开发'],
        ja: ['認証プロセスの実装', 'MCP・RAG プロセスの実装', 'Gemma のファインチューニングとノーコードチャットボット開発'] } },
    { area: { ko: '데이터 수집', en: 'Data collection', zh: '数据采集', ja: 'データ収集' }, name: 'Crawling · Open API',
      detail: {
        ko: ['웹 크롤링을 통한 데이터 수집', '공공데이터 API 연동'],
        en: ['Collecting data through web crawling', 'Integrating public-data APIs'],
        zh: ['通过网页爬虫采集数据', '对接公共数据 API'],
        ja: ['Web クローリングによるデータ収集', '公共データ API との連携'] } },
    { area: { ko: '자동화 · 분석', en: 'Automation · Analysis', zh: '自动化 · 分析', ja: '自動化 · 分析' }, name: 'Python · pandas',
      detail: {
        ko: ['프로그램 자동화 스크립트 작성 및 서비스 개발', '데이터 분석 및 전처리'],
        en: ['Automation scripts and small services', 'Data analysis and preprocessing'],
        zh: ['编写自动化脚本并开发服务', '数据分析与预处理'],
        ja: ['自動化スクリプトの作成とサービス開発', 'データ分析と前処理'] } },
    { area: { ko: '운영체제', en: 'OS', zh: '操作系统', ja: 'OS' }, name: 'Linux (Ubuntu)',
      detail: {
        ko: ['기본적인 리눅스 작업', '우분투 환경에서 애플리케이션 설치 및 작업 환경 구축'],
        en: ['Everyday Linux operations', 'Installing applications and setting up environments on Ubuntu'],
        zh: ['基本的 Linux 操作', '在 Ubuntu 环境中安装应用并搭建开发环境'],
        ja: ['基本的な Linux 操作', 'Ubuntu でのアプリ導入と作業環境の構築'] } }
  ];

  /* ---------- 3. 프로젝트 데이터 ---------- */
  var PROJECTS = [
    {
      cat: 'web', team: true, year: '2026',
      title: { ko: '사내비품 관리 시스템', en: 'Office Equipment Management System', zh: '公司物品管理系统', ja: '社内備品管理システム' },
      summary: {
        ko: 'eGovFrame 기반으로 비품 대여부터 관리자 승인까지 처리하는 사내 시스템.',
        en: 'An internal system on eGovFrame that handles equipment rentals through admin approval.',
        zh: '基于 eGovFrame，覆盖物品借用到管理员审批全过程的内部系统。',
        ja: 'eGovFrame をベースに、備品の貸出から管理者承認までを扱う社内システム。' },
      points: {
        ko: ['대여 · 반납 · 연장 · 문제보고 등 사용자 CRUD 화면 담당', '관리자 승인 워크플로우(REQUESTED → APPROVED / REJECTED) 구축', 'QR 스캔 시 상태별 분기 및 로그인 리다이렉트 구현', 'WAR 빌드 후 AWS EC2 Tomcat에 배포'],
        en: ['Owned user CRUD screens: rental, return, extension, issue reports', 'Built the admin approval workflow (REQUESTED → APPROVED / REJECTED)', 'QR scan flow that branches on status and redirects to login', 'Packaged as a WAR and deployed to Tomcat on AWS EC2'],
        zh: ['负责借用、归还、延期、问题报告等用户 CRUD 页面', '构建管理员审批流程（REQUESTED → APPROVED / REJECTED）', '实现扫码后按状态分支及登录重定向', '打包为 WAR 并部署到 AWS EC2 的 Tomcat'],
        ja: ['貸出・返却・延長・問題報告などユーザー向け CRUD 画面を担当', '管理者承認ワークフロー（REQUESTED → APPROVED / REJECTED）を構築', 'QR スキャン時のステータス分岐とログインリダイレクトを実装', 'WAR をビルドし AWS EC2 の Tomcat にデプロイ'] },
      tags: ['eGovFrame', 'Spring MVC', 'MyBatis', 'JSP', 'MySQL', 'AWS EC2'],
      states: true,
      link: { href: 'https://github.com/kimjaemin01/asset_management_system', kind: 'code' }
    },
    {
      cat: 'web', team: false, year: '2026',
      title: { ko: 'KOPO 데이터 관리 시스템', en: 'KOPO Data Management System', zh: 'KOPO 数据管理系统', ja: 'KOPO データ管理システム' },
      summary: {
        ko: 'Node.js · Spring MVC · FastAPI · MySQL을 연계한 실무형 데이터 관리 시스템.',
        en: 'A practical data management system connecting Node.js, Spring MVC, FastAPI and MySQL.',
        zh: '连接 Node.js、Spring MVC、FastAPI 与 MySQL 的实战型数据管理系统。',
        ja: 'Node.js・Spring MVC・FastAPI・MySQL を連携させた実務型データ管理システム。' },
      points: {
        ko: ['테이블 동적 조회 및 다중 조건 검색', 'SQL 직접 실행 시 위험 명령어 차단 · PreparedStatement 적용', 'pandas read_sql / to_sql로 원천 DB → 클라우드 DB 이관', '조회 로그 자동 기록, AWS EC2에 전체 서버 배포'],
        en: ['Dynamic table browsing and multi-condition search', 'Raw SQL runner that blocks dangerous commands and uses PreparedStatement', 'Source DB → cloud DB migration with pandas read_sql / to_sql', 'Automatic query logging; every server deployed on AWS EC2'],
        zh: ['表的动态查询与多条件搜索', '直接执行 SQL 时拦截危险命令并使用 PreparedStatement', '通过 pandas read_sql / to_sql 将源数据库迁移至云数据库', '自动记录查询日志，并将全部服务器部署到 AWS EC2'],
        ja: ['テーブルの動的参照と複数条件検索', 'SQL 直接実行時の危険コマンド遮断・PreparedStatement 適用', 'pandas read_sql / to_sql で元 DB → クラウド DB へ移行', '参照ログの自動記録、全サーバーを AWS EC2 にデプロイ'] },
      tags: ['Node.js Express', 'Spring MVC', 'FastAPI', 'pandas', 'MySQL', 'AWS EC2']
    },
    {
      cat: 'web', team: false, year: '2026',
      title: { ko: '학생 성적 관리 시스템', en: 'Student Grade Management System', zh: '学生成绩管理系统', ja: '学生成績管理システム' },
      summary: {
        ko: '순수 Java(ServerSocket)로 HTTP 서버를 직접 구현한 성적 관리 REST API.',
        en: 'A grade-management REST API on an HTTP server written from scratch with plain Java (ServerSocket).',
        zh: '用纯 Java（ServerSocket）自行实现 HTTP 服务器的成绩管理 REST API。',
        ja: '純粋な Java（ServerSocket）で HTTP サーバーを自作した成績管理 REST API。' },
      points: {
        ko: ['GET / POST / PUT / DELETE REST API 처리', '성적 CRUD, 실시간 정렬, 등급(A~F) 자동 산출', 'Docker Compose로 백엔드 · DB 컨테이너 분리', 'Kubernetes 클러스터에 다중 레플리카 · Ingress · PV/PVC · Secret · ConfigMap으로 배포', '한글 인코딩 · 컨테이너 이름 충돌 · 리소스 경로 오류 트러블슈팅'],
        en: ['Handles GET / POST / PUT / DELETE', 'Grade CRUD, live sorting and automatic A–F grading', 'Backend and DB split into containers with Docker Compose', 'Deployed to a Kubernetes cluster with replicas, Ingress, PV/PVC, Secret and ConfigMap', 'Fixed Korean encoding, container-name clashes and resource-path errors'],
        zh: ['处理 GET / POST / PUT / DELETE 请求', '成绩 CRUD、实时排序、自动计算等级（A~F）', '使用 Docker Compose 分离后端与数据库容器', '以多副本、Ingress、PV/PVC、Secret、ConfigMap 部署到 Kubernetes 集群', '排查韩文编码、容器名冲突、资源路径错误等问题'],
        ja: ['GET / POST / PUT / DELETE の REST API を処理', '成績 CRUD、リアルタイムソート、評価（A〜F）の自動算出', 'Docker Compose でバックエンドと DB コンテナを分離', 'レプリカ・Ingress・PV/PVC・Secret・ConfigMap で Kubernetes クラスタにデプロイ', 'ハングルのエンコーディング、コンテナ名の衝突、リソースパスのエラーを解決'] },
      tags: ['Java', 'ServerSocket', 'REST', 'MySQL', 'Docker Compose', 'Kubernetes'],
      link: { href: 'https://github.com/kimjaemin01/grade-system', kind: 'code' }
    },
    {
      cat: 'data', team: false, year: '2026',
      title: { ko: 'Linux ETL 자동화 파이프라인', en: 'Linux ETL Automation Pipeline', zh: 'Linux ETL 自动化管道', ja: 'Linux ETL 自動化パイプライン' },
      summary: {
        ko: '리눅스 환경에서 Python ETL을 crontab으로 주기 실행하는 데이터 적재 파이프라인.',
        en: 'A Python ETL pipeline on Linux that loads data on a crontab schedule.',
        zh: '在 Linux 环境中通过 crontab 定期执行 Python ETL 的数据加载管道。',
        ja: 'Linux 上で Python ETL を crontab により定期実行するデータ投入パイプライン。' },
      points: {
        ko: ['CSV 데이터 수집 · 전처리 후 MySQL 적재', 'crontab으로 주기 자동 실행, 로그로 실행 결과 관리', 'KIS API · FinanceDataReader로 주가 데이터 수집 → MySQL 적재'],
        en: ['Collects and cleans CSV data, then loads it into MySQL', 'Runs automatically on crontab; results are tracked in logs', 'Stock price collection via KIS API and FinanceDataReader into MySQL'],
        zh: ['采集并预处理 CSV 数据后加载到 MySQL', '通过 crontab 定期自动执行，并用日志管理执行结果', '使用 KIS API、FinanceDataReader 采集股价数据并写入 MySQL'],
        ja: ['CSV データを収集・前処理して MySQL に投入', 'crontab で定期自動実行し、ログで実行結果を管理', 'KIS API・FinanceDataReader で株価データを収集し MySQL に投入'] },
      tags: ['Python', 'pandas', 'crontab', 'MySQL', 'Ubuntu', 'KIS API']
    },
    {
      cat: 'ai', team: false, year: '2026',
      title: { ko: 'Gemma 3 멀티모달 파인튜닝', en: 'Gemma 3 Multimodal Fine-tuning', zh: 'Gemma 3 多模态微调', ja: 'Gemma 3 マルチモーダル・ファインチューニング' },
      summary: {
        ko: 'Gemma 3 모델을 LoRA로 파인튜닝하고 GGUF로 변환해 Hugging Face에 배포.',
        en: 'Fine-tuned Gemma 3 with LoRA, converted it to GGUF and published it on Hugging Face.',
        zh: '使用 LoRA 微调 Gemma 3，转换为 GGUF 后发布到 Hugging Face。',
        ja: 'Gemma 3 を LoRA でファインチューニングし、GGUF に変換して Hugging Face に公開。' },
      points: {
        ko: ['Windows · WSL2 환경에서 학습부터 변환까지 전체 파이프라인 구성', 'LoRA 병합 모델과 GGUF 모델을 각각 업로드', 'subprocess 인터프리터 경로 · WSL2 네트워킹 · CP949 인코딩 오류 해결'],
        en: ['Ran the full pipeline, training through conversion, on Windows and WSL2', 'Uploaded both the merged LoRA model and the GGUF build', 'Fixed subprocess interpreter paths, WSL2 networking and CP949 encoding errors'],
        zh: ['在 Windows · WSL2 环境中搭建从训练到转换的完整流程', '分别上传 LoRA 合并模型与 GGUF 模型', '解决 subprocess 解释器路径、WSL2 网络及 CP949 编码错误'],
        ja: ['Windows・WSL2 上で学習から変換までのパイプライン全体を構築', 'LoRA マージ済みモデルと GGUF モデルをそれぞれアップロード', 'subprocess のインタプリタパス、WSL2 ネットワーク、CP949 エンコーディングのエラーを解決'] },
      tags: ['Gemma 3', 'LoRA', 'GGUF', 'Hugging Face', 'WSL2'],
      link: { href: 'https://huggingface.co/jaemin01/multi_modal_model_g3', kind: 'model' }
    },
    {
      cat: 'ai', team: true, year: '2026',
      title: { ko: 'SY은행 금융상품 추천 챗봇', en: 'SY Bank Product Recommendation Chatbot', zh: 'SY 银行金融产品推荐聊天机器人', ja: 'SY銀行 金融商品レコメンドチャットボット' },
      summary: {
        ko: '청년 금융교육용으로 은행 상품 추천을 시뮬레이션하는 Dify 기반 RAG 챗봇.',
        en: 'A Dify-based RAG chatbot that simulates bank product recommendations for youth financial education.',
        zh: '面向青年金融教育、模拟银行产品推荐的 Dify RAG 聊天机器人。',
        ja: '若者向け金融教育のために銀行商品の推薦をシミュレーションする Dify ベースの RAG チャットボット。' },
      points: {
        ko: ['지식 베이스 검색 결과를 LLM 노드에 연결하는 RAG 워크플로우', 'OpenAI 모델 연동 및 프롬프트 구성', '노코드 도구로 기획부터 시연까지 진행'],
        en: ['RAG workflow that feeds knowledge-base results into the LLM node', 'OpenAI model integration and prompt design', 'Taken from planning to demo with no-code tools'],
        zh: ['将知识库检索结果连接到 LLM 节点的 RAG 工作流', '对接 OpenAI 模型并设计提示词', '使用无代码工具完成从策划到演示'],
        ja: ['ナレッジベースの検索結果を LLM ノードにつなぐ RAG ワークフロー', 'OpenAI モデルの連携とプロンプト設計', 'ノーコードツールで企画からデモまで実施'] },
      tags: ['Dify', 'RAG', 'OpenAI', 'Prompt']
    },
    {
      cat: 'ai', team: false, year: '2026',
      title: { ko: '딥러닝 회귀 모델 서빙', en: 'Deep Learning Regression Serving', zh: '深度学习回归模型部署', ja: 'ディープラーニング回帰モデルのサービング' },
      summary: {
        ko: '학습한 회귀 모델을 FastAPI로 서빙하고 HTML 화면에서 예측하는 서비스.',
        en: 'Serves a trained regression model with FastAPI and returns predictions in a web page.',
        zh: '使用 FastAPI 部署训练好的回归模型，并在 HTML 页面中进行预测。',
        ja: '学習済みの回帰モデルを FastAPI で提供し、HTML 画面から予測できるサービス。' },
      points: {
        ko: ['노트북에서 학습한 모델을 서빙용 구조로 분리', 'FastAPI 예측 API + HTML 프런트엔드', '클라우드 대신 로컬 서빙 방식으로 전환해 완성'],
        en: ['Split the notebook model into a serving layout', 'FastAPI prediction API with an HTML front end', 'Switched from cloud to local serving to finish the project'],
        zh: ['将在 Notebook 中训练的模型拆分为部署结构', 'FastAPI 预测 API + HTML 前端', '由云端改为本地部署方式完成项目'],
        ja: ['ノートブックで学習したモデルをサービング用の構成に分離', 'FastAPI の予測 API と HTML フロントエンド', 'クラウドからローカルサービングに切り替えて完成'] },
      tags: ['Deep Learning', 'FastAPI', 'Python', 'HTML'],
      link: { href: 'https://github.com/kimjaemin01/Predict_Model', kind: 'code' }
    }
  ];

  /* ---------- 4. 이력 데이터 ---------- */
  var EDU = [
    { when: '2026.03 –', what: { ko: '한국폴리텍대학 서울강서캠퍼스', en: 'Korea Polytechnics, Seoul Gangseo', zh: '韩国理工大学 首尔江西校区', ja: '韓国ポリテク大学 ソウル江西キャンパス' },
      where: { ko: '스마트금융과 · 재학', en: 'Smart Finance · Enrolled', zh: '智能金融专业 · 在读', ja: 'スマート金融科 · 在学中' } },
    { when: '2020 – 2026', what: { ko: '수원대학교', en: 'University of Suwon', zh: '水原大学', ja: '水原大学' },
      where: { ko: '전자공학과 · 졸업 예정', en: 'Electronic Engineering · Expected graduation', zh: '电子工程专业 · 预计毕业', ja: '電子工学科 · 卒業見込み' } },
    { when: '2021 – 2022', what: { ko: '병역 이행', en: 'Military service', zh: '服兵役', ja: '兵役' },
      where: { ko: '18개월 · 만기 전역', en: '18 months · Completed', zh: '18 个月 · 期满退役', ja: '18か月 · 満期除隊' } }
  ];
  var CERT = [
    { when: '2025.01', what: { ko: '워드프로세서', en: 'Word Processor', zh: '文字处理员', ja: 'ワードプロセッサ' },
      where: { ko: '대한상공회의소', en: 'Korea Chamber of Commerce and Industry', zh: '大韩商工会议所', ja: '大韓商工会議所' } },
    { when: '2023.09', what: { ko: '컴퓨터활용능력 2급', en: 'Computer Specialist in Spreadsheet & DB, Level 2', zh: '计算机应用能力 2 级', ja: 'コンピュータ活用能力 2級' },
      where: { ko: '대한상공회의소', en: 'Korea Chamber of Commerce and Industry', zh: '大韩商工会议所', ja: '大韓商工会議所' } },
    { when: '2020.08', what: { ko: '1종 보통 운전면허', en: 'Class 1 Ordinary Driver’s License', zh: '1 种普通驾驶执照', ja: '第1種普通運転免許' },
      where: { ko: '경찰청', en: 'Korean National Police Agency', zh: '韩国警察厅', ja: '韓国警察庁' } },
    { when: '2020.06', what: { ko: 'ITQ 한글 · 엑셀 · 파워포인트', en: 'ITQ Hangul · Excel · PowerPoint', zh: 'ITQ 韩文 · Excel · PowerPoint', ja: 'ITQ ハングル · Excel · PowerPoint' },
      where: { ko: '한국생산성본부', en: 'Korea Productivity Center', zh: '韩国生产性本部', ja: '韓国生産性本部' } }
  ];

  /* ---------- 5. 상태 ---------- */
  var LANGS = ['ko', 'en', 'zh', 'ja'];
  var state = { lang: 'ko', filter: 'all' };
  var root = document.documentElement;

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.ko[key] || ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(sel) { return document.querySelector(sel); }

  /* ---------- 6. 렌더링 ---------- */
  function renderStatic() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    $('#menuBtn').setAttribute('aria-label', t('ui.menu'));
    document.title = (state.lang === 'ko' ? '김재민' : t('hero.name')) + ' · Portfolio';
  }

  function renderSkills() {
    var L = state.lang, html = '';
    SKILLS.forEach(function (s) {
      html += '<tr><td class="area">' + esc(s.area[L]) + '</td>' +
        '<td class="name">' + esc(s.name) + '</td>' +
        '<td><span class="level">' + esc(t('level.beginner')) + '</span></td>' +
        '<td><ul>' + s.detail[L].map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul></td></tr>';
    });
    $('#skillRows').innerHTML = html;
  }

  function renderProjects() {
    var L = state.lang, html = '';
    PROJECTS.filter(function (p) { return state.filter === 'all' || p.cat === state.filter; })
      .forEach(function (p, i) {
        var link = p.link
          ? '<a class="card-link" href="' + esc(p.link.href) + '" target="_blank" rel="noopener">' + esc(t('link.' + p.link.kind)) + ' ↗</a>'
          : '<span></span>';
        var states = p.states
          ? '<span class="states" aria-hidden="true"><span class="state wait">REQUESTED</span><span class="state ok">APPROVED</span><span class="state">REJECTED</span></span>'
          : '';
        html += '<article class="card" style="animation-delay:' + (i * 40) + 'ms">' +
          '<div class="card-top"><span class="cat">' + esc(t('cat.' + p.cat)) + '</span>' +
          '<span class="meta">' + esc(p.year) + ' · ' + esc(t(p.team ? 'team' : 'solo')) + '</span></div>' +
          '<div><h3>' + esc(p.title[L]) + '</h3><p class="summary">' + esc(p.summary[L]) + '</p></div>' +
          '<ul class="points">' + p.points[L].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          '<div class="card-foot-wrap"><ul class="tags">' + p.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
          (link || states ? '<div class="card-foot" style="margin-top:14px">' + link + states + '</div>' : '') + '</div>' +
          '</article>';
      });
    $('#projectList').innerHTML = html;
  }

  function renderTimeline() {
    var L = state.lang;
    function row(r) {
      return '<li><span class="when">' + esc(r.when) + '</span><span class="what">' + esc(r.what[L]) +
        '<span class="where">' + esc(r.where[L]) + '</span></span></li>';
    }
    $('#eduList').innerHTML = EDU.map(row).join('');
    $('#certList').innerHTML = CERT.map(row).join('');
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) lang = 'ko';
    state.lang = lang;
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
    $('#lang').value = lang;
    renderStatic(); renderSkills(); renderProjects(); renderTimeline(); syncThemeBtn();
    store('pf-lang', lang);
  }

  /* ---------- 7. 테마 ---------- */
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    var attr = root.getAttribute('data-theme');
    if (attr === 'dark') return true;
    if (attr === 'light') return false;
    return !!(mq && mq.matches);
  }
  function syncThemeBtn() {
    var dark = isDark(), btn = $('#themeBtn');
    btn.classList.toggle('is-dark', dark);
    btn.setAttribute('aria-label', t(dark ? 'ui.toLight' : 'ui.toDark'));
    btn.title = t(dark ? 'ui.toLight' : 'ui.toDark');
  }
  function toggleTheme() {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('pf-theme', next);
    syncThemeBtn();
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', syncThemeBtn);

  /* ---------- 8. 이벤트 ---------- */
  $('#lang').addEventListener('change', function (e) { setLang(e.target.value); });
  $('#themeBtn').addEventListener('click', toggleTheme);

  var nav = $('#nav'), menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  document.querySelectorAll('.filters .chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.filters .chip').forEach(function (b) {
        b.classList.toggle('is-on', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      renderProjects();
    });
  });

  var toastTimer;
  function toast(msg) {
    var el = $('#toast'); el.textContent = msg;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.textContent = ''; }, 3500);
  }
  function selectEmail() {
    var r = document.createRange(); r.selectNodeContents($('#emailText'));
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  $('#copyBtn').addEventListener('click', function () {
    var text = $('#emailText').textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(t('contact.copied')); },
        function () { selectEmail(); toast(t('contact.copyFail')); });
    } else { selectEmail(); toast(t('contact.copyFail')); }
  });

  /* 현재 섹션 내비 강조 */
  if ('IntersectionObserver' in window) {
    var links = {};
    document.querySelectorAll('.nav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---------- 9. 시작: 기본 한국어 ---------- */
  setLang(load('pf-lang') || 'ko');
})();

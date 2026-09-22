/* ==========================================================================
   Pham Ngoc Hiep — Portfolio  |  Bilingual VI/EN (default: VI)
   ========================================================================== */

(function () {
  'use strict';

  /* ── Translation Dictionary ─────────────────────────────────────────── */
  var T = {
    vi: {
      nav_home: 'Trang chủ',
      nav_about: 'Giới thiệu',
      nav_experience: 'Kinh nghiệm',
      nav_projects: 'Dự án',
      nav_skills: 'Kỹ năng',
      nav_education: 'Học vấn',
      nav_contact: 'Liên hệ',

      hero_badge: 'Sẵn sàng nhận việc',
      hero_subtitle: 'Tôi xây dựng và vận hành các sản phẩm phần mềm thực tế bằng C#/.NET và Python, từ phát triển đến triển khai và bảo trì.',
      hero_btn_projects: 'Xem dự án',
      hero_btn_contact: 'Liên hệ',
      hero_stat1_label: 'Phát triển phần mềm độc lập',
      hero_stat2_value: 'Hàng trăm',
      hero_stat2_label: 'Người dùng trên nền tảng HPTOOLS',
      hero_stat3_value: 'Liên tục',
      hero_stat3_label: 'Doanh thu từ sản phẩm',

      about_title: 'Đôi nét về tôi',
      about_p1: 'Tôi là lập trình viên C#/.NET với kinh nghiệm thực tế trong thiết kế, xây dựng, triển khai và bảo trì các sản phẩm phần mềm thương mại.',
      about_p2: 'Từ năm 2022, tôi độc lập xây dựng và vận hành HPTOOLS — một nền tảng phần mềm thương mại phục vụ hàng trăm người dùng và tạo doanh thu liên tục. Công việc bao gồm phát triển ứng dụng Windows desktop, tích hợp REST/API, xử lý đa luồng, automation, debugging, deployment và maintenance.',
      info_location: 'Địa điểm',
      info_location_val: 'Hà Nội, Việt Nam',
      info_phone: 'Điện thoại',
      info_focus: 'Chuyên môn',
      info_status: 'Trạng thái',
      info_status_val: 'Sẵn sàng nhận việc',

      exp_title: 'Kinh nghiệm làm việc',
      exp_role: 'Lập trình viên phần mềm độc lập',
      exp_p1: 'Xây dựng và vận hành HPTOOLS — nền tảng phần mềm thương mại phục vụ hàng trăm người dùng và tạo doanh thu liên tục.',
      exp_p2: 'Thiết kế, phát triển, triển khai và bảo trì các sản phẩm phần mềm sử dụng C#/.NET và Python.',
      exp_p3: 'Xây dựng ứng dụng desktop Windows với multithreading, asynchronous processing, REST/API integrations, browser automation và production error handling.',
      exp_p4: 'Quản lý toàn bộ vòng đời sản phẩm từ yêu cầu, phát triển, debugging, phát hành, bảo trì đến hỗ trợ người dùng.',
      exp_p5: 'Liên tục cải thiện sản phẩm dựa trên phản hồi thực tế từ người dùng.',
      exp_hl_users: 'Người dùng',
      exp_hl_revenue: 'Doanh thu',
      exp_hl_stack: 'Công nghệ chính',
      exp_hl_lifecycle: 'Toàn bộ vòng đời',
      exp_hl_lifecycle_sub: 'Xây dựng → Triển khai → Bảo trì',

      proj_title: 'Dự án tiêu biểu',
      proj_desc: 'Các sản phẩm được xây dựng và vận hành trên nền tảng HPTOOLS.',
      proj_overview: 'Tổng quan',
      proj_what_built: 'Những gì tôi xây dựng',
      proj_tech_hl: 'Điểm nổi bật kỹ thuật',
      proj_view: 'Xem sản phẩm',
      proj_demo: 'Xem video demo',

      proj_hptools_cat: 'NỀN TẢNG PHẦN MỀM THƯƠNG MẠI',
      proj_hptools_brand_sub: 'Nền tảng thương mại',
      proj_hptools_overview: 'Nền tảng phần mềm thương mại do cá nhân phát triển và vận hành, phục vụ hàng trăm người dùng và vẫn đang tạo doanh thu.',
      proj_hptools_b1: 'Hệ thống phần mềm thương mại hoàn chỉnh với nhiều sản phẩm',
      proj_hptools_b2: 'Phát triển ứng dụng desktop, API integrations, automation tools',
      proj_hptools_b3: 'Vận hành toàn bộ: phát triển, triển khai, bảo trì, hỗ trợ người dùng',

      proj_sonic_cat: 'ỨNG DỤNG DESKTOP C# / .NET',
      proj_sonic_overview: 'Ứng dụng desktop C#/.NET tập trung vào xử lý media đồng thời và các workflow làm việc hướng mạng.',
      proj_sonic_b1: 'Ứng dụng desktop Windows với WinForms',
      proj_sonic_b2: 'Engine xử lý tác vụ đồng thời cho workload lớn',
      proj_sonic_b3: 'Tích hợp HTTP/API vào logic xử lý',
      proj_sonic_b4: 'Background processing và pipeline xử lý media',
      proj_sonic_b5: 'Production error handling',
      proj_sonic_t1: 'Multithreading và async/await',
      proj_sonic_t2: 'HTTP/API integration',
      proj_sonic_t3: 'Background processing và error handling',

      proj_hype_cat: 'PYTHON / AI / MEDIA PROCESSING',
      proj_hype_overview: 'Pipeline media tự động cho dịch và lồng tiếng video, kết hợp xử lý GPU cục bộ với AI API.',
      proj_hype_b1: 'Pipeline lồng tiếng video end-to-end',
      proj_hype_b2: 'Tích hợp AI API',
      proj_hype_b3: 'Xử lý GPU cục bộ cho inference',
      proj_hype_b4: 'Đồng bộ audio/video tự động',
      proj_hype_b5: 'Workflow xử lý media',

      proj_helix_cat: 'PYTHON / TTS / AI',
      proj_helix_desc: 'Ứng dụng xử lý và chuyển đổi giọng nói tiếng Việt, kết hợp TTS, voice workflow và AI APIs.',

      proj_tiktok_cat: 'PYTHON / AUTOMATION / WEB DATA',
      proj_tiktok_desc: 'Công cụ automation và thu thập dữ liệu creator/content từ các trang web động, với automated extraction và structured output.',

      proj_yt_cat: 'PYTHON / AUTOMATION / DATA',
      proj_yt_desc: 'Công cụ tìm kiếm kênh và video YouTube, hỗ trợ tìm kiếm tự động, trích xuất dữ liệu và đầu ra có cấu trúc phục vụ phân tích nội dung.',

      skills_title: 'Kỹ năng chuyên môn',
      skill_desktop: 'Windows Desktop Applications',
      skill_concurrency: 'Xử lý đồng thời',
      skill_async: 'Asynchronous Processing',
      skill_bg: 'Background Tasks',
      skill_3rd: 'Third-party API Integrations',
      skill_browser_auto: 'Browser Automation',
      skill_web_extract: 'Web Data Extraction',
      skill_media_data: 'Media / Data Processing',
      skill_ai_api: 'AI API Integrations',
      skill_devtools: 'Công cụ phát triển',
      skill_delivery: 'Triển khai sản phẩm',
      skill_maintain_support: 'Maintenance & User Support',
      skill_updates: 'Iterative Product Updates',

      approach_label: 'Phương pháp',
      approach_title: 'Cách tôi làm việc',
      approach_desc: 'Từ yêu cầu thực tế đến sản phẩm được triển khai và duy trì.',
      approach_build: 'Xây dựng',
      approach_build_d: 'Chuyển đổi yêu cầu thực tế thành ứng dụng desktop và công cụ tự động hóa.',
      approach_debug_d: 'Tìm và sửa lỗi trong môi trường production dưới các ràng buộc thực tế.',
      approach_integrate: 'Tích hợp',
      approach_integrate_d: 'Kết nối phần mềm với REST API, dịch vụ bên thứ ba và nguồn dữ liệu bên ngoài.',
      approach_deploy: 'Triển khai',
      approach_deploy_d: 'Đóng gói và phát hành phần mềm cho người dùng thực với xử lý lỗi và độ ổn định.',
      approach_maintain: 'Bảo trì',
      approach_maintain_d: 'Duy trì sản phẩm hoạt động, phản hồi người dùng và cập nhật cải tiến liên tục.',

      edu_title: 'Học vấn',
      edu_school: 'Đại học Phenikaa',
      edu_status: 'Đã từng theo học',

      contact_heading_html: 'Sẵn sàng nhận vị trí<br/><span class="accent">C#/.NET</span> Software Developer.',
      contact_desc: 'Tôi đang tìm kiếm cơ hội để mang kinh nghiệm phát triển sản phẩm thực tế vào một đội ngũ kỹ thuật chuyên nghiệp.',
      contact_email_btn: 'Gửi Email',
      contact_call_btn: 'Gọi điện',
      copied: 'Đã sao chép!',
    },

    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_experience: 'Experience',
      nav_projects: 'Projects',
      nav_skills: 'Skills',
      nav_education: 'Education',
      nav_contact: 'Contact',

      hero_badge: 'Open to Work',
      hero_subtitle: 'I build and operate practical software products with C#/.NET and Python, from development to deployment and maintenance.',
      hero_btn_projects: 'View Projects',
      hero_btn_contact: 'Contact Me',
      hero_stat1_label: 'Independent software development',
      hero_stat2_value: 'Hundreds',
      hero_stat2_label: 'Users on HPTOOLS platform',
      hero_stat3_value: 'Ongoing',
      hero_stat3_label: 'Commercial product revenue',

      about_title: 'A bit about me',
      about_p1: "I'm a C#/.NET software developer with hands-on experience designing, building, deploying, and maintaining commercial software products.",
      about_p2: 'Since 2022, I have independently built and operated HPTOOLS — a commercial software platform serving hundreds of users and generating ongoing revenue. This includes developing Windows desktop applications, REST/API integrations, multithreading, automation, debugging, deployment and maintenance.',
      info_location: 'Location',
      info_location_val: 'Hanoi, Vietnam',
      info_phone: 'Phone',
      info_focus: 'Focus',
      info_status: 'Status',
      info_status_val: 'Open to work',

      exp_title: 'Professional experience',
      exp_role: 'Independent Software Developer',
      exp_p1: 'Built and operated HPTOOLS — a commercial software platform serving hundreds of users and generating ongoing revenue.',
      exp_p2: 'Designed, developed, deployed, and maintained software products using C#/.NET and Python.',
      exp_p3: 'Built Windows desktop applications with multithreading, asynchronous processing, REST/API integrations, browser automation, and production error handling.',
      exp_p4: 'Managed the full product lifecycle from requirements, development, debugging, releases, maintenance to user support.',
      exp_p5: 'Continuously improved products based on real user feedback and production use.',
      exp_hl_users: 'Active users',
      exp_hl_revenue: 'Revenue',
      exp_hl_stack: 'Primary stack',
      exp_hl_lifecycle: 'Full Lifecycle',
      exp_hl_lifecycle_sub: 'Build → Deploy → Maintain',

      proj_title: 'Selected projects',
      proj_desc: 'Products built and operated under the HPTOOLS platform.',
      proj_overview: 'Overview',
      proj_what_built: 'What I Built',
      proj_tech_hl: 'Technical Highlights',
      proj_view: 'View Product',
      proj_demo: 'Watch Demo',

      proj_hptools_cat: 'COMMERCIAL SOFTWARE PLATFORM',
      proj_hptools_brand_sub: 'Commercial Platform',
      proj_hptools_overview: 'A commercial software platform independently developed and operated, serving hundreds of users and generating ongoing revenue.',
      proj_hptools_b1: 'Complete commercial software system with multiple products',
      proj_hptools_b2: 'Desktop applications, API integrations, automation tools',
      proj_hptools_b3: 'Full operations: development, deployment, maintenance, user support',

      proj_sonic_cat: 'C# / .NET DESKTOP APPLICATION',
      proj_sonic_overview: 'A C#/.NET desktop application focused on concurrent media processing and network-oriented workflows.',
      proj_sonic_b1: 'Windows desktop application with WinForms UI',
      proj_sonic_b2: 'Concurrent task execution engine for high-volume workloads',
      proj_sonic_b3: 'HTTP/API integration into processing logic',
      proj_sonic_b4: 'Background processing and media processing pipeline',
      proj_sonic_b5: 'Production error handling',
      proj_sonic_t1: 'Multithreading and async/await',
      proj_sonic_t2: 'HTTP/API integration',
      proj_sonic_t3: 'Background processing and error handling',

      proj_hype_cat: 'PYTHON / AI / MEDIA PROCESSING',
      proj_hype_overview: 'An automated media pipeline for video dubbing and translation, combining local GPU processing with AI APIs.',
      proj_hype_b1: 'End-to-end video dubbing pipeline',
      proj_hype_b2: 'AI API integration',
      proj_hype_b3: 'Local GPU processing for inference',
      proj_hype_b4: 'Automated audio/video synchronization',
      proj_hype_b5: 'Media processing workflow',

      proj_helix_cat: 'PYTHON / TTS / AI',
      proj_helix_desc: 'Vietnamese voice processing and conversion application, combining TTS, voice workflow, and AI APIs.',

      proj_tiktok_cat: 'PYTHON / AUTOMATION / WEB DATA',
      proj_tiktok_desc: 'Automation and data collection tool for creator/content metrics from dynamic web pages, with automated extraction and structured output.',

      proj_yt_cat: 'PYTHON / AUTOMATION / DATA',
      proj_yt_desc: 'YouTube channel and video discovery tool with automated search, data extraction, and structured output for content analysis.',

      skills_title: 'Technical skills',
      skill_desktop: 'Windows Desktop Applications',
      skill_concurrency: 'Concurrency',
      skill_async: 'Asynchronous Processing',
      skill_bg: 'Background Tasks',
      skill_3rd: 'Third-party API Integrations',
      skill_browser_auto: 'Browser Automation',
      skill_web_extract: 'Web Data Extraction',
      skill_media_data: 'Media / Data Processing',
      skill_ai_api: 'AI API Integrations',
      skill_devtools: 'Development Tools',
      skill_delivery: 'Product Delivery',
      skill_maintain_support: 'Maintenance & User Support',
      skill_updates: 'Iterative Product Updates',

      approach_label: 'Approach',
      approach_title: 'How I work',
      approach_desc: 'From real requirements to deployed and maintained products.',
      approach_build: 'Build',
      approach_build_d: 'Turn practical requirements into working desktop applications and automation tools.',
      approach_debug_d: 'Track down issues in production environments and fix them under real-world constraints.',
      approach_integrate: 'Integrate',
      approach_integrate_d: 'Connect software to REST APIs, third-party services, and external data sources.',
      approach_deploy: 'Deploy',
      approach_deploy_d: 'Package and release software to real users with proper error handling and stability.',
      approach_maintain: 'Maintain',
      approach_maintain_d: 'Keep products running, respond to user feedback, and ship iterative improvements.',

      edu_title: 'Education',
      edu_school: 'Phenikaa University',
      edu_status: 'Previously attended',

      contact_heading_html: 'Open to <span class="accent">C#/.NET</span><br/>Software Developer<br/>opportunities.',
      contact_desc: "I'm looking to bring hands-on product development experience into a professional engineering team.",
      contact_email_btn: 'Send Email',
      contact_call_btn: 'Call Me',
      copied: 'Copied!',
    }
  };


  /* ── Language Toggle ────────────────────────────────────────────────── */
  var currentLang = localStorage.getItem('portfolio-lang') || 'vi';
  var langToggle = document.getElementById('lang-toggle');
  var langCode = document.getElementById('lang-code');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    langCode.textContent = lang === 'vi' ? 'EN' : 'VI';

    var dict = T[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var htmlKey = key + '_html';
      if (dict[htmlKey] !== undefined) el.innerHTML = dict[htmlKey];
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
    });
  }

  applyLanguage(currentLang);


  /* ── Mobile Menu ────────────────────────────────────────────────────── */
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  function closeMobileMenu() {
    navToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        navToggle.classList.add('open');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }


  /* ── Nav shadow on scroll ───────────────────────────────────────────── */
  var nav = document.getElementById('nav');

  function updateNavShadow() {
    if (window.scrollY > 10) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }

  window.addEventListener('scroll', updateNavShadow, { passive: true });
  updateNavShadow();


  /* ── Active section highlighting ────────────────────────────────────── */
  var sections = document.querySelectorAll('section[id], .hero[id]');
  var navLinksD = document.querySelectorAll('.nav-links a[href^="#"]');
  var navLinksM = document.querySelectorAll('.mobile-menu a[href^="#"]');

  function highlightActive() {
    var y = window.scrollY + 120;
    var cur = '';

    sections.forEach(function (s) {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) cur = s.id;
    });

    navLinksD.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
    navLinksM.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  }

  window.addEventListener('scroll', highlightActive, { passive: true });
  highlightActive();


  /* ── Scroll reveal ──────────────────────────────────────────────────── */
  var els = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }


  /* ── Copy email ─────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var tip = btn.querySelector('.tooltip');

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () { showTip(tip); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        showTip(tip);
      }
    });
  });

  function showTip(tip) {
    if (!tip) return;
    tip.textContent = T[currentLang] ? T[currentLang].copied : 'Copied!';
    tip.classList.add('show');
    setTimeout(function () { tip.classList.remove('show'); }, 1800);
  }


  /* ── Dynamic year ───────────────────────────────────────────────────── */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();

(function () {
  "use strict";

  const navItems = [
    { id: "home", label: "首页", href: "index.html" },
    { id: "about", label: "介绍", href: "about.html" },
    { id: "download", label: "下载", href: "download.html" },
    { id: "contact", label: "联系", href: "contact.html" }
  ];

  const voicebankReleaseBase = "https://github.com/FSxianshu/Jiangjiu/releases/download/voicebank-v1.0.0";

  // 下载页卡片文案：名称、语言、格式、文件大小和简介都在这里修改。
  const voicebanks = [
    {
      id: "chinese",
      name: "江就中文连单",
      shortName: "中文连单",
      language: "中文",
      group: "chinese",
      format: "连单术",
      size: "约 53.9 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Chinese_CVVC.zip`,
      image: "voicebank/江就中文连单.png",
      description: "C4 · E4双音阶中文连单声库。"
    },
    {
      id: "cvv2",
      name: "江就 CVV2.0",
      shortName: "CVV2.0",
      language: "中文",
      group: "chinese",
      format: "CVV",
      size: "约 51.6 MB",
      file: `${voicebankReleaseBase}/JiangJiu_CVV2.zip`,
      image: "voicebank/江就CVV2.0.png",
      description: "中文 CVV 声库。"
    },
    {
      id: "dec",
      name: "江就 DEC 连呼",
      shortName: "DEC 连呼",
      language: "中文",
      group: "chinese",
      format: "DEC式CVVC",
      size: "约 354.6 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Dec.zip`,
      image: "voicebank/江就dec连呼.png",
      description: "G3 · C4 · E4 三音阶Dec式CVVC中文声库。"
    },
    {
      id: "soft",
      name: "江就 Soft",
      shortName: "Soft",
      language: "中文",
      group: "chinese",
      format: "CVVC",
      size: "约 286.2 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Soft.zip`,
      image: "voicebank/江就_soft.png",
      description: "Soft声线的中文CVVC声库。"
    },
    {
      id: "power",
      name: "江就 Power",
      shortName: "Power",
      language: "中文",
      group: "chinese",
      format: "音色扩展",
      size: "约 104.2 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Power.zip`,
      image: "voicebank/江就_power.png",
      description: "Power声线的中文CVVC声库。"
    },
    {
      id: "special",
      name: "江就 · 殊",
      shortName: "殊",
      language: "中文",
      group: "chinese",
      format: "声库扩展",
      size: "约 148.2 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Special.zip`,
      image: "voicebank/江就_殊.png",
      description: "Light声线的中文CVVC声库。"
    },
    {
      id: "japanese",
      name: "江就日语四音阶连续音",
      shortName: "日语 VCV",
      language: "日语",
      group: "japanese",
      format: "VCV",
      size: "约 67.1 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Japanese_VCV.zip`,
      image: "voicebank/江就日语四音阶连续音.png",
      description: "4阶日语 VCV 声库。"
    },
    {
      id: "diff",
      name: "江就 Diff",
      shortName: "Diff",
      language: "中文 / 日语",
      group: "japanese",
      format: "DiffSinger",
      size: "约 550.8 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Diff.zip`,
      image: "voicebank/江就_Diff.png",
      description: "支持中文与日语的 DiffSinger 声库。"
    },
    {
      id: "korean",
      name: "江就 Korean CVVC",
      shortName: "Korean CVVC",
      language: "韩语",
      group: "other",
      format: "CVVC",
      size: "约 39.3 MB",
      file: `${voicebankReleaseBase}/JiangJiu_KoreanCVVC.zip`,
      image: "voicebank/江就_KoreanCVVC.png",
      description: "收录 D#4 的韩语 CVVC 单音阶声库。"
    },
    {
      id: "sweet",
      name: "江就 Sweet",
      shortName: "Sweet",
      language: "音色扩展",
      group: "other",
      format: "声库扩展",
      size: "约 227.5 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Sweet.zip`,
      image: "voicebank/江就_sweet.png",
      description: "Sweet声线的中文CVVC声库。"
    },
    {
      id: "english",
      name: "江就 English VCCV",
      shortName: "English VCCV",
      language: "英语",
      group: "other",
      format: "VCCV",
      size: "约 183.1 MB",
      file: `${voicebankReleaseBase}/JiangJiu_English_VCCV.zip`,
      image: "voicebank/江就EngVCCV.png",
      description: "英语 VCCV 声库。"
    },
    {
      id: "russian",
      name: "江就 Russian CVC",
      shortName: "Russian CVC",
      language: "俄语",
      group: "other",
      format: "CVC",
      size: "约 32.5 MB",
      file: `${voicebankReleaseBase}/JiangJiu_Russian_CVC.zip`,
      image: "voicebank/江就Rus_CVC.png",
      description: "俄语 CVC 声库。"
    }
  ];

  const SiteHeader = {
    props: {
      active: { type: String, default: "home" }
    },
    data() {
      return {
        menuOpen: false,
        navItems
      };
    },
    template: `
      <header class="site-header" :class="{ 'menu-is-open': menuOpen }">
        <div class="header-inner">
          <a class="brand" href="index.html" aria-label="江就虚拟歌手首页" @click="menuOpen = false">
            <span class="brand-name">江就</span>
            <span class="brand-en">JIANG JIU</span>
          </a>

          <nav class="main-nav" aria-label="主导航">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="item.href"
              class="nav-link"
              :class="{ 'is-active': active === item.id }"
              :aria-current="active === item.id ? 'page' : null"
              @click="menuOpen = false"
            >{{ item.label }}</a>
          </nav>

          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            :aria-label="menuOpen ? '关闭导航菜单' : '打开导航菜单'"
            @click="menuOpen = !menuOpen"
          >
            <span>{{ menuOpen ? '关闭' : '菜单' }}</span>
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
          </button>
        </div>
      </header>
    `
  };

  const SiteFooter = {
    template: `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-brand">
            <strong>江就</strong>
            <span>JIANG JIU / VIRTUAL SINGER</span>
          </div>
          <nav class="footer-nav" aria-label="页脚导航">
            <a href="index.html">首页</a>
            <a href="about.html">介绍</a>
            <a href="download.html">下载</a>
            <a href="contact.html">联系</a>
          </nav>
          <p>管理者：天降甘霖</p>
        </div>
      </footer>
    `
  };

  const SiteFeedback = {
    data() {
      return {
        toast: "",
        downloadBank: null
      };
    },
    beforeUnmount() {
      window.clearTimeout(this._toastTimer);
    },
    methods: {
      showToast(message) {
        this.toast = message;
        window.clearTimeout(this._toastTimer);
        this._toastTimer = window.setTimeout(() => {
          this.toast = "";
        }, 3000);
      },

      requestDownload(bank) {
        this.downloadBank = bank;
      },

      confirmDownload() {
        if (!this.downloadBank) {
          return;
        }

        const bank = this.downloadBank;
        const link = document.createElement("a");
        link.href = bank.file;
        link.download = bank.file.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
        this.downloadBank = null;
        this.showToast(`${bank.name} 已开始下载`);
      }
    }
  };

  const DownloadLicense = {
    props: {
      bank: { type: Object, default: null }
    },
    emits: ["close", "confirm"],
    data() {
      return {
        agreed: false
      };
    },
    watch: {
      bank(value) {
        this.agreed = false;
        document.body.classList.toggle("modal-open", Boolean(value));
        if (value) {
          this.$nextTick(() => this.$refs.closeButton?.focus());
        }
      }
    },
    mounted() {
      this._licenseKeyHandler = (event) => {
        if (event.key === "Escape" && this.bank) {
          this.$emit("close");
        }
      };
      document.addEventListener("keydown", this._licenseKeyHandler);
    },
    beforeUnmount() {
      document.removeEventListener("keydown", this._licenseKeyHandler);
      document.body.classList.remove("modal-open");
    },
    template: `
      <teleport to="body">
        <transition name="modal">
          <div v-if="bank" class="modal-overlay" @click.self="$emit('close')">
            <section class="license-modal" role="dialog" aria-modal="true" aria-labelledby="license-modal-title">
              <button ref="closeButton" class="modal-close" type="button" aria-label="关闭使用规约" @click="$emit('close')">×</button>
              <p class="eyebrow">USAGE AGREEMENT</p>
              <h2 id="license-modal-title">使用规约</h2>
              <p class="modal-bank">即将下载：<strong>{{ bank.name }}</strong></p>
              <ol class="modal-license-list">
                <li>允许音源在标注音源作者的情况下进行二次配布。</li>
                <li>建议使用后将音源标注在醒目位置。</li>
                <li>禁止将音源以任何形式进行贩卖及转卖。</li>
                <li>禁止将音源使用于任何违法及侵权用途。</li>
                <li>禁止将音源用于和政治宣传、宗教布教有关的表现。</li>
                <li>禁止将音源用于侮辱或诋毁该角色或其他角色的用途。</li>
                <li>禁止将音源及形象用于ai活动。</li>
              </ol>
              <label class="license-check">
                <input v-model="agreed" type="checkbox">
                <span>我已阅读并同意以上使用规约</span>
              </label>
              <div class="modal-actions">
                <button class="btn btn-soft" type="button" @click="$emit('close')">取消</button>
                <button class="btn" type="button" :disabled="!agreed" @click="$emit('confirm')">同意并下载</button>
              </div>
            </section>
          </div>
        </transition>
      </teleport>
    `
  };

  window.JiangJiuApp = function (options) {
    const appOptions = Object.assign({}, options);
    appOptions.mixins = [SiteFeedback].concat(options.mixins || []);
    const app = Vue.createApp(appOptions);
    app.component("site-header", SiteHeader);
    app.component("site-footer", SiteFooter);
    app.component("download-license", DownloadLicense);
    return app;
  };

  window.JiangJiuData = {
    voicebanks
  };

  document.documentElement.classList.add("js");
})();

---
layout: home
pageclass: home-page

hero:
  name: "Arch Wiki"
  text: "Keep It Simple, Stupid (KISS)! ✨"
  image:
    src: /archx.webp
    alt: Arch Linux logo
    style: "width: 200px; height: auto;"
  tagline: "Your Simple Guide to Installing and Mastering Arch Linux 🐧"
  actions:
    - theme: brand
      text: What is Arch Linux?
      link: /getting-started/introduction.md
    - theme: alt
      text: Get Started 
      link: /installation/baseinstall.md
    - theme: alt
      text: Github
      link: https://github.com/Justus0405/arch-wiki
features:
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/17377/17377991.png" alt="simple"/>
    title: Simple
    details: Arch Linux follows the KISS (Keep It Simple, Stupid) principle, providing a minimal base for building your system exactly as you need.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12301/12301822.png" alt="lightweitgh"/>
    title: Lightweight
    details: Designed to be minimal and efficient, Arch Linux gives you complete control over which packages and services you want, ensuring a fast and lightweight experience.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/9436/9436966.png" alt="build"/>
    title: Build Your Own
    details: Arch Linux allows you to customize every aspect of your installation, from the kernel to the desktop environment, making it truly yours.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/16814/16814367.png" alt="rolling-release"/>  
    title: Rolling Release
    details: With a rolling release model, Arch Linux always provides the latest software updates, keeping your system cutting-edge without the need for frequent reinstallation.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/9746/9746243.png" alt="documentation"/>
    title: Extensive Documentation
    details: Arch Wiki offers a comprehensive knowledge base, guiding users through installations, troubleshooting, and advanced configurations.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/14931/14931655.png" alt="community"/>
    title: Community-Driven
    details: Supported by a strong and active community, Arch Linux benefits from user contributions, including AUR (Arch User Repository) and forums.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));

  --vp-home-hero-image-background-image: linear-gradient(-45deg, var(--vp-c-purple-3), var(--vp-c-brand-3));
  --vp-home-hero-image-filter: blur(44px);
}

:root {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 55%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 85%);
}

.home-page {
  background:
    linear-gradient(215deg, var(--overlay-gradient), transparent 40%),
    radial-gradient(var(--overlay-gradient), transparent 40%) no-repeat -60vw -40vh / 105vw 200vh,
    radial-gradient(var(--overlay-gradient), transparent 65%) no-repeat 50% calc(100% + 20rem) / 60rem 30rem;

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar:not(.top) {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arch Wiki",
  description: "A concise guide for Arch Linux installation",
  base: "/Arch-Wiki/",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/Arch-Wiki/archx.webp" }],
  ],

  themeConfig: {
    siteTitle: "Arch Wiki",
    logo: "/archx.webp",
    outline: "deep",
    docsDir: "docs",
    editLink: {
      pattern: "https://github.com/Justus0405/Arch-Wiki/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started/introduction" },
      { 
        text: "Resources",
        items: [
          { text: "Download Arch Linux", link: "https://archlinux.org/download/" },
          { text: "Arch Wiki", link: "https://wiki.archlinux.org/" },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
        ]
      },
      {
        text: 'Installation',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Keyring Issues', link: '/installation/keyrings.md' },
          { text: 'Base Installation', link: '/installation/baseinstall.md' },
          { text: 'Post-Installation Configuration', link: '/installation/post-installation.md' },
          { text: 'Bootloader Setup', link: '/installation/grubinstall.md' },
          { text: 'Legacy Notes', link: '/notes/legacy.md' }
        ]
      },
      {
        text: 'Graphics Drivers',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Nvidia Installation', link: '/nvidia/installnvidia.md' },
          { text: 'Deprecated Methods', link: '/nvidia/deprecated.md' },
        ]
      },
      { 
        text: 'Sound',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'PipeWire Setup', link: '/sound/pipewire.md' },
        ]
      },
      {
        text: 'Desktop Environments',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'GNOME Installation', link: '/desktop/desktopenv.md' },
        ]
      },
      {
        text: 'Tiling Window Managers',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Hyprland', link: '/wm/hyprland.md' },
          { text: 'i3wm', link: '/wm/i3.md' },
          { text: 'Dwm', link: '/wm/dwm.md' },
        ]
      },
      {
        text: 'Package Management',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Pacman', link: '/pacman/pacman.md' },
          { text: 'Mirror List', link: '/pacman/mirrorlist.md' }
        ]
      },
      {
        text: 'Essential Configurations',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'NTP Setup', link: '/essential/ntp.md' },
        ]
      },
      {
        text: 'Laptop-Specific',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Battery Optimization', link: '/laptop/batteryopt.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Justus0405" },
      { icon: "discord", link: "https://discord.com/invite/E2Bp7GtcaA" },
      { icon: "telegram", link: "https://t.me/harilvfs" },
    ],
    footer: {
      message: "Released under the MIT License. Built by <a href='https://github.com/harilvfs' target='_blank'>harilvfs</a> (aka Hari Chalise).",
      copyright: "Copyright © 2024 justus0405",
    },

    search: {
      provider: "local",
    },
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Sidebar Menu',
  },
});


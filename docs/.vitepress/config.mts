import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arch Wiki",
  description: "My Personal Arch Linux Notes",
  base: "/Arch-Wiki/",
  head: [
    ["link", { rel: "icon", href: "/Arch-Wiki/archx.webp" }]
  ],

  themeConfig: {
    logo: "/archx.webp",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/1-getting-started/inside-iso.md" },
      {
        text: "Resources",
        items: [
          { text: "Download Arch Linux", link: "https://archlinux.org/download/" },
          { text: "Arch Wiki", link: "https://wiki.archlinux.org/" }
        ],
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Base-Installation', link: '/1-getting-started/inside-iso.md' },
          { text: 'Enviroment-Installation', link: '/1-getting-started/inside-enviroment.md' },
          { text: 'Grub-Installation', link: '/1-getting-started/grub-install.md' }
        ]
      },
      {
        text: 'Pacman',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Pacman', link: '/2-pacman/pacman.md' },
          { text: 'Mirror List', link: '/2-pacman/mirrorlist.md' },
          { text: 'Keyring Troubleshooting', link: '/2-pacman/keyrings.md' }
        ]
      },
      {
        text: 'Graphics Drivers',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Nvidia', link: '/3-gpu-drivers/install-nvidia.md' },
          { text: 'Nvidia Depricated', link: '/3-gpu-drivers/nvidia-depricated.md' }
        ]
      },
      {
        text: 'Sound',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'PipeWire Setup', link: '/4-sound/pipewire.md' }
        ]
      },
      {
        text: 'Desktop Environments',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'GNOME Installation', link: '/5-desktop/install-gnome.md' }
        ]
      },
      {
        text: 'Tiling Window Managers',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Hyprland', link: '/6-wm/hyprland.md' },
          { text: 'i3wm', link: '/6-wm/i3.md' },
          { text: 'Dwm', link: '/6-wm/dwm.md' }
        ]
      },
      {
        text: 'Essential Configurations',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Fonts', link: '/7-essentials/install-fonts.md' },
          { text: 'NTP Setup', link: '/7-essentials/ntp.md' },
          { text: 'Printers Setup', link: '/7-essentials/setup-printers.md' }
        ]
      },
      {
        text: 'Laptop-Specific',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Prevent Lid closing', link: '/8-laptop/prevent-lid.md' },
          { text: 'Battery Optimization', link: '/8-laptop/battery-optimizations.md' }
        ]
      },
      {
        text: 'Special Thanks',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Contributors', link: '/9-extra/contributors.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Justus0405" },
      { icon: "discord", link: "https://discord.com/invite/E2Bp7GtcaA" }
    ],

    search: {
      provider: "local"
    },
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Sidebar Menu'
  }
})

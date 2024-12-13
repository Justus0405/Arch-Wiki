# Install a Desktop Environment

**When installing a full desktop environment, most of them handle the audio server and other components automatically. Below is a brief guide to getting started with GNOME.**

## Prerequisites

*Before you begin, make sure your system is up to date:*

```bash
sudo pacman -Syyu
```

### Required Packages

- **`gnome`**: *This is the desktop environment itself.*
- **`gnome-tweaks`**: *A settings application for changing themes, fonts, cursors, and various other settings.*
- **`gdm`**: *The login manager (also called the window manager). This is the program where you enter your username and password and select the desktop environment.*
- **`gst-libav`**: *Provides multimedia codecs and enables video file previews in GNOME's file manager, Nautilus.*
- **`pipewire-jack`**: *Provides legacy JACK support for the modern PipeWire audio server.*
- **`noto-fonts-emoji`**: *Google’s Emoji Font, ensuring you don’t end up with missing character symbols.*

***To install these packages, run the following command:***

```bash
sudo pacman -S gnome gnome-tweaks gdm gst-libav pipewire-jack noto-fonts-emoji
```

### If you have trouble with some missing Fonts, here is a list with the essentials:
> [!INFO]
> **`noto-fonts noto-fonts-emoji noto-fonts-cjk noto-fonts-extra`**: Essential for wide language coverage, supporting many scripts and special characters.
<br><br>
> **`ttf-source-code-pro`**, **`ttf-source-sans-pro`**, **`ttf-source-serif-pro`**: These fonts provide high-quality typefaces for Latin characters in monospace, sans-serif, and serif categories.
<br><br>
> **`ttf-adobe-source-han-sans-otc`** and **`ttf-adobe-source-han-serif-otc`**: Designed for East Asian languages (CJK), offering high-quality sans and serif font options for Chinese, Japanese, and Korean characters.
<br><br>
> **`ttf-hanazono`**: Covers historical CJK characters, ensuring compatibility with ancient scripts.
<br><br>
> **`ttf-liberation`**: Provides metric-compatible fonts for Arial, Times New Roman, and Courier New, which helps maintain layout consistency in documents created with these standard fonts.
<br><br>
> **`ttf-dejavu`**: Some games, especially by Valve, are designed with this font in mind. Installing it prevents tiny, hard-to-read fallback text by providing the correct font size.

### Keyboard Layout

*If you are using a non-US keyboard layout, it’s advisable to change it with the following command. Logging in with a non-functional layout can be quite challenging:*


```bash
sudo localectl set-keymap de-latin1
```

### Enable the Display Manager

*Next, enable the autostart for the login manager (GDM):*

```bash
sudo systemctl enable gdm
```

### Reboot

*You are now ready to reboot into your new desktop environment!*

```bash
sudo reboot
```


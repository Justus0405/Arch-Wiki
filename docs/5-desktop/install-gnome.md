# Install a Desktop Environment

> [!INFO]
> This guide will help you install the GNOME desktop environment on your system.
> Most components like audio and multimedia support are handled automatically.


## Prerequisites
Make sure your system is up to date before starting:

```bash
sudo pacman -Syyu
```


## Install The Packages

Here’s what you need to install:

- **`gnome`**: The GNOME desktop environment.
- **`gnome-tweaks`**: For customizing themes, fonts, and more.
- **`gdm`**: The login manager where you log in and select GNOME.
- **`gst-libav`**: Multimedia codecs for video previews in the file manager.
- **`pipewire-jack`**: Support for legacy JACK audio with PipeWire.
- **`noto-fonts-emoji`**: Google’s Emoji Font for proper emoji display.

```bash
sudo pacman -S gnome gnome-tweaks gdm gst-libav pipewire-jack noto-fonts-emoji
```


## Set Your Keyboard Layout

> [!WARNING]
> This step is crucial if you are using a non-US keyboard
> because you wouldnt be able to login later if not set correctly

> [!NOTE]
> Laptops use latin1 because the layout is slightly different.
> For example, `de-latin1`.

```bash
sudo localectl set-keymap de
```

## Enable the Login Manager

Set GDM (GNOME Display Manager) to start automatically on boot:

```bash
sudo systemctl enable gdm
```


## Reboot and Enjoy!

> [!INFO]
> You’re all set! Reboot your system to log into your new GNOME desktop environment:

```bash
sudo reboot
```
# Deprecated Nvidia Driver Installation Methods

> [!INFO]
> Stay updated with modern practices! Here’s a quick overview of deprecated methods for installing or configuring Nvidia drivers on Arch Linux.

> [!TIP]
> For Modern Nvidia drivers streamline configuration. Use the `MODULES` array in `mkinitcpio.conf`, update GRUB for kernel settings, and let auto-configuration handle the rest!

## Manual `modprobe` for Nvidia Modules

- **What it did**: Manually loaded Nvidia kernel modules like `nvidia` or `nvidia_drm`.
- **Why deprecated**: Modern systems automatically load these if added to the `MODULES` array in `/etc/mkinitcpio.conf`. Regenerate the initramfs with `mkinitcpio -P`, and you're good to go!

## Nvidia Hook in `mkinitcpio.conf`

- **What it did**: Added an explicit `nvidia` hook to include Nvidia modules in the initramfs.
- **Why deprecated**: Just list the modules in the `MODULES` array of `/etc/mkinitcpio.conf`. The hook is unnecessary.

## Adding `kms` Hook for KMS

- **What it did**: Ensured early Kernel Mode Setting (KMS) during boot.
- **Why deprecated**: Because of the `MODULES` array in `/etc/mkinitcpio.conf`. The `kms` hook is no longer needed.

## Using `/etc/modprobe.d/nvidia.conf` for Modesetting

- **What it did**: Set `nvidia-drm.modeset=1` in a configuration file.
- **Why deprecated**: Add `nvidia-drm.modeset=1` to the kernel command line in GRUB (`/etc/default/grub`). This method is cleaner and applies during boot.

## Custom `xorg.conf` for Nvidia

- **What it did**: Manually configured Nvidia via `/etc/X11/xorg.conf`.
- **Why deprecated**: Modern systems auto-configure Nvidia, especially on Wayland. Xorg configurations are rarely needed anymore, and a minimal `/etc/X11/xorg.conf.d/` directory is typically sufficient.

## Manually Enabling PCIe Gen 3

- **What it did**: Forced PCIe Gen 3 with `nvidia.NVreg_EnablePCIeGen3=1`.
- **Why deprecated**: Modern systems automatically enable the highest supported PCIe generation. This setting is unnecessary unless working with legacy hardware.

## Manually Blacklisting `nouveau`

- **What it did**: Prevented the open-source `nouveau` driver from interfering with Nvidia.
- **Why deprecated**: The Nvidia driver package automatically blacklists `nouveau`. No need for manual blacklists!

## Nvidia Hook for Suspend/Resume

- **What it did**: Used `nvidia.NVreg_PreserveVideoMemoryAllocations=1` to avoid issues during suspend/resume cycles.
- **Why deprecated**: Modern Nvidia drivers handle suspend/resume better. This option is usually redundant unless specific issues arise.

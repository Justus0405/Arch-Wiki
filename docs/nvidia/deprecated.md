# List of deprecated methods for Nvidia drivers:

### 1. **Manual Use of `modprobe` for Nvidia Modules**
   - **What it used to do**: Manually load Nvidia kernel modules like `nvidia`, `nvidia_modeset`, `nvidia_uvm`, and `nvidia_drm` using `modprobe`.
   - **Why it's deprecated**: With modern Nvidia drivers and kernel integration, these modules are automatically loaded by the system at boot if they are listed in `/etc/mkinitcpio.conf`. Adding them manually with `modprobe` is redundant, and configuring them in `mkinitcpio.conf` and regenerating the initramfs (`mkinitcpio -P`) handles everything.

### 2. **Nvidia Hook in `mkinitcpio.conf`**
   - **What it used to do**: Ensure that Nvidia modules were included in the initramfs by adding an `nvidia` hook in `/etc/mkinitcpio.conf`.
   - **Why it's deprecated**: The hook is no longer necessary because Nvidia modules are included automatically if they are listed in the `MODULES` array of `mkinitcpio.conf`. There is no need to add an explicit hook, as the process is managed more cleanly and efficiently by the `MODULES` section.

### 3. **Adding `kms` Hook to `mkinitcpio.conf`**
   - **What it used to do**: Ensure that Kernel Mode Setting (KMS) was loaded early in the boot process for Nvidia.
   - **Why it's deprecated**: KMS is handled by adding `nvidia_drm` to the `MODULES` array in `mkinitcpio.conf`. This achieves the same result without needing the `kms` hook, which was more generally used for Intel or AMD drivers. For Nvidia, adding `nvidia_drm` in `MODULES` is the preferred and sufficient method.

### 4. **Using `/etc/modprobe.d/nvidia.conf` to Set `nvidia-drm.modeset=1`**
   - **What it used to do**: Set `nvidia-drm.modeset=1` via a file like `/etc/modprobe.d/nvidia.conf`.
   - **Why it's deprecated**: This is now handled more efficiently by adding `nvidia-drm.modeset=1` directly to the kernel command line in the GRUB configuration (`/etc/default/grub`). The kernel processes this setting on boot, making the manual `modprobe` configuration redundant.

### 5. **Custom `xorg.conf` for Nvidia Configuration**
   - **What it used to do**: Historically, users manually configured Nvidia settings through `/etc/X11/xorg.conf` or `/etc/X11/xorg.conf.d/`.
   - **Why it's deprecated**: Modern systems (especially with Wayland) do not require manual Xorg configurations unless there's a very specific need. Nvidia drivers now auto-configure for most setups, and Wayland-based systems bypass Xorg configurations entirely. In most cases, an empty or minimal `/etc/X11/xorg.conf.d/` folder is sufficient.

### 6. **Manually Enabling PCIe Gen 3 with `nvidia.NVreg_EnablePCIeGen3=1`**
   - **What it used to do**: Force the GPU to use PCIe Generation 3, as some systems defaulted to PCIe Generation 2.
   - **Why it's deprecated**: On modern systems, PCIe Gen 3 (or even Gen 4) is automatically enabled if both the motherboard and GPU support it. This option is no longer necessary unless dealing with legacy hardware where the system mistakenly selects a lower PCIe generation.

### 7. **Manually Loading `nouveau` Blacklist**
   - **What it used to do**: Users had to manually blacklist the open-source `nouveau` driver (via `/etc/modprobe.d/blacklist.conf`) to prevent it from loading and interfering with the proprietary Nvidia driver.
   - **Why it's deprecated**: The Nvidia driver installation package automatically blacklists `nouveau`. Users no longer need to manually create or edit blacklist files for this.

### 8. **Using `nvidia` Hook for Suspend/Resume (`nvidia.NVreg_PreserveVideoMemoryAllocations=1`)**
   - **What it used to do**: Preserve video memory during suspend/resume cycles to prevent graphical issues or crashes.
   - **Why it's deprecated**: Nvidia has improved its suspend/resume support in the drivers, and the option `nvidia.NVreg_PreserveVideoMemoryAllocations=1` is typically not necessary unless you have specific issues with suspend/resume. In most modern systems, this is handled automatically, and enabling the option is often redundant.




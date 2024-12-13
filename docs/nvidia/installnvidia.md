# Installing NVIDIA Drivers on Arch Linux

### Install NVIDIA Packages

**Open a terminal and run the following command to install the necessary NVIDIA packages:**

```bash
sudo pacman -S nvidia-dkms libglvnd nvidia-utils opencl-nvidia nvidia-settings lib32-nvidia-utils lib32-opencl-nvidia egl-wayland
```

### Configure mkinitcpio

- Open the `mkinitcpio.conf` file:

   ```bash
   sudo nano /etc/mkinitcpio.conf
   ```

- Find the `MODULES` line and add the following modules:

   ```plaintext
   MODULES=(nvidia nvidia_modeset nvidia_uvm nvidia_drm)
   ```

- Remove `kms` from the `HOOKS` line to avoid conflicts. It might look something like this:

   ```plaintext
   HOOKS=(base udev autodetect modconf block filesystems keyboard fsck)
   ```

**Save and exit the file (Ctrl + X, then Y, then Enter).**

### Create NVIDIA Configuration File

***Create the `/etc/modprobe.d/nvidia.conf` file:***

```bash
sudo nano /etc/modprobe.d/nvidia.conf
```

***Add the following line to the file:***

```plaintext
options nvidia_drm modeset=1 fbdev=1
```

**Save and exit the file (Ctrl + X, then Y, then Enter).**

### Update GRUB Configuration

- Open the GRUB configuration file:

   ```bash
   sudo nano /etc/default/grub
   ```

- Find the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and update it to include the following options:

   ```plaintext
   GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet nvidia_drm.modeset=1"
   ```

- Save and exit the file (Ctrl + X, then Y, then Enter).

### Regenerate initramfs

***Run the following command to regenerate the initramfs with your changes:***

```bash
sudo mkinitcpio -P
```

### Update GRUB

***Run the following command to update the GRUB configuration:***

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### Reboot

***Finally, reboot your system to apply the changes:***

```bash
sudo reboot
```


# Arch Linux Laptop Battery Tweaks Guide

> [!INFO]
> This guide helps improve battery life on Arch Linux laptops.

## 1. Battery Optimization

> [!Warning]
> Avoid using both `tlp` and `auto-cpufreq` together as they can conflict with each other. Choose one power management tool.

### 1.1. Using `auto-cpufreq` (Recommended)

> [!INFO]
> auto-cpufreq adjusts CPU frequency and power based on system load.

- Install `auto-cpufreq`:

  ```shell
  yay -S auto-cpufreq
  ```

- Test in live mode:

  ```shell
  sudo auto-cpufreq --live
  ```

- Enable automatic startup:

  ```shell
  sudo auto-cpufreq --install
  ```

- Monitor system behavior:

  ```shell
  sudo auto-cpufreq --monitor
  ```

- View CPU stats:

  ```shell
  sudo auto-cpufreq --stats
  ```

- Uninstall:

  ```shell
  sudo auto-cpufreq --remove
  ```

### 1.2. Using TLP (Advanced Power Management)

> [!INFO]
> TLP optimizes battery life automatically.

- Install TLP:

  ```shell
  sudo pacman -S tlp tlp-rdw
  ```

- Start and enable TLP:

  ```shell
  sudo systemctl enable tlp --now
  ```

- Check TLP status:

  ```shell
  sudo tlp-stat
  ```

- Optional: Install GUI for TLP:

  ```shell
  yay -S tlpui
  ```

## 2. Adjust Swap Usage (Swappiness)

> [!INFO]
> Reduce swap usage for better performance.

- Check current swappiness:

  ```shell
  cat /proc/sys/vm/swappiness
  ```

- Set swappiness to 10:

  Edit `/etc/sysctl.conf`:

  ```shell
  sudo nano /etc/sysctl.conf
  ```

  Add:

  ```shell
  vm.swappiness=10
  ```

- Apply changes:

  ```shell
  sudo sysctl -p
  ```

## 3. File System Performance

### 3.1. (SSD) Configuring noatime

> [!INFO]
> Disabling file access time `noatime` prevents unnecessary disk writes, improving performance and longevity, especially on SSDs.

- Edit `/etc/fstab`:

  ```shell
  sudo nano /etc/fstab
  ```

- Add `noatime` to the root partition:

  ```ini
  UUID=<your-disk-UUID> / ext4 defaults,noatime 0 1
  ```

- Reboot to apply changes:

  ```shell
  sudo reboot
  ```

### 3.2. (HDD) Configuring HDD Spin Times

> [!INFO]
> Make your HDD spin down after a given amount of time, this will improve longevity and save power. The value is in multiples of 5 seconds.
> Example: To set it to 10 minutes (600 seconds)

> [!WARNING]
> Setting this too low may cause frequent spin-ups, which can reduce drive lifespan.

- Set the spindown timeout:

  ```shell
  sudo hdparm -S 120 /dev/sdX
  ```

- To disable spindown:

  ```shell
  sudo hdparm -S 0 /dev/sdX
  ```

## 4. System Monitoring Tools

### 4.1. `powertop` (Power Consumption Monitor)

- Install `powertop`:

  ```shell
  sudo pacman -S powertop
  ```

- Run `powertop` in interactive mode:

  ```shell
  sudo powertop
  ```

- Optimize settings:

  ```shell
  sudo powertop --auto-tune
  ```

### 4.2. `btop` or `htop` (Resource Monitoring)

- Install `btop`:

  ```shell
  sudo pacman -S btop
  ```

- Install `htop`:

  ```shell
  sudo pacman -S htop
  ```

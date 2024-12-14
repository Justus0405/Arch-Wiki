# Arch Linux Laptop Battery Tweaks Guide

> [!INFO] 
> This guide helps improve battery life on Arch Linux laptops.

## 1. Battery Optimization

> [!Warning]
> Avoid using both `tlp` and `auto-cpufreq` together as they can conflict with each other. Choose one power management tool.

### 1.1. Using `auto-cpufreq` (Recommended)

> [!INFO]
> `auto-cpufreq` adjusts CPU frequency and power based on system load.

- **Install `auto-cpufreq`**:

    ```bash
    yay -S auto-cpufreq
    ```

- **Test in live mode**:

    ```bash
    sudo auto-cpufreq --live
    ```

- **Enable automatic startup**:

    ```bash
    sudo auto-cpufreq --install
    ```

- **Monitor system behavior**:

    ```bash
    sudo auto-cpufreq --monitor
    ```

- **View CPU stats**:

    ```bash
    sudo auto-cpufreq --stats
    ```

- **Uninstall**:

    ```bash
    sudo auto-cpufreq --remove
    ```

### 1.2. Using TLP (Advanced Power Management)

> [!INFO]
> TLP optimizes battery life automatically.

- **Install TLP**:

    ```bash
    sudo pacman -S tlp tlp-rdw
    ```

- **Start and enable TLP**:

    ```bash
    sudo systemctl enable tlp --now
    ```

- **Check TLP status**:

    ```bash
    sudo tlp-stat
    ```

- **Optional: Install GUI for TLP**:

    ```bash
    yay -S tlpui
    ```

### 1.3. CPU Scaling Governor

> [!INFO]
> Balance performance and battery use by adjusting the CPU governor.

- **Install `cpupower`**:

    ```bash
    sudo pacman -S cpupower
    ```

- **View current CPU governor**:

    ```bash
    cpupower frequency-info
    ```

- **Set CPU governor**:

    - For balanced performance:

        ```bash
        sudo cpupower frequency-set -g schedutil
        ```

    - For battery efficiency:

        ```bash
        sudo cpupower frequency-set -g powersave
        ```

- **Make the governor setting persistent**:

    Edit the `cpupower` configuration:

    ```bash
    sudo nano /etc/default/cpupower
    ```

    Add `GOVERNOR="schedutil"` or `GOVERNOR="powersave"`.

- **Enable and start the service**:

    ```bash
    sudo systemctl enable cpupower --now
    ```

## 2. Adjust Swap Usage (Swappiness)

> [!INFO]
> Reduce swap usage for better performance.

- **Check current swappiness**:

    ```bash
    cat /proc/sys/vm/swappiness
    ```

- **Set swappiness to 10**:

    Edit `/etc/sysctl.conf`:

    ```bash
    sudo nano /etc/sysctl.conf
    ```

    Add:

    ```bash
    vm.swappiness=10
    ```

- **Apply changes**:

    ```bash
    sudo sysctl -p
    ```

## 3. File System Performance (noatime)

> [!INFO]
> Disable file access time writes for better performance, especially on SSDs.

- **Edit `/etc/fstab`**:

    ```bash
    sudo nano /etc/fstab
    ```

    Add `noatime` to the root partition:

    ```bash
    UUID=<your-disk-UUID> / ext4 defaults,noatime 0 1
    ```

    Reboot to apply changes:

    ```bash
    sudo reboot
    ```

## 4. System Monitoring Tools

### 4.1. `powertop` (Power Consumption Monitor)

- **Install `powertop`**:

    ```bash
    sudo pacman -S powertop
    ```

- **Run `powertop` in interactive mode**:

    ```bash
    sudo powertop
    ```

- **Optimize settings**:

    ```bash
    sudo powertop --auto-tune
    ```

### 4.2. `btop` or `htop` (Resource Monitoring)

- **Install `btop`**:

    ```bash
    sudo pacman -S btop
    ```

- **Install `htop`**:

    ```bash
    sudo pacman -S htop
    ```
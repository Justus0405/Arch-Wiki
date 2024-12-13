# Arch Linux Laptop Tweaks Guide

This guide helps improve laptop performance, battery life, and usability on Arch Linux.

### 1. Prevent Sleep When Lid is Closed

To keep your laptop running with the lid closed, modify systemd's configuration.

- Open a terminal and run:

    ```bash
    sudo tee -a /etc/systemd/logind.conf << EOF
    HandleSuspendKey=ignore
    HandleSuspendKeyLongPress=ignore
    HandleHibernateKey=ignore
    HandleHibernateKeyLongPress=ignore
    HandleLidSwitch=ignore
    HandleLidSwitchExternalPower=ignore
    HandleLidSwitchDocked=ignore
    EOF
    ```

- Reload the systemd config:

    ```bash
    sudo systemctl restart systemd-logind
    ```

---

### 2. Battery Optimization

> [!Warning]
> Using both `tlp` and `auto-cpufreq` together will cause compatibility issues. It is recommended to use one power management tool at a time to avoid conflicts in settings and performance optimization.

#### 2.1. auto-cpufreq (CPU Power Scaling) (Recommended)

`auto-cpufreq` adjusts CPU frequency and power settings based on system load and battery status, optimizing performance and energy use.

- **Install `auto-cpufreq`** (requires an AUR helper like `yay`):

    ```bash
    yay -S auto-cpufreq
    ```

- **Test in live mode** (observe real-time adjustments without installation):

    ```bash
    sudo auto-cpufreq --live
    ```

- **Enable automatic startup** (run at boot for automatic adjustments):

    ```bash
    sudo auto-cpufreq --install
    ```

- **Monitor system over time** (observe system behavior without making changes):

    ```bash
    sudo auto-cpufreq --monitor
    ```

- **View CPU statistics**:

    ```bash
    sudo auto-cpufreq --stats
    ```

- **Uninstall the service**:

    ```bash
    sudo auto-cpufreq --remove
    ```

#### 2.2. TLP (Advanced Power Management)

TLP optimizes battery life automatically.

- Install TLP:

    ```bash
    sudo pacman -S tlp tlp-rdw
    ```

- Start and enable the service:

    ```bash
    sudo systemctl enable tlp --now
    ```

- Check TLP status:

    ```bash
    sudo tlp-stat
    ```

- **Optional**: For a GUI, install `tlpui` (requires AUR helper like `yay`):

    ```bash
    yay -S tlpui
    ```

    Run `tlpui` to configure TLP with a graphical interface.

#### 2.3. CPU Scaling Governor

Optimize your CPU governor to balance performance and power usage, especially on battery-powered devices.

- Install Dependencies:

    ```bash
    sudo pacman -S cpupower
    ```

- View Current CPU Governor:

    ```bash
    cpupower frequency-info
    ```

    Or use:

    ```bash
    cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
    ```

- Set the CPU Governor:

    To set the governor to `schedutil` (recommended for modern kernels):

    ```bash
    sudo cpupower frequency-set -g schedutil
    ```

    For maximum battery efficiency, use the `powersave` governor:

    ```bash
    sudo cpupower frequency-set -g powersave
    ```

- Make the Governor Setting Persistent:

    Open the `cpupower` configuration file for editing:

    ```bash
    sudo nano /etc/default/cpupower
    ```

    Add or edit the following line:

    ```bash
    GOVERNOR="schedutil"  # or "powersave"
    ```

- Enable and Start the `cpupower` Service:

    ```bash
    sudo systemctl enable cpupower --now
    ```

- Verify the Governor Setting:

    ```bash
    cpupower frequency-info
    ```

---

### 3. Adjust Swap Usage (Swappiness)

Reduce swap usage to improve performance.

- Check current swappiness (Default = 60):

    ```bash
    cat /proc/sys/vm/swappiness
    ```

- Edit the config file:

    ```bash
    sudo nano /etc/sysctl.conf
    ```

- Set swappiness to 10 for less aggressive swap usage:

    ```bash
    vm.swappiness=10
    ```

- Apply changes:

    ```bash
    sudo sysctl -p
    ```

---

### 4. File System Performance (noatime)

Disable file access time writes for better performance, especially on SSDs.

- Edit `/etc/fstab`:

    ```bash
    sudo nano /etc/fstab
    ```

- Add `noatime` to your root (`/`) partition options:

    ```bash
    UUID=<your-disk-UUID> / ext4 defaults,noatime 0 1
    ```

*Reboot to apply the change.*

---

### 5. System Monitoring Tools

#### 5.1. powertop (Power Consumption Monitor)

Monitor and optimize power usage.

- Install `powertop`:

    ```bash
    sudo pacman -S powertop
    ```

- Run in interactive mode:

    ```bash
    sudo powertop
    ```

- Optimize settings automatically:

    ```bash
    sudo powertop --auto-tune
    ```

#### 5.2. btop or htop (Resource Monitoring)

Monitor CPU, memory, and system resources.

- Install `btop`:

    ```bash
    sudo pacman -S btop
    ```

- Install `htop`:

    ```bash
    sudo pacman -S htop
    ```


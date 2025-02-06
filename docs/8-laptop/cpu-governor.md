# Arch Linux CPU Governor Guide

> [!INFO]
> This guide helps improve either performance or battery life on Arch Linux.

## 1. Display Governor

- **Display Current Governor**:

  ```bash
  cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
  ```

- **Display Available Governors**:

  ```bash
  cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_available_governors
  ```

## 2. Change Governor

> [!TIP]
> Balance performance and battery use by adjusting the CPU governor.

- **Install `cpupower`**:

  ```bash
  sudo pacman -S cpupower
  ```

- **Set CPU governor**:

  - For battery efficiency:

    ```bash
    sudo cpupower frequency-set -g schedutil
    ```

  - For performance:

    ```bash
    sudo cpupower frequency-set -g performance
    ```

- **Make the governor setting persistent**:

  Edit the `cpupower` configuration:

  ```bash
  sudo nano /etc/default/cpupower
  ```

  Add `GOVERNOR="schedutil"` or `GOVERNOR="performance"`.

- **Enable and start the service**:

  ```bash
  sudo systemctl enable cpupower --now
  ```
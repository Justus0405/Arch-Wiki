# Arch Linux CPU Governor Guide

> [!INFO]
> This guide helps improve either performance or battery life on Arch Linux.

## 1. Display Governor

- Display Current Governor:

  ```shell
  cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
  ```

- Display Available Governors:

  ```shell
  cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_available_governors
  ```

## 2. Change Governor

> [!TIP]
> Balance performance and battery use by adjusting the CPU governor.

- Install `cpupower`:

  ```shell
  sudo pacman -S cpupower
  ```

### Set CPU governor:

- For battery efficiency:

  ```shell
  sudo cpupower frequency-set -g schedutil
  ```

- For performance:

  ```shell
  sudo cpupower frequency-set -g performance
  ```

### Make the governor setting persistent:

Edit the `cpupower` configuration:

```shell
sudo nano /etc/default/cpupower
```

Add `GOVERNOR="schedutil"` or `GOVERNOR="performance"`.

- Enable and start the service:

  ```shell
  sudo systemctl enable cpupower --now
  ```

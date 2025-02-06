# NTP Guide for Arch Linux

> [!INFO]
> Keep your system clock accurate with NTP on Arch Linux, especially helpful for dual-boot setups.

## 1. Using `systemd-timesyncd`

`systemd-timesyncd` is a simple NTP client to sync your system clock.

### Enable and Start `systemd-timesyncd`:

```bash
sudo systemctl enable systemd-timesyncd --now
```

### Check Sync Status:

```bash
timedatectl status
```

Look for `System clock synchronized: yes`.

### (Optional) Customize NTP Servers:

Edit the config to change default NTP servers:

```bash
sudo nano /etc/systemd/timesyncd.conf
```

Example config:

```ini
[Time]
NTP=0.arch.pool.ntp.org 1.arch.pool.ntp.org
FallbackNTP=2.arch.pool.ntp.org 3.arch.pool.ntp.org
```

### Restart `systemd-timesyncd`:

```bash
sudo systemctl restart systemd-timesyncd
```

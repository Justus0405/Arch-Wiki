# NTP-Guide for Arch Linux

To ensure always-accurate Date & Time on Arch Linux, which is useful for dual-boot systems

### 1: Using `systemd-timesyncd` (recommended for simplicity)
`systemd-timesyncd` is a basic NTP client, suitable for keeping the system clock synchronized.

- **Enable and Start `systemd-timesyncd`:**

   ```bash
   sudo systemctl enable systemd-timesyncd --now
   ```

- **Verify Time Sync Status:**

   ```bash
   timedatectl status
   ```

   Look for `System clock synchronized: yes` in the output.

- **Optional: Configure NTP Servers**

   By default, `systemd-timesyncd` uses public NTP servers. To customize them, edit the config file:

   ```bash
   sudo nano /etc/systemd/timesyncd.conf
   ```

   Add or modify NTP servers under `[Time]`, for example:

   ```ini
   [Time]
   NTP=0.arch.pool.ntp.org 1.arch.pool.ntp.org
   FallbackNTP=2.arch.pool.ntp.org 3.arch.pool.ntp.org
   ```

- **Restart `systemd-timesyncd`:**

   ```bash
   sudo systemctl restart systemd-timesyncd
   ```

### 2: Using `chrony` (recommended for advanced features)
`chrony` is more accurate and has advanced features like handling intermittent network connections better than `systemd-timesyncd`.

- **Install `chrony`:**

   ```bash
   sudo pacman -S chrony
   ```

- **Enable and Start `chronyd`:**

   ```bash
   sudo systemctl enable chronyd --now
   ```

- **Verify Time Sync Status:**

   ```bash
   chronyc tracking
   ```

   This should display information on the current time sync status.

- **Configure NTP Servers (Optional):**

   Edit `/etc/chrony.conf` if you want to specify NTP servers.

- **Restart `chronyd` if Config is Changed:**

   ```bash
   sudo systemctl restart chronyd
   ```
- **Verify Time Sync Status:**

   ```bash
   timedatectl status
   ```

   Look for `System clock synchronized: yes` in the output.


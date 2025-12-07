# Inside the Environment

## 10. Enable Services

> [!INFO]
> Automatically start NetworkManager and NTP at boot to manage network connections and sync time.

```shell
systemctl enable NetworkManager systemd-timesyncd
```

> [!INFO]
> Run TRIM once a week on all supported drives.
> TRIM tells an SSD or NVMe which blocks are no longer in use so it can clean them up in advance, improving performance and extending the drive’s lifespan.
> Enabling this won't affect HDD's.

```shell
sudo systemctl enable fstrim.timer
```

## 11. Configure `pacman.conf`

> [!INFO]
> Edit `pacman.conf` to optimize package downloads and add 32-bit support.

```shell
nano /etc/pacman.conf
```

> [!TIP]
> Navigate `nano` with arrow keys. Save with `CTRL + O` and exit with `CTRL + X`. To exit without saving, press `CTRL + X` and `n`.

### Edit the [options] section:

Find the section called [options] and add the follwing lines below:

```ini
[options]
ILoveCandy
ParallelDownloads = 5
```

### Enable 32-bit application support:

Scroll to the bottom of the file until you see these lines:

```ini
#[multilib]
#Include = /etc/pacman.d/mirrorlist
```

Uncomment them, so it looks like this:

```ini
[multilib]
Include = /etc/pacman.d/mirrorlist
```

This activates the multilib repository, which is required if you want to run 32-bit programs on a 64-bit system (for example, Steam and some older apps).

> [!INFO]
> In Summary:
>
> - `ILoveCandy` → Adds visual effects to downloads.
> - `ParallelDownloads` → Enables faster downloads.
> - `multilib` → Adds 32-bit support (for apps like Steam).

## 12. Update Pacman Repositories

> [!INFO]
> Refresh the package database to get the latest software versions.

```shell
pacman -Syy
```

## 13. Set the System Timezone

> [!INFO]
> Set your timezone (replace `Europe/Berlin` with yours):

```shell
ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime
```

> [!INFO]
> Sync the system clock with the BIOS clock:

```shell
hwclock --systohc
```

## 14. Set Locale

> [!INFO]
> Set the system's language and encoding.

1. Edit `locale.gen` to uncomment your locale:

   ```shell
   nano /etc/locale.gen
   ```

   > [!TIP]
   > Use `CTRL + W` to search for your locale.

2. Generate the locale:

   ```shell
   locale-gen
   ```

3. Set the default system language (replace `de_DE.UTF-8` with yours):
   ```shell
   echo "LANG=de_DE.UTF-8" > /etc/locale.conf
   ```

## 15. Set the Hostname

> [!INFO]
> Set your system's hostname which is displayed in your network:

```shell
echo "arch" > /etc/hostname
```

## 16. Configure Keyboard Layout for Console

> [!INFO]
> Set the console keyboard layout (replace `de` with yours).
> Laptops use latin1 because the layout is slightly different.
> For example, `de-latin1`.

```shell
echo "KEYMAP=de" > /etc/vconsole.conf
```

## 17. Create a New User

```shell
useradd -m -G wheel,power,storage,render,video,audio -s /bin/bash justus
```

## 18. Set the user’s password:

```shell
passwd justus
```

## 19. Grant Sudo Access (Admin Privilages)

> [!INFO]
> This gives `sudo` access to users in the `wheel` group.

1. Open the `sudoers` file:

   ```shell
   EDITOR=nano visudo
   ```

2. Uncomment this line (remove the `#`):
   ```shell
   %wheel ALL=(ALL:ALL) ALL
   ```

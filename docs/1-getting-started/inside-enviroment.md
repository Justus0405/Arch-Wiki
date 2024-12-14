# Inside the Environment

## Enable NetworkManager

> [!INFO]
> Automatically start NetworkManager to manage network connections at boot.

```bash
systemctl enable NetworkManager
```

## Configure `pacman.conf`

> [!INFO]
> Edit `pacman.conf` to optimize package management.


```bash
nano /etc/pacman.conf
```

> [!TIP]
> Navigate `nano` with arrow keys. Save with `CTRL + O` and exit with `CTRL + X`. To exit without saving, press `CTRL + X` and `n`.

Add these lines:
```bash
[options]
ILoveCandy
ParallelDownloads = 5

[multilib]
Include = /etc/pacman.d/mirrorlist
```

- `ILoveCandy`: Adds visual effects to downloads.
- `ParallelDownloads`: Enables faster downloads.
- `multilib`: Adds 32-bit support (for apps like Steam).

## Update Pacman Repositories

> [!INFO]
> Refresh the package database to get the latest software versions.

```bash
pacman -Syy
```

## Set the System Timezone

> [!INFO]
> Set your timezone (replace `Europe/Berlin` with yours):

```bash
ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime
```

> [!INFO]
> Sync the system clock with the BIOS clock:

```bash
hwclock --systohc
```

## Set Locale

> [!INFO]
> Set the system's language and encoding.

1. Edit `locale.gen` to uncomment your locale:
   ```bash
   nano /etc/locale.gen
   ```
   > [!TIP]
   > Use `CTRL + W` to search for your locale.

2. Generate the locale:
   ```bash
   locale-gen
   ```

3. Set the default system language (replace `de_DE.UTF-8` with yours):
   ```bash
   echo "LANG=de_DE.UTF-8" > /etc/locale.conf
   ```

## Set the Hostname

> [!INFO]
> Set your system's hostname which is displayed in your network:

```bash
echo "arch" > /etc/hostname
```

## Configure Keyboard Layout for Console

> [!INFO]
> Set the console keyboard layout (replace `de-latin1` with yours):

```bash
echo "KEYMAP=de-latin1" > /etc/vconsole.conf
```

## Create a New User

```bash
useradd -m -G wheel,power,storage,video,audio -s /bin/bash justus
```

## Set the user’s password:

```bash
passwd justus
```

## Grant Sudo Access (Admin Privilages)

> [!INFO]
> This gives `sudo` access to users in the `wheel` group.

1. Open the `sudoers` file:
   ```bash
   EDITOR=nano visudo
   ```

2. Uncomment this line (remove the `#`):
   ```bash
   %wheel ALL=(ALL:ALL) ALL
   ```
# **Post-Installation Setup**

### Enable NetworkManager as a Service  

> [!TIP]  
> Automatically starting NetworkManager ensures your network connections are managed without manual intervention at every boot.  


```bash
systemctl enable NetworkManager
```


### Configure `pacman.conf` for Optimized Package Management  

> [!NOTE]  
> Editing the `pacman.conf` file allows you to customize your package manager for better performance and features.

```bash
nano /etc/pacman.conf
```

- *Navigate with the arrow keys and make edits. Save changes with `CTRL + O`, exit with `CTRL + X`. To exit without saving, press `CTRL + X` and then `n`.*

Add the following lines to enhance functionality:
```bash [options]
ILoveCandy
ParallelDownloads = 5

[multilib]
include = /etc/pacman.d/mirrorlist
```

- `ILoveCandy`: Adds a fun visual effect to downloads.  
- `ParallelDownloads`: Speeds up package retrieval by enabling multiple simultaneous downloads.  
- `multilib`: Enables 32-bit support, essential for certain applications like `steam`.



### Update Pacman Repositories  

> [!TIP]  
> Refreshing the package database ensures access to the latest versions of available software.

```bash
pacman -Syy
```

---

### Set the System Timezone  

> [!IMPORTANT]  
> Choose the correct timezone to ensure accurate timekeeping. Replace `Europe/Berlin` with your actual timezone.

```bash
ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime
```

---

- **Sync the System Clock**  
> [!NOTE]  
> Synchronize your system clock with the BIOS clock to avoid timing discrepancies.

```bash
hwclock --systohc
```

---

- **Generate and Set Locale Configurations**  
> [!TIP]  
> Locale settings ensure the system uses the correct language and character encoding.

- Edit the `locale.gen` file to uncomment your desired locale:
   ```bash
   nano /etc/locale.gen
   ```
   - *Tip: Use `CTRL + W` to search for your locale.*

- Generate the locale:
   ```bash
   locale-gen
   ```

- Set the default system language:
    ```bash
    echo "LANG=de_DE.UTF-8" > /etc/locale.conf
    ```
   - Replace `de_DE.UTF-8` with your preferred language.

---

### Set the Hostname  
> [!NOTE] 
> Your hostname identifies your system on a network.

```bash
echo "arch" > /etc/hostname
```

---

### Set Keyboard Layout for Console  
> [!TIP]  
> Configure the console keyboard layout to match your physical keyboard.

```bash
echo "KEYMAP=de-latin1" > /etc/vconsole.conf
```
- Replace `de-latin1` with your preferred keymap.

---

### Create a New User  
> [!IMPORTANT]  
> Add a non-root user with necessary permissions for a safer and more secure system.

```bash
useradd -m -G wheel,power,storage,video,audio -s /bin/bash justus
```

- Set a password for the new user:
  ```bash
  passwd justus
  ```

---

### Grant Sudo Access to the New User  
> [!CAUTION]  
> Modifying the `sudoers` file incorrectly can lock you out of administrative privileges. Be cautious!

1. Open the `sudoers` file:
   ```bash
   EDITOR=nano visudo
   ```

2. Uncomment the following line by removing the `#`:
   ```bash
   %wheel ALL=(ALL:ALL) ALL

This grants sudo access to all users in the `wheel` group.


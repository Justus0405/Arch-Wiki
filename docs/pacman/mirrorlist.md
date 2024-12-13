# Set Up Arch Linux Mirrors

<strong>*To ensure fast package updates, it's important to set up optimized mirrors for Arch Linux. This guide covers three methods to configure your mirrors:*</strong>

- **Reflector**: An automated tool for finding and ranking mirrors (recommended)
- **Mirrorlist Generator**: Manual mirror selection from the Arch website
- **Rankmirrors**: Rank mirrors based on speed with `pacman-contrib`

## Prerequisites

You’ll need `sudo` privileges to edit the mirrorlist and install packages.

### 1. Using Reflector for Automated Mirror Ranking (recommended)

`reflector` automatically updates, filters, and ranks mirrors based on speed and other criteria.

- **Install Reflector**
Install `reflector`:
```bash
sudo pacman -S reflector
```

- **Backup Your Mirrorlist**
Backup your current mirrorlist:
```bash
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

- **Use Reflector to Rank Mirrors**
Run `reflector` to find and rank mirrors. Customize it based on your location:
```bash
sudo reflector --country 'United States' --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```
- `--country 'United States'`: Replace with your country.
- `--age 12`: Only use mirrors synced within the last 12 hours.
- `--protocol https`: Use HTTPS mirrors.
- `--sort rate`: Rank by speed.

- **Verify the Mirrorlist**
*Check the updated mirrorlist:*
```bash
cat /etc/pacman.d/mirrorlist
```

- **Automate Reflector (Optional)**
*To automate mirror updates, configure a `reflector` systemd service:*

- Create a configuration file:
   ```bash
   sudo nano /etc/xdg/reflector/reflector.conf
   ```
   Example content:
   ```
   --country 'United States'
   --age 12
   --protocol https
   --sort rate
   --save /etc/pacman.d/mirrorlist
   ```

- Enable the systemd service:
   ```bash
   sudo systemctl enable --now reflector.service
   ```

- Update Package Databases

   *After ranking mirrors, refresh the database:*

```bash
sudo pacman -Syy
```

### 2. Using the Arch Linux Mirrorlist Generator

- **Open the Mirrorlist Generator**

*Visit the official Arch Linux [mirrorlist generator](https://archlinux.org/mirrorlist).*

- **Select Your Country or Region**

*Choose the country or region closest to you.*

- **Customize Your Mirrorlist**
   - **Protocol**: *HTTPS is preferred, but you can also select HTTP.*
   - **Status**: *Choose mirrors synced within the last 24 hours for the latest updates.*
   - **IPv4/IPv6**: *Select based on your network setup.*

- **Generate and Download the Mirrorlist**

*Click "Generate Mirrorlist" and either copy the list or download the file.*

- **Backup Your Current Mirrorlist**

*Backup your existing mirrorlist before making changes:*

```bash
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

- **Replace the Mirrorlist**
   - Open the mirrorlist file and replace its contents with the newly generated list:
   ```bash
   sudo nano /etc/pacman.d/mirrorlist
   ```
   - Uncomment all mirrors by running this command:
   ```bash
   sudo sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist
   ```

- **Update Package Databases**

*Refresh your package database:*

```bash
sudo pacman -Syy
```

### 3. Using Rankmirrors from Pacman-Contrib

<strong>`rankmirrors` helps you rank mirrors by speed. It’s part of the `pacman-contrib` package.</strong>

- **Install `pacman-contrib`**

*Install the package:*
```bash
sudo pacman -S pacman-contrib
```

- **Backup Your Mirrorlist**

*Always back up your mirrorlist first:*
```bash
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

- **Uncomment All Mirrors**

*Uncomment all mirrors in your mirrorlist:*
```bash
sudo nano /etc/pacman.d/mirrorlist
```

`Or` *use this command to do it automatically:*
```bash
sudo sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist
```

- **Rank the Mirrors**

*Rank the mirrors and save the top 10:*
```bash
rankmirrors -n 10 /etc/pacman.d/mirrorlist | sudo tee /etc/pacman.d/mirrorlist
```

- **Update Package Databases**

*Update your database after ranking the mirrors:*
```bash
sudo pacman -Syy
```


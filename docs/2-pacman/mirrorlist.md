# Set Up Arch Linux Mirrors

Optimize your mirrors for faster package updates. Choose one of these methods:

> [!INFO]
>
> - `Reflector` → Automatically find and rank mirrors (recommended).
> - `Mirrorlist Generator` → Select mirrors manually.
> - `Rankmirrors` → Rank mirrors by speed using `pacman-contrib`.

## 1. Using Reflector (Recommended)

`reflector` automatically updates and ranks mirrors.

### Install Reflector

```shell
sudo pacman -S reflector
```

### Backup Your Mirrorlist

```shell
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

### Use Reflector to Rank Mirrors

Run this command (replace `'Germany'` with your country):

```shell
sudo reflector --country 'Germany' --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

> [!INFO] Config Info:
>
> - `--country` → Mirrors in your location.
> - `--age 12` → Use mirrors synced within 12 hours.
> - `--protocol https` → Use HTTPS mirrors.
> - `--sort rate` → Rank mirrors by speed.

### Verify the Mirrorlist

```shell
cat /etc/pacman.d/mirrorlist
```

### Automate Reflector (Optional)

1. Create a configuration file:

   ```shell
   sudo nano /etc/xdg/reflector/reflector.conf
   ```

   Example:

   ```
   --country 'United States'
   --age 12
   --protocol https
   --sort rate
   --save /etc/pacman.d/mirrorlist
   ```

2. Enable the service:
   ```shell
   sudo systemctl enable --now reflector.service
   ```

### Refresh the Database

```shell
sudo pacman -Syy
```

## 2. Using the Arch Linux Mirrorlist Generator

> [!INFO]
>
> 1. Visit the [mirrorlist generator](https://archlinux.org/mirrorlist).
> 2. Select your country/region and customize options:
>    - Use HTTPS for secure connections.
>    - Choose mirrors synced within 24 hours.
> 3. Generate and copy/download the mirrorlist.

### Backup and Replace the Mirrorlist

1. Backup your current list:
   ```shell
   sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
   ```
2. Edit the file and paste the list:
   ```shell
   sudo nano /etc/pacman.d/mirrorlist
   ```
3. Uncomment all mirrors manually or using:
   ```shell
   sudo sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist
   ```

### Refresh the Database

```shell
sudo pacman -Syy
```

## 3. Using Rankmirrors with Pacman-Contrib

`rankmirrors` ranks mirrors by speed.

### Install `pacman-contrib`

```shell
sudo pacman -S pacman-contrib
```

### Backup Your Mirrorlist

```shell
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

### Uncomment All Mirrors

1. Edit the file:
   ```shell
   sudo nano /etc/pacman.d/mirrorlist
   ```
2. Or uncomment automatically:
   ```shell
   sudo sed -i 's/^#Server/Server/' /etc/pacman.d/mirrorlist
   ```

### Rank the Mirrors

Save the top 10 mirrors:

```shell
rankmirrors -n 10 /etc/pacman.d/mirrorlist | sudo tee /etc/pacman.d/mirrorlist
```

### Refresh the Database

```shell
sudo pacman -Syy
```

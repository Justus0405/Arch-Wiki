# Add the Chaotic AUR to Arch Linux

> [!INFO]
> Chaotic AUR gives you prebuilt AUR packages. This saves time and avoids building from source.

## Add the Keyring and Mirrorlist

1. Install the Chaotic AUR keyring and mirrorlist:

```shell
sudo pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
```

```shell
sudo pacman-key --lsign-key 3056513887B78AEB
```

```shell
sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst'
```

```shell
sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

## Add Chaotic AUR to your Pacman configuration file

1. Open the config file:

```shell
sudo nano /etc/pacman.conf
```

2.  Add this to the bottom of the file:

```ini
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

Save and exit (`Ctrl+O`, `Enter`, then `Ctrl+X` in nano).

## Update your System and Database

1. Run this command:

```shell
sudo pacman -Syyu
```

## Example Usage

1. If you want to install a package available in Chaotic AUR:

```shell
sudo pacman -S brave-bin
```

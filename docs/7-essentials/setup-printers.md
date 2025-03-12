# Setup Printers for Arch Linux

> [!INFO]
> The setup steps depend on your printer model.
> This guide is tested with HP printers but should work for others too.
> Be sure to install the right drivers. For a list of drivers for different brands,
> visit: https://wiki.archlinux.org/title/CUPS/Printer-specific_problems

<br>

# Step 1: Install necessary dependencies

## Install CUPS and a GUI Printer Manager

```shell
sudo pacman -S cups system-config-printer
```

## Enable the CUPS service

```shell
sudo systemctl enable --now cups
```

## Add yourself to the printing management group

```shell
sudo usermod -aG lp $USER
```

## Install your printer specific drivers (Example: HP)

```shell
sudo pacman -S hplip
```

<br>

# Step 2: Setup your printer

> [!NOTE]
> After setting up your printer
> it is recommended to restart your computer

## For HP printers

```shell
hp-setup -i
```

## For any other, open the printer settings and add your printer

```shell
system-config-printer
```

> [!TIP]
> You can view, stop and delete printer jobs when right-clicking on the printer
> and selecting "View Print Queue"

<br>

# Additional Tips & Tricks

## View print jobs from terminal

```shell
lpq
```

## Cancel all print jobs from terminal

```shell
lprm -
```

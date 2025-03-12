# Inside the ISO

## 1. Load Keyboard Layout (Default: `usa`)

> [!TIP]
> If your keyboard layout isn’t USA, use `loadkeys` to switch it.
> For example, German keyboards use `de`.
> Laptops use latin1 because the layout is slightly different.
> For example, `de-latin1`.

```shell
loadkeys de
```

## 2. List Your Drives

> [!INFO]
> To see all connected drives (like hard drives or USB), run:

```shell
lsblk
```

## 3. Wipe the Target Drive

> [!WARNING]
> This erases all data on the drive. Back up anything important first.

### For NVMe drives:

```shell
gdisk /dev/nvme0n1
```

### For SATA or HDD drives:

```shell
gdisk /dev/sda1
```

> [!INFO]Steps:
>
> 1. Press `x` for expert mode.
> 2. Press `z` to wipe the drive, confirming with `y`.

## 4. Create Partitions

> [!INFO]
> Use `cfdisk` for an easy partition editor. Navigate with arrow keys and create partitions.

```shell
cfdisk /dev/nvme0n1
```

> [!INFO] Create these partitions:
>
> - Boot Partition → 1 GiB (EFI)
> - Swap Partition → 4 GiB
> - System Partition → Remaining space

Example layout:

```ini
p1 = 1GiB, EFI
p2 = 4GiB, Linux Swap
p3 = Remaining, Linux Filesystem
```

## 5. Format the Partitions

### Format Boot Partition (FAT32):

```shell
mkfs.fat -F 32 /dev/nvme0n1p1
```

### Set Up Swap Partition:

```shell
mkswap /dev/nvme0n1p2
swapon /dev/nvme0n1p2
```

### Format System Partition (EXT4):

```shell
mkfs.ext4 /dev/nvme0n1p3
```

## 6. Mount Your Partitions

### Mount System Partition:

```shell
mount /dev/nvme0n1p3 /mnt
```

### Mount Boot Partition:

```shell
mount --mkdir /dev/nvme0n1p1 /mnt/boot
```

## 7. Install Arch Linux

> [!INFO] Package Info:
> `linux` is the standard Arch kernel, while `linux-zen` offers desktop performance tweaks for better responsiveness.
> Install matching headers (`linux-headers` or `linux-zen-headers`) for DKMS support.

```shell
pacman -Syy
pacstrap -K /mnt base base-devel linux-zen linux-zen-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

## 8. Generate the fstab File

> [!INFO]
> Generate the `fstab` file, which tells the system which partitions to mount on boot.

```shell
genfstab -U /mnt >> /mnt/etc/fstab
```

## 9. Enter the New System Environment

> [!INFO]
> Change the root directory to your new installation for further setup:

```shell
arch-chroot /mnt
```

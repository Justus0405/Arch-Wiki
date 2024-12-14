# Inside the ISO

## 1. Load Keyboard Layout (Default: `usa`)

> [!TIP]
> If your keyboard layout isn’t USA, use `loadkeys` to switch it.
> For example, German keyboards use `de-latin1`.

```sh
loadkeys de-latin1
```

## 2. List Your Drives

> [!INFO]
> To see all connected drives (like hard drives or USB), run:

```sh
lsblk
```

## 3. Wipe the Target Drive

> [!WARNING]
> This erases all data on the drive. Back up anything important first.

### For NVMe drives:
```bash
gdisk /dev/nvme0n1
```

### For SATA or HDD drives:
```bash
gdisk /dev/sda1
```

**Steps:**
1. Press `x` for expert mode.
2. Press `z` to wipe the drive, confirming with `y`.

## 4. Create Partitions

> [!INFO]
> Use `cfdisk` for an easy partition editor. Navigate with arrow keys and create partitions.

```bash
cfdisk /dev/nvme0n1
```

Create these partitions:
- **Boot Partition:** 1 GiB (EFI)
- **Swap Partition:** 4 GiB
- **System Partition:** Remaining space

Example layout:
```
p1 = 1GiB, EFI
p2 = 4GiB, Linux Swap
p3 = Remaining, Linux Filesystem
```

## 5. Format the Partitions

### Format Boot Partition (FAT32):
```bash
mkfs.fat -F 32 /dev/nvme0n1p1
```

### Set Up Swap Partition:
```bash
mkswap /dev/nvme0n1p2
swapon /dev/nvme0n1p2
```

### Format System Partition (EXT4):
```bash
mkfs.ext4 /dev/nvme0n1p3
```

## 6. Mount Your Partitions

### Mount System Partition:
```bash
mount /dev/nvme0n1p3 /mnt
```

### Mount Boot Partition:
```bash
mount --mkdir /dev/nvme0n1p1 /mnt/boot
```

## 7. Install Arch Linux

> [!INFO]
> Install the essential system packages:

```bash
pacstrap -K /mnt base base-devel linux-zen linux-zen-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

## 8. Generate the fstab File

> [!INFO]
> Generate the `fstab` file, which tells the system which partitions to mount on boot.

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

## 9. Enter the New System Environment

> [!INFO]
> Change the root directory to your new installation for further setup:

```bash
arch-chroot /mnt
```
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

:::code-group

```shell [Normal]
lsblk
```

```shell [Detailed]
lsblk -S
```

:::

## 3. Wipe the Target Drive

> [!WARNING]
> This erases all data on the drive. Back up anything important first.

::: code-group

```shell [NVME]
gdisk /dev/nvme0n1
```

```shell [SATA]
gdisk /dev/sda
```

:::

> [!INFO]Steps:
>
> 1. Press `x` for expert mode.
> 2. Press `z` to wipe the drive, confirming with `y`.

## 4. Create Partitions

> [!INFO]
> Use `cfdisk` for an easy partition editor. Navigate with arrow keys and create partitions.

::: code-group

```shell [NVME]
cfdisk /dev/nvme0n1
```

```shell [SATA]
cfdisk /dev/sda
```

:::

> [!TIP] Create these partitions:
>
> - Boot Partition → 1 GiB (EFI)
> - Swap Partition → 4 GiB
> - System Partition → Remaining space

## 5. Format the Partitions

### Format Boot Partition (FAT32):

::: code-group

```shell [NVME]
mkfs.fat -F 32 /dev/nvme0n1p1
```

```shell [SATA]
mkfs.fat -F 32 /dev/sda1
```

:::

### Set Up Swap Partition:

::: code-group

```shell [NVME]
mkswap /dev/nvme0n1p2
swapon /dev/nvme0n1p2
```

```shell [SATA]
mkswap /dev/sda2
swapon /dev/sda2
```

:::

### Format System Partition (EXT4):

::: code-group

```shell [NVME]
mkfs.ext4 -F /dev/nvme0n1p3
```

```shell [SATA]
mkfs.ext4 -F /dev/sda3
```

:::

## 6. Mount Your Partitions

### Mount System Partition:

::: code-group

```shell [NVME]
mount /dev/nvme0n1p3 /mnt
```

```shell [SATA]
mount /dev/sda3 /mnt
```

:::

### Mount Boot Partition:

::: code-group

```shell [NVME]
mount --mkdir /dev/nvme0n1p1 /mnt/boot
```

```shell [SATA]
mount --mkdir /dev/sda1 /mnt/boot
```

:::

## 7. Install Arch Linux

> [!INFO] Package Info:
> `linux` is the standard Arch kernel, while `linux-zen` offers desktop performance tweaks for better responsiveness.
> Install matching headers (`linux-headers` or `linux-zen-headers`) for DKMS support.

> [!IMPORTANT]
> You will need to install `intel-ucode` for intel CPUs
> and `amd-ucode` for AMD CPUs for their microcode. These are important for stability, security and performance!

::: code-group

```shell [linux]
pacstrap -K /mnt base base-devel linux linux-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

```shell [linux-zen]
pacstrap -K /mnt base base-devel linux-zen linux-zen-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

```shell [linux-lts]
pacstrap -K /mnt base base-devel linux-lts linux-lts-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

```shell [linux-hardened]
pacstrap -K /mnt base base-devel linux-hardened linux-hardened-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

:::

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

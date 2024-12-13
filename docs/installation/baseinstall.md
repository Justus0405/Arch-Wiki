# **Inside the ISO**

### **1. Load Keyboard Layout** (Default: `usa`)

> [!TIP]  
> If your keyboard layout differs from the default (USA), use the `loadkeys` command to switch to your desired layout.  
> For example, `de-latin1` is used for German keyboards.

```sh
loadkeys de-latin1
```

---

### **2. List Your Drives**
> [!TIP]  
> Use the following command to identify all connected block devices (like hard drives or USB drives).  
> This is essential to ensure you're working on the correct drive.

```sh
lsblk
```

---

### **3. Wipe the Drive You Plan to Install On**  
> [!CAUTION]  
> This step will erase all data on the specified drive. Ensure you’ve backed up any important information before proceeding.

<strong>*If you are using an NVMe drive:*</strong>

```bash
gdisk /dev/nvme0n1
```

<strong>*If you are using a SATA drive or HDD:*</strong>

```bash
gdisk /dev/sda1
```

<strong>*Use your prefer drive*</strong>

- Press **"x"** for expert mode.  
- Press **"z"** to wipe the drive and confirm with **"y"**.

> [!TIP]  
> Double-check your drive identifier (`nvme0n1` or `sda`) using the `lsblk` command before proceeding to avoid data loss on the wrong drive.

---

### **4. Create Partitions on the Drive**
> [!NOTE]  
> Use the `cfdisk` command for a user-friendly partition editor. Use arrow keys to navigate and `Enter` to create a new partition.

```bash
cfdisk /dev/nvme0n1
```

Create the following partitions:
- **Boot Partition**: EFI (1GiB)
- **Swap Partition**: 4GiB
- **System Partition**: Remaining space  

Your partitions should look like this:

```bash
p1 = 1GiB, EFI
p2 = 4GiB, Linux Swap
p3 = ENTER, Linux Filesystem
```

---

### **5. Create Filesystems on These Partitions**

> [!INFO]  
> Formatting partitions is essential to prepare them for the operating system.

- **Format the Boot Partition as FAT32:**

```bash
mkfs.fat -F 32 /dev/nvme0n1p1
```

- **Set Up the Swap Partition:**

```bash
mkswap /dev/nvme0n1p2
swapon /dev/nvme0n1p2
```

> [!TIP]  
> The `mkswap` command prepares the swap space, and `swapon` activates it for immediate use.

- **Format the System Partition as EXT4:**

```bash
mkfs.ext4 /dev/nvme0n1p3
```

---

### **6. Mount Your Partitions**
- **Mount the System Partition:**

```bash
mount /dev/nvme0n1p3 /mnt
```

- **Mount the Boot Partition:**
```bash
mount --mkdir /dev/nvme0n1p1 /mnt/boot
```

> [!NOTE]  
> The `--mkdir` option creates the `/mnt/boot` directory if it doesn’t already exist.

---

### **7. Install Arch Linux**
> [!INFO]  
> This command installs the essential packages for a minimal Arch Linux system, including the kernel, firmware, and essential utilities.

```bash
pacstrap -K /mnt base base-devel linux-zen linux-zen-headers linux-firmware sof-firmware nano networkmanager grub efibootmgr intel-ucode bash-completion
```

---

### **8. Generate the fstab File**
> [!NOTE]  
> The `fstab` file tells the system which partitions to mount at boot.

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

> [!TIP]  
> The `>>` operator appends the output to the file. Avoid using `>` unless you want to overwrite the file.

---

### **9. Enter Your New System Environment**
> [!INFO]  
> The `arch-chroot` command changes your root directory to the new installation, allowing you to configure it further.

```bash
arch-chroot /mnt
```


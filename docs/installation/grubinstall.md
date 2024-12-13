# **Install the GRUB Bootloader**

> [!NOTE]  
> GRUB is a versatile and widely supported bootloader, making it an excellent choice for most systems.

### **1. Install GRUB to the Boot Partition**  
Use the following command to install GRUB:  
```bash
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub --removable
```

> [!INFO] Explanation of Arguments 
> - `--target=x86_64-efi`: Specifies the installation for 64-bit EFI systems. Omit this for legacy BIOS installations.  
> - `--efi-directory=/boot`: Indicates the directory where GRUB should be installed.  
> - `--bootloader-id=grub`: Sets the name of the bootloader as it appears in the BIOS boot menu.  
> - `--removable`: Ensures compatibility and prevents boot issues when BIOS settings are changed.

---

### **2. Generate the GRUB Configuration File**  
> [!TIP]  
> This command creates the configuration file, enabling GRUB to manage and load operating systems.

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

---

### **3. Final Steps**  

**You’ve successfully installed GRUB and set up Arch Linux!**

<img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="50" /> 

- Exit the chroot environment:  
  ```bash
  exit
  ```

- Reboot your system:  
  ```bash
  reboot
  ```


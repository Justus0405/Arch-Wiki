# Install the GRUB Bootloader

> [!INFO]
> GRUB is a versatile and widely supported bootloader for most systems.

## 20. Install GRUB to the Boot Partition

Run this command to install GRUB:

```shell
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub --removable
```

> [!INFO]
>
> - `--target=x86_64-efi` → For 64-bit EFI systems (leave out for legacy BIOS installations).
> - `--efi-directory=/boot` → Specifies where GRUB is installed.
> - `--bootloader-id=grub` → Sets the bootloader name in the BIOS menu.
> - `--removable` → Ensures compatibility for different motherboard vendors or when the bios is reset.

## 21. Generate the GRUB Configuration File

Create the GRUB configuration file:

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

## 22. Final Steps

- Exit the chroot environment:

  ```shell
  exit
  ```

- Reboot your system:
  ```shell
  reboot
  ```

<br><br><br>

# You’ve successfully installed Arch Linux! 🎉

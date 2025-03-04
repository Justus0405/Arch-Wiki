# QEMU Guide with Virt-Manager

Simple and easy setup for Qemu with Virt-Manager on Arch Linux

## Installation

1. Install required packages:

   ```sh
   sudo pacman -S --needed qemu-full virt-manager virt-viewer libguestfs edk2-ovmf dmidecode dnsmasq vde2 bridge-utils openbsd-netcat ebtables iptables-nft
   ```

> [!INFO] Package Info:
>
> - qemu-full → Full QEMU package with all features.
> - virt-manager → GUI for managing virtual machines.
> - virt-viewer → Lightweight viewer for virtual machines.
> - libguestfs → Tools for managing virtual disk images.
> - edk2-ovmf → UEFI firmware for virtual machines.
> - dmidecode → Reads hardware information for VM configuration.
> - dnsmasq → DHCP and DNS support for VM networking.
> - vde2 → Virtual network switch for advanced networking.
> - bridge-utils → Tools for bridging network interfaces.
> - openbsd-netcat → Netcat implementation for networking tasks.
> - ebtables → Controls Ethernet bridge firewall rules.
> - iptables-nft → Packet filtering framework for networking.

2. Enable and start the libvirt service:
   ```sh
   sudo systemctl enable --now libvirtd
   ```
3. Add your user to the libvirt group:
   ```sh
   sudo usermod -aG libvirt $(whoami)
   ```
4. Restart the libvirt service:
   ```sh
   sudo systemctl restart libvirtd
   ```
5. Enable autostart for the default network:
   ```sh
   sudo virsh net-autostart default
   ```
6. Reboot your system:
   ```sh
   sudo reboot now
   ```

## Useful Commands

- List all networks:
  ```sh
  sudo virsh net-list --all
  ```
- Enable autostart for the default network:
  ```sh
  sudo virsh net-autostart default
  ```
- Start the default network manually:
  ```sh
  sudo virsh net-start default
  ```

> [!TIP]
> If networking issues occur,
> check if the default network is started.

```sh
sudo virsh net-list --all
```

# DHCP Setup with `dhcpcd` on Arch Linux

> [!INFO]
> Simple and minimal guide to connect to the internet using `dhcpcd` without NetworkManager or iwd on Arch Linux.

## Configuration

> [!TIP]
> If you're using a wireless connection, you will need to use NetworkManager or iwd. `dhcpcd` is mainly for wired connections.

1. Start `dhcpcd` for your interface and make it start on boot:

   ```sh
   sudo systemctl enable --now dhcpcd@ensp0
   ```

> [!IMPORTANT]
> Replace `ensp0` with your interface name. You can find your interface name with:
>
> ```sh
> ip link
> ```

## Useful Commands

- Check if `dhcpcd` is running:

  ```sh
  sudo systemctl status dhcpcd@ensp0
  ```

- Manually stop `dhcpcd` from running and starting on boot:

  ```sh
  sudo systemctl disable --now dhcpcd@ensp0
  ```

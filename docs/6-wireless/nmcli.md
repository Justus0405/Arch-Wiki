# Connecting to Wi-Fi on Arch Linux using nmcli

> [!INFO]
> This guide explains how to use `nmcli` to connect to Wi-Fi on Arch Linux. `nmcli` is a command-line interface for NetworkManager, which is often used in many Linux distributions.

## Connecting to a Wi-Fi Network

1. List available Wi-Fi networks:

   ```shell
   nmcli device wifi list
   ```

2. Connect to a Wi-Fi network:

   ```shell
   nmcli device wifi connect "SSID" --ask
   ```

   > [!TIP]
   > Using `nmcli device wifi connect <AP name> --ask` is better than `nmcli device wifi connect "SSID" password "password"` because it prevents the
   > "Error: 802-11-wireless-security.key-mgmt: property is missing" issue.

3. Check your connection:

   ```shell
   nmcli connection show
   ```

   > [!INFO]
   > This will list all active connections, including the Wi-Fi network you're connected to.

## Useful Commands

- Disconnect from a Wi-Fi network:

  ```shell
  nmcli connection down id "SSID"
  ```

- Reconnect to a Wi-Fi network:

  ```shell
  nmcli connection up id "SSID"
  ```

- List all saved connections:

  ```shell
  nmcli connection show
  ```

- List all available devices:

  ```shell
  nmcli device status
  ```

- Show information about your current Wi-Fi connection:

  ```shell
  nmcli device show wlan0
  ```

  > [!INFO]
  > Replace `wlan0` with the name of your wireless interface if it's different.

## Troubleshooting

1. Check if Wi-Fi is enabled:

   ```shell
   nmcli radio wifi
   ```

2. Enable Wi-Fi:

   ```shell
   nmcli radio wifi on
   ```

# Connecting to Wi-Fi on Arch Linux using iwd

> [!INFO]
> A simple guide to using `iwd` (iNet wireless daemon) to connect to Wi-Fi on Arch Linux.

## Connecting to a Wi-Fi Network

1. Start the `iwd` interactive shell to manage your Wi-Fi:

   ```shell
   iwctl
   ```

2. List available networks:

   ```shell
   station wlan0 get-networks
   ```

3. Connect to your desired network:

   ```shell
   station wlan0 connect "your_wifi_name"
   ```

4. To exit the `iwd` interactive shell:

   ```shell
   exit
   ```

## Useful Commands

- List all wireless devices:

  ```shell
  device list
  ```

- List all wireless adapters:

  ```shell
  adapter list
  ```

- Disconnect from a Wi-Fi network:

  ```shell
  station wlan0 disconnect
  ```

## View Info

> [!INFO]
> To view detailed information about your wireless device, you can use the following commands:

1. To see general information about the device like the MAC address:

   ```shell
   device wlan0 show
   ```

2. To view the connection details:

   ```shell
   station wlan0 show
   ```

3. To see detailed information about the adapter:

   ```shell
   adapter phy0 show
   ```

## Troubleshooting

> [!INFO]
> If you're trying to connect and your wireless device shows "Powered off" when you run device list, and you get an error message when trying to power it on, here's how to fix it:

1. First, make sure that the adapter is powered on using the following command:

   ```shell
   adapter phy0 set-property Powered on
   ```

2. Then, power on the wireless device itself:

   ```shell
   device wlan0 set-property Powered on
   ```

   > [!INFO]
   > Replace `phy0` and `wlan0` with your specific adapter and device names, if necessary.

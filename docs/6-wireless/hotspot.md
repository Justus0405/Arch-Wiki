# Wi-Fi Hotspot Setup with `nmcli`

> [!INFO]
> Simple and easy guide to set up a Wi-Fi hotspot using `nmcli` on Linux.

## Installation

1. Install this package:

   ```shell
   sudo pacman -S dnsmasq
   ```

## Quick Setup

1. Check your Wi-Fi interface name:

   ```shell
   sudo nmcli device status
   ```

2. Create the Wi-Fi hotspot:

   ```shell
   sudo nmcli device wifi hotspot ifname wlan0 ssid MyHotspot password "MyStrongPassword"
   ```

> [!INFO]
>
> - Replace `wlan0` with your actual Wi-Fi interface name.
> - Replace `MyHotspot` with your desired SSID (Wi-Fi name).
> - Replace `"MyStrongPassword"` with your chosen password.

3. Start the hotspot:

   ```shell
   sudo nmcli connection up Hotspot
   ```

4. Stop the hotspot:

   ```shell
   sudo nmcli connection down Hotspot
   ```

5. Delete the hotspot (if you want to remove it):

   ```shell
   sudo nmcli connection delete Hotspot
   ```

6. Alternatively using the UUID:

   ```shell
   sudo nmcli connection delete uuid "UUID"
   ```

## Viewing Hotspot Information

To view the password, use:

```shell
nmcli device wifi show-password
```

To view which connections your device has and how the hotspot id is, use:

```shell
sudo nmcli connection show
```

To view information about your active hotspot and its settings, use:

> [!INFO]
> This will display details like the SSID, IP settings, WPA, and other parameters for your hotspot.

```shell
sudo nmcli connection show Hotspot
```

## Listing Available Hotspots and Access Points

To view available Wi-Fi networks (including nearby hotspots you can connect to), run:

```shell
nmcli device wifi list
```

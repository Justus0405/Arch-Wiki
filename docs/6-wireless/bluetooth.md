# Simple Bluetooth Setup on Arch Linux

> [!INFO]
> This guide will help you set up Bluetooth on Arch Linux with PipeWire.

## Installation

1. Install Bluetooth packages:

   ```sh
   sudo pacman -S  bluez bluez-utils blueman
   ```

> [!INFO] Package Info:
>
> - `bluez` → Bluetooth protocol stack for Linux.
> - `bluez-utils` → Utilities for managing Bluetooth devices.
> - `blueman` → GUI tool for managing Bluetooth connections.
>
> `blueman` provides an easy-to-use interface for connecting and managing Bluetooth devices, while `bluez` and `bluez-utils` provide the underlying Bluetooth functionality.

2. Enable and start the Bluetooth service:

   ```sh
   sudo systemctl enable --now bluetooth.service
   ```

## Connecting Bluetooth Devices

1. Open `blueman` from your applications menu to manage Bluetooth devices.
2. Use the GUI to pair and connect to your Bluetooth devices.

## Other

> [!INFO]
> If you are using PipeWire as your audio server (the default in newer Arch Linux setups), `pulseaudio-bluetooth` is not required. PipeWire already includes Bluetooth audio support with the `pipewire-pulse` module. This replaces PulseAudio and its Bluetooth functionality, meaning you no longer need the `pulseaudio-bluetooth` package for Bluetooth audio.

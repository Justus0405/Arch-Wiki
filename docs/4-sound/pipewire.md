# Install & Configure PipeWire Manually

> [!INFO]
> This is not necessary if you plan to install a desktop environment like `GNOME` or `KDE`.

## Install Required Packages

- `pipewire`: _the latest and most widely used audio server._
- `lib32-pipewire`: _32-bit version for compatibility._
- `pipewire-alsa`: _ALSA support for PipeWire._
- `pipewire-jack`: _JACK audio server support._
- `pipewire-pulse`: _PulseAudio support._
- `gst-plugin-pipewire`: _compatibility for other applications._
- `wireplumber` and `rtkit`: _ensure system compatibility and priority, addressing audio issues like distortion and crackling._

  ```shell
  sudo pacman -S lib32-pipewire pipewire pipewire-alsa pipewire-jack pipewire-pulse gst-plugin-pipewire wireplumber rtkit
  ```

## Add User to the rtkit Group

> [!INFO]
> Add the user executing the command to the `rtkit` group to provide PipeWire with the correct system priorities.

```shell
sudo usermod -a -G rtkit $USER
```

## Enable Audio Services to Autostart

> [!INFO]
> Enable the audio services to start automatically for the user. `DO NOT USE SUDO FOR THIS STEP`. Only these three services are needed; the others will start automatically as required.

```shell
systemctl --user enable pipewire pipewire-pulse wireplumber
```

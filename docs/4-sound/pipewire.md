# Install & Configure PipeWire Manually

> [!INFO]
> This is not necessary if you plan to install a desktop environment like `GNOME` or `KDE`.

## Install Required Packages

```shell
sudo pacman -S lib32-pipewire pipewire pipewire-alsa pipewire-jack pipewire-pulse gst-plugin-pipewire wireplumber rtkit
```

> [!INFO] Package Info:
>
> - `pipewire` → the latest and most widely used audio server.
> - `lib32-pipewire` → 32-bit version for compatibility.
> - `pipewire-alsa` → ALSA support for PipeWire.
> - `pipewire-jack` → JACK audio server support.
> - `pipewire-pulse` → PulseAudio support.
> - `gst-plugin-pipewire` → compatibility for other applications.
> - `wireplumber` and `rtkit` → ensure system compatibility and priority, addressing audio issues like distortion and crackling.

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

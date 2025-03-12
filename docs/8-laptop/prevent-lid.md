# Prevent Sleep When Lid is Closed

> [!INFO]
> To keep your laptop running with the lid closed, modify systemd's configuration.

## Open a terminal and run:

```shell
sudo tee -a /etc/systemd/logind.conf << EOF
HandleSuspendKey=ignore
HandleSuspendKeyLongPress=ignore
HandleHibernateKey=ignore
HandleHibernateKeyLongPress=ignore
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
EOF
```

## Reload the systemd config:

```shell
sudo systemctl restart systemd-logind
```

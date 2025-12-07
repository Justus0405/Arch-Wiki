# Setting Up Optical Drives on Arch Linux

> [!INFO]
> Enable loading of the optical-drive driver

## Common Issues

If you want to use your optical CD, DVD, or Blu-ray drive on Arch Linux, you may notice that it does not appear. Searching for devices such as:

```plaintext
/dev/sr0
/dev/sg0
/dev/sg1
/dev/sg2
```

may return nothing. This is because the required driver is not enabled by default.

To fix this, enable the `sg` module:

```shell
echo "sg" | sudo tee /etc/modules-load.d/sg.conf
```

Then reboot your system. After that, your optical drive should appear correctly.

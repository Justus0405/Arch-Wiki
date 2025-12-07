# Storage Maintenance on Arch Linux

> [!INFO]
> Learn how to check hard drive properties and health using `hdparm` and `smartctl` or configure `trim` on Arch Linux.

## Installation

1. Install the required packages:

   ```shell
   sudo pacman -S hdparm smartmontools
   ```

> [!INFO] Package Info:
>
> - `hdparm` → View and set hard drive parameters.
> - `smartmontools` → Monitor hard drive health using S.M.A.R.T.

## Checking Hard Drive Properties with `hdparm`

1. List all drives:
   ```shell
   lsblk
   ```
2. Check basic drive information:
   ```shell
   sudo hdparm -I /dev/sdX
   ```
   Replace `sdX` with your actual drive (e.g., `sda`).

> [!TIP]
> Use `sudo hdparm -tT /dev/sdX` to test drive read speed.

## Checking Drive Health with `smartctl` (Simple)

1. Check if S.M.A.R.T is supported and enabled on your drive:
   ```shell
   sudo smartctl -i /dev/sdX
   ```
2. Get an overall health summary:
   ```shell
   sudo smartctl -H /dev/sdX
   ```

## Checking Drive Health with `smartctl` (Advanced)

1. Check detailed S.M.A.R.T. data:
   ```shell
   sudo smartctl -a /dev/sdX
   ```
2. Perform a short self-test:

   ```shell
   sudo smartctl -t short /dev/sdX
   ```

   > [!INFO]
   > You can also perform a `long` self-test.

3. View test results:
   ```shell
   sudo smartctl -l selftest /dev/sdX
   ```

## Enabling TRIM for SSDs

> [!INFO]
> TRIM improves SSD longevity and speed by clearing unused data blocks.

> [!IMPORTANT]
> The tool `hdparm` works for SATA drives but doesn't work well with NVMe drives.

1. Check if your drive supports TRIM:
   ```shell
   sudo hdparm -I /dev/sdX | grep TRIM
   ```
2. Manually run TRIM:
   ```shell
   sudo fstrim -v /
   ```
3. Enable automatic TRIM:
   ```shell
   sudo systemctl enable --now fstrim.timer
   ```

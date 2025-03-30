# Storage Maintenance on Arch Linux

> [!INFO]
> Learn how to check hard drive properties and health using `hdparm` and `smartctl` or configure `trim` on Arch Linux.

## Installation

1. Install the required packages:

   ```sh
   sudo pacman -S hdparm smartmontools
   ```

> [!INFO] Package Info:
>
> - `hdparm` → View and set hard drive parameters.
> - `smartmontools` → Monitor hard drive health using S.M.A.R.T.

## Checking Hard Drive Properties with `hdparm`

1. List all drives:
   ```sh
   lsblk
   ```
2. Check basic drive information:
   ```sh
   sudo hdparm -I /dev/sdX
   ```
   Replace `sdX` with your actual drive (e.g., `sda`).

> [!TIP]
> Use `sudo hdparm -tT /dev/sdX` to test drive read speed.

## Checking Drive Health with `smartctl` (Simple)

1. Check if S.M.A.R.T is supported and enabled on your drive:
   ```sh
   sudo smartctl -i /dev/sdX
   ```
2. Get an overall health summary:
   ```sh
   sudo smartctl -H /dev/sdX
   ```

## Checking Drive Health with `smartctl` (Advanced)

1. Check detailed S.M.A.R.T. data:
   ```sh
   sudo smartctl -a /dev/sdX
   ```
2. Perform a short self-test:

   ```sh
   sudo smartctl -t short /dev/sdX
   ```

   > [!INFO]
   > You can also perform a `long` self-test.

3. View test results:
   ```sh
   sudo smartctl -l selftest /dev/sdX
   ```

## Enabling TRIM for SSDs

> [!INFO]
> TRIM improves SSD longevity and speed by clearing unused data blocks.

> [!IMPORTANT] > `hdparm` works for SATA drives but doesn't work well with NVMe drives.

1. Check if your drive supports TRIM:
   ```sh
   sudo hdparm -I /dev/sdX | grep TRIM
   ```
2. Manually run TRIM:
   ```sh
   sudo fstrim -v /
   ```
3. Enable automatic TRIM:
   ```sh
   sudo systemctl enable --now fstrim.timer
   ```

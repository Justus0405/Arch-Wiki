> [!NOTE]
> Only use this guide if you're facing keyring or package installation errors. If not, proceed with the base installation.

# Resolving Arch Linux Keyring Trust Issues

If you encounter issues with GPG keyring trust during your Arch Linux installation, it means the keys used for verifying package signatures are outdated or missing. Here's how to fix it.

## Solution 1: Update Keyrings

> [!INFO]
> First, synchronize your system clock to avoid timing issues.

- Sync the system clock:

  ```shell
  sudo systemctl enable systemd-timesyncd --now
  ```

- Update the keyring:

  ```shell
  sudo pacman -Sy archlinux-keyring
  ```

- Reinitialize the keyring (if needed):

  ```shell
  sudo pacman-key --init
  sudo pacman-key --populate archlinux
  ```

- Try the installation again.

## Solution 2: Manually Refresh the Keyring

> [!WARNING]
> If the automatic update fails, try refreshing the keyring manually.

- Remove the GPG database:

  ```shell
  sudo rm -rf /etc/pacman.d/gnupg
  ```

- Reinitialize and populate the keyring:

  ```shell
  sudo pacman-key --init
  sudo pacman-key --populate archlinux
  ```

- Import and trust missing keys (replace `<KEY_ID>` with the key ID):

  ```shell
  pacman-key --recv-keys <KEY_ID>
  pacman-key --lsign-key <KEY_ID>
  ```

## Solution 3: Temporarily Disable Signature Verification

> [!WARNING]
> Disabling signature checking should only be a temporary workaround.

- Edit `/etc/pacman.conf` and set `SigLevel = Never`:

  ```ini
  [options]
  SigLevel = Never
  ```

- Update the keyring:

  ```shell
  sudo pacman -Sy archlinux-keyring
  ```

- Re-enable signature checking after resolving:

  ```ini
  SigLevel = Required DatabaseOptional
  ```

## Solution 4: Use Reflector for Updated Mirrors

> [!INFO]
> Outdated mirrors can also cause keyring issues. Use `reflector` to update your mirrors.

- Install Reflector:

  ```shell
  sudo pacman -S reflector
  ```

- Fetch the latest mirrors:

  ```shell
  sudo reflector --country 'Germany' --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
  ```

- Update the system:

  ```shell
  sudo pacman -Syyu
  ```

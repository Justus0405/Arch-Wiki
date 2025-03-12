# Pacman Guide for Arch Linux

## Basic Package Management

- Search for a package in the repositories.

  ```shell
  sudo pacman -Ss <package-name>
  ```

- Install a package from the repositories.

  ```shell
  sudo pacman -S <package-name>
  ```

- Install a package from a .pacman file.

  ```shell
  sudo pacman -U <file-name.pacman>
  ```

- Check if a package is installed.

  ```shell
  pacman -Qs <package-name>
  ```

- Reinstall an installed package.
  ```shell
  sudo pacman -S <package-name> --needed --noconfirm
  ```

## Package Removal

- Remove a package, keep dependencies and configuration files.

  ```shell
  sudo pacman -R <package-name>
  ```

- Remove a package and its unused dependencies, keep configuration files.

  ```shell
  sudo pacman -Rs <package-name>
  ```

- Remove a package, unused dependencies, and configuration files.

  ```shell
  sudo pacman -Rns <package-name>
  ```

- Remove a package and all packages that depend on it, keep unused dependencies.

  ```shell
  sudo pacman -Rc <package-name>
  ```

- Forcefully remove a package without checking dependencies (dangerous).
  ```shell
  sudo pacman -Rdd <package-name>
  ```

## Advanced (Aggressive) Removal

- Nuclear Option: Remove the package, configuration files, unused dependencies, and dependent packages.

  ```shell
  sudo pacman -Rnsc <package-name>
  ```

- Tsar Bomb: Forcefully remove the package, dependencies, and dependent packages. Ignores dependency checks (highly dangerous).
  ```shell
  sudo pacman -Rnscdd <package-name>
  ```

## System Maintenance

- Update the local mirror list.

  ```shell
  sudo pacman -Syy
  ```

- Update the system (sync package database and install updates).

  ```shell
  sudo pacman -Syu
  ```

- Force refresh of mirrors and system update.

  ```shell
  sudo pacman -Syyu
  ```

- Check for available updates (without applying them).

  ```shell
  sudo pacman -Qu
  ```

- Show orphaned packages (packages not required by any other package).

  ```shell
  pacman -Qdt
  ```

- Remove orphaned packages.

  ```shell
  sudo pacman -Rns $(pacman -Qdtq)
  ```

- Check package integrity (to find missing or corrupted files).
  ```shell
  pacman -Qkk
  ```

## Package Information and Logs

- Show detailed information about an installed package.

  ```shell
  pacman -Qi <package-name>
  ```

- List files installed by a package.

  ```shell
  pacman -Ql <package-name>
  ```

- List all installed packages.

  ```shell
  pacman -Q
  ```

- List explicitly installed packages (ignores dependencies).

  ```shell
  pacman -Qe
  ```

- List manually installed (AUR) packages.
  ```shell
  pacman -Qm
  ```

## Cache Management

- Delete cached packages, keep the most recent versions.

  ```shell
  sudo pacman -Sc
  ```

- Delete the entire package cache.

  ```shell
  sudo pacman -Scc
  ```

- Clear old package versions while keeping the last 3 versions.

  ```shell
  sudo paccache -r
  ```

- List cached package files.
  ```shell
  sudo ls /var/cache/pacman/pkg/
  ```

## Keyring and Troubleshooting

- Reinstall and update Pacman’s keyring.

  ```shell
  sudo pacman -Sy archlinux-keyring
  ```

- Remove Pacman database lock (useful when you encounter a locked database).

  ```shell
  sudo rm /var/lib/pacman/db.lck
  ```

- Forcibly reinstall all installed packages (useful for fixing many broken packages).
  ```shell
  sudo pacman -S $(pacman -Qq) --needed
  ```

## Other Useful Commands

- List files that don't belong to any package.

  ```shell
  pacman -Qk | grep "no package owns"
  ```

- Clean Pacman log, keeping only the last 1000 lines.
  ```shell
  sudo tail -n 1000 /var/log/pacman.log > /var/log/pacman.log
  ```

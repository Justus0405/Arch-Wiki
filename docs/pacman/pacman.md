# Pacman Guide for Arch Linux

## Basic Package Management

- **Search for a package** in the repositories.
    ```bash
    sudo pacman -Ss <package-name>
    ```

- **Install a package** from the repositories.
    ```bash
    sudo pacman -S <package-name>
    ```

- **Install a package** from a .pacman file.
    ```bash
    sudo pacman -U <file-name.pacman>
    ```

- **Check if a package is installed**.
    ```bash
    pacman -Qs <package-name>
    ```

- **Reinstall an installed package**.
    ```bash
    sudo pacman -S <package-name> --needed --noconfirm
    ```

## Package Removal

- **Remove a package**, keep dependencies and configuration files.
    ```bash
    sudo pacman -R <package-name>
    ```

- **Remove a package and its unused dependencies**, keep configuration files.
    ```bash
    sudo pacman -Rs <package-name>
    ```

- **Remove a package, unused dependencies, and configuration files**.
    ```bash
    sudo pacman -Rns <package-name>
    ```

- **Remove a package and all packages that depend on it**, keep unused dependencies.
    ```bash
    sudo pacman -Rc <package-name>
    ```

- **Forcefully remove a package without checking dependencies** (dangerous).
    ```bash
    sudo pacman -Rdd <package-name>
    ```

## Advanced (Aggressive) Removal

- **Nuclear Option**: Remove the package, configuration files, unused dependencies, and dependent packages.
    ```bash
    sudo pacman -Rnsc <package-name>
    ```

- **Tsar Bomb**: Forcefully remove the package, dependencies, and dependent packages. **Ignores dependency checks** (highly dangerous).
    ```bash
    sudo pacman -Rnscdd <package-name>
    ```

## System Maintenance

- **Update the local mirror list**.
    ```bash
    sudo pacman -Syy
    ```

- **Update the system** (sync package database and install updates).
    ```bash
    sudo pacman -Syu
    ```

- **Force refresh of mirrors and system update**.
    ```bash
    sudo pacman -Syyu
    ```

- **Check for available updates** (without applying them).
    ```bash
    sudo pacman -Qu
    ```

- **Show orphaned packages** (packages not required by any other package).
    ```bash
    pacman -Qdt
    ```

- **Remove orphaned packages**.
    ```bash
    sudo pacman -Rns $(pacman -Qdtq)
    ```

- **Check package integrity** (to find missing or corrupted files).
    ```bash
    pacman -Qkk
    ```

## Package Information and Logs

- **Show detailed information about an installed package**.
    ```bash
    pacman -Qi <package-name>
    ```

- **List files installed by a package**.
    ```bash
    pacman -Ql <package-name>
    ```

- **List all installed packages**.
    ```bash
    pacman -Q
    ```

- **List explicitly installed packages** (ignores dependencies).
    ```bash
    pacman -Qe
    ```

- **List manually installed (AUR) packages**.
    ```bash
    pacman -Qm
    ```

## Cache Management

- **Delete cached packages**, keep the most recent versions.
    ```bash
    sudo pacman -Sc
    ```

- **Delete the entire package cache**.
    ```bash
    sudo pacman -Scc
    ```

- **Clear old package versions** while keeping the last 3 versions.
    ```bash
    sudo paccache -r
    ```

- **List cached package files**.
    ```bash
    sudo ls /var/cache/pacman/pkg/
    ```

## Keyring and Troubleshooting

- **Reinstall and update Pacman’s keyring**.
    ```bash
    sudo pacman -Sy archlinux-keyring
    ```

- **Remove Pacman database lock** (useful when you encounter a locked database).
    ```bash
    sudo rm /var/lib/pacman/db.lck
    ```

- **Forcibly reinstall all installed packages** (useful for fixing many broken packages).
    ```bash
    sudo pacman -S $(pacman -Qq) --needed
    ```

## Other Useful Commands

- **List files that don't belong to any package**.
    ```bash
    pacman -Qk | grep "no package owns"
    ```

- **Clean Pacman log**, keeping only the last 1000 lines.
    ```bash
    sudo tail -n 1000 /var/log/pacman.log > /var/log/pacman.log
    ```


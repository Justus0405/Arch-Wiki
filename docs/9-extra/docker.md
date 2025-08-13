# Docker Installation Guide on Arch Linux

> [!INFO]
> Simple and easy setup for Docker with Docker Compose on Arch Linux.

## Installation

1. Install Docker and Docker Compose packages:

   ```sh
   sudo pacman -S docker docker-compose docker-buildx
   ```

> [!INFO] Package Info:
>
> - `docker` → Docker engine to run and manage containers.
> - `docker-compose` → Tool to define and manage multi-container Docker applications.

2. Enable and start the Docker service:

   ```sh
   sudo systemctl enable --now docker
   ```

3. Add your user to the Docker group (so you can run Docker without `sudo`):

   ```sh
   sudo usermod -aG docker $(whoami)
   ```

4. Restart your system to apply group changes:

   ```sh
   sudo reboot now
   ```

> [!TIP]
> If you face issues with Docker, check if the service is running:

```sh
sudo systemctl status docker
```

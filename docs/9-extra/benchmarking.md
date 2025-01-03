# Benchmarking on Arch Linux

Learn how to benchmark your CPU, GPU, RAM, Disk, and Network performance on Arch Linux using popular tools.

## CPU Benchmark

### Install `sysbench`
Run this command to install:
```bash
sudo pacman -S sysbench
```

### Run CPU Test
Run this command:
```bash
sysbench cpu --threads=$(nproc) run
```

> [!INFO]
> `nproc` is used to get the total amount of CPU Threads of the system

> [!NOTE]
> This tests CPU performance with mathematical operations.

## GPU Benchmark

### Install `glmark2`
Run this command to install:
```bash
sudo pacman -S glmark2
```

### Run GPU Test
Run this command:
```bash
glmark2
```

> [!INFO]
> `glmark2` tests graphics rendering performance.

## RAM Benchmark

### Install `sysbench` (if not installed already)
Run this command to install:
```bash
sudo pacman -S sysbench
```

### Run Memory Test
Run this command:
```bash
sysbench memory --threads=$(nproc) run
```

> [!INFO]
> This measures memory read/write speed.

## Disk Benchmark

### Install `fio`
Run this command to install:
```bash
sudo pacman -S fio
```

### Test Disk Read/Write Speed
Run this command:
```bash
fio --name=seqreadwrite --rw=readwrite --bs=1m --size=1G --numjobs=1 --time_based --runtime=60 --group_reporting
```

> [!IMPORTANT]
> Make sure you have at least 1GB of free disk space before running.

> [!TIP]
> If fio is to complicated, you can use `hdparm` to test simpel read speeds.
> to use it write `sudo hdparm -t /dev/YOUR_HARD_DRIVE`

## Network Benchmark

### Install `iperf3`
Run this command to install:
```bash
sudo pacman -S iperf3
```

### Run Network Speed Test
1. **Start server** on one machine:
   ```bash
   iperf3 -s
   ```
2. **Run test** from another machine:
   ```bash
   iperf3 -c <server-ip>
   ```

---

> [!TIP]
> Always close unused applications for accurate results.

> [!INFO]
> For detailed instructions, refer to each tool's documentation.
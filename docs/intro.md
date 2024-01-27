---
sidebar_position: 1
---

# Getting Started

Let's get started with **bogu**, *The Secret Scanner*.

## Run a local scan of a project folder

Get started by running a **local scan** of a project folder.

### What you'll need

bogu runs on modern versions of Linux and macOS.

Tested on:

- macOS 14 (Apple M1/M2)
- Ubuntu 22.04.02 (Linux 5.15)

## Install bogu

Get the latest version of bogu from our releases and unzip it.

Here's an example using Ubuntu.

```bash
wget https://github.com/bogu-io/bogu/releases/download/0.0.7/bogu-0.0.6-linux-x64.zip
unzip bogu-0.0.7-linux-x64.zip
cd bogu-0.0.7/bin
```

## Run local scan

Run a local scan on `~/my-project`

```bash
./bogu -p ~/my-project
```

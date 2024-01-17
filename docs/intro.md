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

- macOS 14.2.1 (Apple M2)
- Ubuntu 22.04.02 (Linux 5.15)

## Install bogu

Get the latest version of bogu from our releases and put it in your `PATH`.

Here's an example using Ubuntu.

```bash
wget https://github.com/bogu-io/bogu/releases/download/0.0.2/bogu-0.0.2-linux-x64.zip
sudo unzip bogu-0.0.2-linux-x64.zip -d /usr/local
sudo mv /usr/local/build-linux /usr/local/bogu
echo "export PATH=$PATH:/usr/local/bogu" >> $HOME/.profile
source $HOME/.profile
rm bogu-0.0.2-linux-x64.zip
```

## Run local scan

Run a local scan on `~/my-project`

```bash
bogu 
```

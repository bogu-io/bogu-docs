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

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

---
sidebar_position: 1
---

# .bogu Directory

The `.bogu` directory contains configuration files, the database, and other temporary files for bogu. It is created in the `$HOME` folder when you first run bogu.

## boguignore

Bogu automatically creates a `boguignore` file in the `$HOME/.bogu` directory where you can add path or file patterns to ignore during a scan. See [Ignoring Paths](/docs/guides/ignore) for more information.

## archives

The `$HOME/.bogu/archives` directory is created during a source control management (SCM) scan. It contains the archives of the repositories that bogu scans. As scans are completed, the archives are deleted. At the end of the scan, the `archives` directory is also deleted.
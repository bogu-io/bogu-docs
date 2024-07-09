---
sidebar_position: 3
---

# Ignoring Paths

Bogu automatically creates a `boguignore` file in `$HOME/.bogu` where you can add path or file patterns to ignore during a scan.

You can also specify a custom ignore file using the `-i` or `--ignore-path` option.

Paths are listed one per line and use regular expressions to match files and directories. Here are some examples:

```bash
node_modules
\\.git
\\.idea
project-(dev|staging|prod)\\/test
```

Scans will ignore the above with no additional options if they are in the provided `$HOME/.bogu/boguignore` file.

```bash
bogu -p /path/to/scan
```

You can also specify a custom ignore file:

```bash
bogu -p /path/to/scan -i /path/to/ignore.txt
```

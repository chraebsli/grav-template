# Grav Template

A template for [Grav](https://getgrav.org/) projects to quickly get started.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Doppler Installation](#doppler-installation)
    - [Install on Windows](#install-on-windows)
    - [Install on Linux](#install-on-linux)
    - [Login](#login)
  - [SASS Installation](#sass-installation)
  - [Secrets](#secrets)
  - [Auto Setup](#auto-setup)
- [Development](#development)
  - [Local Server](#local-server)
- [Configuration](#configuration)
- [Update](#update)

## Installation

1. Clone the repository
2. Install [dependencies](#dependencies)
3. Install [Doppler](#doppler-installation)
4. Install [SASS](#sass-installation)
5. Configure [secrets](#secrets)
6. (opt) [Auto Setup](#auto-setup) (to automatically install the dependencies and secrets after a pull)

### Dependencies

**Requirements**:
- [composer](https://getcomposer.org/)

Install the dependencies:

- Run IDE Task: `Install Dependencies`
- Run in Terminal:
  ```sh
  ./scripts/dependencies.sh
  ```

### Doppler Installation

**Requirements**:
- [doppler-cli](https://docs.doppler.com/docs/install-cli)
- [scoop](https://scoop.sh/) (Windows only)

#### Install on Windows

```cmd
scoop bucket add doppler https://github.com/DopplerHQ/scoop-doppler.git
scoop install doppler
```

#### Install on Linux

```sh
(curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh
```

#### Login

```sh
doppler login
```

### SASS Installation

```sh
npm install -g sass
```

### Secrets

**Requirements**:
- [Doppler](#doppler-installation)
- UNIX system
- (alternatively) git bash

```sh
doppler setup
./scripts/secrets.sh
```

### Auto Setup

If you pull the repo from GitHub, you can run the following command to automatically install the dependencies and secrets after a pull:

```sh
git config --local core.hooksPath .githooks/
```

## Development

### Local Server

**Requirements:**
- UNIX system
- (alternatively) git bash

1. Run the development server:
    ```sh
    bin/grav server
    ```
2. Open the site in your browser: <http://localhost:8000>

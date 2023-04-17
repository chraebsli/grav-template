# Grav Template

## Installation

Requirements:

- composer
- doppler-cli

Install the dependencies:

```sh
composer install
```

### Doppler

#### Install Windows

```cmd
scoop bucket add doppler https://github.com/DopplerHQ/scoop-doppler.git
scoop install doppler
```

#### Install Linux

```sh
(curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh
```

#### Login

```sh
doppler login
```

### Auto Setup

If you pull the repo from GitHub, you can run the following command to automatically install the dependencies and secrets after a pull:

```sh
git config --local core.hooksPath .githooks/
```

## Development

### Secrets

Requirements:

- UNIX system
- (alternatively) git bash

```sh
doppler setup
./secrets.sh
```

### Local Server

Requirements:

- UNIX system
- (alternatively) git bash

Run the development server:

```sh
bin/grav server
```

Open the site in your browser: <http://localhost:8000>

## Configuration

- [ ] edit site config ([user/config/site.yaml](user/config/site.yaml))
- [ ] add sitemap.xml
- [ ] edit pages ([user/pages](user/pages))
- [ ] edit theme ([user/themes/quark-child](user/themes/quark-child))
  - [ ] [templates](user/themes/quark-child/templates)
  - [ ] [CSS](user/themes/quark-child/css)
  - [ ] [Images](user/themes/quark-child/images)

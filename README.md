<div align="center">
  <img width="100" src="./public/images/logos/logo.png" alt="trava" />

## Trava Governance App

</div>

<div align="center">

[![Test](https://github.com/TravaLendingPool/governance-interface/actions/workflows/ci.yml/badge.svg)](https://github.com/TravaLendingPool/governance-interface/actions/workflows/ci.yml)
[![Deploy to production](https://github.com/TravaLendingPool/governance-interface/actions/workflows/cd.yml/badge.svg)](https://github.com/TravaLendingPool/governance-interface/actions/workflows/cd.yml)
[![Deploy to staging](https://github.com/TravaLendingPool/governance-interface/actions/workflows/cd.yml/badge.svg?branch=develop)](https://github.com/TravaLendingPool/governance-interface/actions/workflows/cd.yml)

</div>

## Usage

### Development

Node version >= 14.17

```
  cp .env.sample .env
  yarn install
  yarn run typechain:build
  yarn dev
```

**Regenerate typechain when adding or updating Contract's ABI**

```
  yarn run typechain:build
```

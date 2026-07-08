# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/zororaka00/id-mobile-detector/compare/v1.1.0...v2.0.0) (2026-07-09)


### Features

* add comprehensive unit test suite with Jest
* add test script and coverage support

### Breaking Changes

* rename `detectRegion` to `detectLocation`
* rename `RegionResult` to `LocationResult`
* rename `region`/`regionDetail` fields to `location`/`locationDetail` in `DetectionResult`
* rename `regions` to `locations` in hlr-data.json structure
* rename `findRegionForPrefix` to `findLocationForPrefix`

## [1.1.0](https://github.com/zororaka00/id-mobile-detector/compare/v1.0.2...v1.1.0) (2026-03-03)


### Features

* add detailed provider metadata and getProviderDetails function ([921f399](https://github.com/zororaka00/id-mobile-detector/commit/921f39929682b62a9299e5f1d8680334093833fc))

### [1.0.2](https://github.com/zororaka00/id-mobile-detector/compare/v1.0.1...v1.0.2) (2024-11-27)

### [1.0.1](https://github.com/zororaka00/id-mobile-detector/compare/v1.0.0...v1.0.1) (2024-11-25)

## 1.0.0 (2024-11-25)
- Initial release
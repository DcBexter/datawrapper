# Datawrapper

Historical portfolio snapshot. This repository preserves an early Datawrapper codebase; it is not the current Datawrapper service or a maintained production deployment.

Datawrapper is a tool that enables to create enticing visualizations in seconds, without any programming skills.

It draws inspiration from [ManyEyes](http://www-958.ibm.com/software/data/cognos/manyeyes/) and [GoogleCharts](https://developers.google.com/chart/) but remains entirely open-source and independent from a third-party server.

It was created by [Mirko Lorenz](http://www.mirkolorenz.com/), [Nicolas Kayser-Bril](http://nkb.fr) and [Gregor Aisch](http://driven-by-data.net/) and was funded by [ABZV](http://www.abzv.de/).

### Historical development note

At the moment we're getting closer and closer to Datawrapper 1.0, which is going to replace the current public prototype we released earlier at [datawrapper.de](http://datawrapper.de).
## Repository maintenance

PRs, pushes to `live` and weekly runs validate GitHub workflows, JavaScript syntax and visualization metadata JSON. Dependency review checks recognized manifests; CodeQL scans JavaScript only, not PHP. These checks do not run the application, its database or chart rendering.

The PHP 5-era backend and vendored libraries are preserved. Current PHP compatibility is not claimed: PHP 8.5 syntax checks already fail on existing curly-brace string offsets in `ChartQuery.php` and several legacy libraries. Do not deploy this snapshot without a separate modernization/security review.

Renovate proposes CI and declared npm/Composer dependency updates, including preserved manifests under vendor/. Only GitHub Action digest refreshes may auto-merge after **Required maintenance** passes; version changes and runtime dependency upgrades need review. Dependabot handles available security updates, with version-update PRs delegated to Renovate. Vendored libraries without supported manifests cannot be updated automatically.

No automatic application release or deployment. Scheduled workflow and bot configuration become effective after merge to `live`.

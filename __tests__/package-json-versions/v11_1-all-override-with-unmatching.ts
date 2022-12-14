export const packageJsonWithV11_1AllWithUnmatching = {
  name: 'lumberjack',
  version: '0.0.0',
  scripts: {
    ng: 'ng',
    start: 'ng serve lumberjack-app',
    build: 'ng build lumberjack-app --prod',
    test: 'ng test lumberjack-app',
    'test:ci': 'yarn test --configuration=ci',
    lint: 'ng lint',
    e2e: 'ng e2e lumberjack-app-e2e',
    'contributors:add': 'all-contributors add',
    'hooks:pre-commit': 'node hooks/pre-commit.js',
    commit: 'git-cz',
    'release:first': 'yarn release -- --first-release',
    'build:lib':
      'ng build ngworker-lumberjack --prod && npx copy README.md ./dist/ngworker/lumberjack',
    'test:lib': 'ng test ngworker-lumberjack',
    'test:lib:ci': 'yarn test:lib --configuration=ci',
    'test:internal':
      'ng test internal-test-util && ng test internal-console-driver-test-util',
    'test:internal:ci':
      'ng test internal-test-util --configuration=ci && ng test internal-console-driver-test-util --configuration=ci',
    release:
      'cd libs/ngworker/lumberjack && standard-version --infile ../../../CHANGELOG.md',
    publish: 'cd dist/ngworker/lumberjack && npm publish',
    ci:
      'yarn install && yarn lint && yarn build:lib && yarn test:internal:ci && yarn test:lib:ci && yarn build && yarn test:ci && yarn e2e',
    format:
      'npx prettier --config prettier.config.js --write "**/*.*" "!dist/**" "!yarn.lock"',
    'delete-path-alias': 'node tools/delete-path-alias.js'
  },
  private: true,
  dependencies: {
    unmatching: 'unmatching',
    '@angular/animations': '~11.1.0',
    '@angular/cdk': '~11.1.0',
    '@angular/common': '~11.1.0',
    '@angular/compiler': '~11.1.0',
    '@angular/core': '~11.1.0',
    '@angular/elements': '~11.1.0',
    '@angular/forms': '~11.1.0',
    '@angular/google-maps': '~11.1.0',
    '@angular/material': '~11.1.0',
    '@angular/platform-browser': '~11.1.0',
    '@angular/platform-browser-dynamic': '~11.1.0',
    '@angular/router': '~11.1.0',
    '@angular/youtube-player': '~11.1.0',
    rxjs: '~6.6.0',
    tslib: '^2.0.0',
    'zone.js': '~0.11.3'
  },
  devDependencies: {
    '@angular-builders/jest': '~11.1.1',
    'unmatching-dev': 'unmatching-dev',
    '@angular-devkit/build-angular': '~0.1101.0',
    '@angular-devkit/schematics-cli': '~0.1101.0',
    '@angular/cli': '~11.1.0',
    '@angular/compiler-cli': '~11.1.0',
    '@commitlint/cli': '8.1.0',
    '@commitlint/config-angular': '^8.3.4',
    '@commitlint/config-conventional': '^8.3.4',
    '@ngneat/spectator': '^6.0.0',
    '@types/jasmine': '~3.5.0',
    '@types/jasminewd2': '~2.0.3',
    '@types/node': '^12.11.1',
    'all-contributors-cli': '^6.8.1',
    codelyzer: '^6.0.0',
    copy: '~0.3.2',
    'git-cz': '^3.3.0',
    husky: '^3.1.0',
    'jasmine-core': '~3.5.0',
    'jasmine-spec-reporter': '~5.0.2',
    json: '^10.0.0',
    karma: '~5.0.9',
    'karma-chrome-launcher': '~3.1.0',
    'karma-coverage-istanbul-reporter': '~3.0.2',
    'karma-jasmine': '~3.3.1',
    'karma-jasmine-html-reporter': '^1.5.0',
    'lint-staged': '^9.5.0',
    'ng-packagr': '^11.1.0',
    prettier: '^2.0.5',
    protractor: '~7.0.0',
    'standard-version': '^6.0.1',
    'ts-node': '~8.3.0',
    tslint: '~6.1.0',
    'tslint-config-prettier': '^1.18.0',
    'tslint-plugin-prettier': '^2.3.0',
    typescript: '~4.1.2'
  },
  config: {
    commitizen: {
      path: 'cz-conventional-changelog'
    }
  },
  'lint-staged': {
    '*.{js,json,css,scss,ts,html,component.html}': [
      'prettier --write',
      'git add'
    ]
  },
  husky: {
    hooks: {
      'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
      'pre-commit': 'yarn hooks:pre-commit && lint-staged && yarn lint',
      'pre-push': 'yarn test:lib:ci'
    }
  }
};

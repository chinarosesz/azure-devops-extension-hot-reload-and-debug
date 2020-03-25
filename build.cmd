call npm install
call webpack --mode development
call tfx extension create --manifest-globs vss-extension.json --overrides-file vss-extension-dev.json
call tfx extension create --manifest-globs vss-extension.json --overrides-file vss-extension-release.json
call webpack-dev-server --mode development

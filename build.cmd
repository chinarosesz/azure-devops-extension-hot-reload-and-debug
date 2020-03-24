call npm install
call webpack --mode development
call tfx extension create --manifest-globs vss-extension.json --overrides-file configs/dev.json
call tfx extension create --manifest-globs vss-extension.json --overrides-file configs/release.json
call webpack-dev-server --mode development

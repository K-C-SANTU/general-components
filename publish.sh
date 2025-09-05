npm version patch

npm i

git add package.json package-lock.json

VERSION=$(node -p "require('./package.json').version")

git commit -m "chore: release v$VERSION"

git push origin dev

git push origin "v$VERSION"
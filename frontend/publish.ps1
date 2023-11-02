# Build and Copy React App to static directory in backend
npm run build &&
rm -recurse -force ../backend/website/dist/* &&
cp -recurse -force dist/* ../backend/website/dist/

# Build and Copy React App to static directory in backend
npm run build && \
  rm -rf ../backend/website/dist/* && \
  cp -rf dist/* ../backend/website/dist/
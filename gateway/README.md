# Gateway
Simple reverse proxy implementation to consolidate multiple apps under one domain.

By calling http://localhost:8080 we effectively reach our frontend at http://localhost:5173
However, the /api path will proxy to the backend at http://localhost:5000
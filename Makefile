.PHONY: dev-api
dev-api:
	cd backend && npm run dev

.PHONY: dev-ui
dev-ui:
	cd ui && npm run start

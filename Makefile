# Include external make configurations
include .make/tag.mk

# Application name
APP_NAME := node-typescript-starter

# Set default target to help
.DEFAULT_GOAL := help

# Remove dist folder
rmdist:
	@echo "Removing dist folder..."
	@pnpm rmdist

# Build the project
build: rmdist
	@echo "Building project..."
	@pnpm build

# Build for production
build-prod: build
	@echo "Minifying distribution files..."
	@pnpm dist:minify

# Run development server
dev:
	@echo "Starting development server..."
	@pnpm dev

# Start the application
run:
	@echo "Running the application..."
	@pnpm start

# Update version
version-up:
	@echo "Updating version..."
	@pnpm version-up

# Run pre-commit checks
pre:
	@echo "Running pre-commit checks..."
	@pnpm pre-commit

# Help target
help:
	@echo "Available targets:"
	@echo "  rmdist         - Remove dist folder"
	@echo "  build          - Build the project"
	@echo "  build-prod     - Build for production (includes minification)"
	@echo "  dev            - Start development server"
	@echo "  run            - Run the application"
	@echo "  version-up 	- Update version"
	@echo "  pre            - Run pre-commit checks"
	@echo "  help           - Show this help message"

# Declare phony targets
.PHONY: all rmdist build build-prod dev run version-up pre help

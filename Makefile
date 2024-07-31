# Include external make configurations
include .make/tag.mk

# Application name
APP_NAME := ts-websocket-client

# Set default target to help
.DEFAULT_GOAL := help

# Remove dist folder
rmdist:
	@echo "Removing dist folder..."
	@pnpm rmdist

# Clean project
clean:
	@echo "Cleaning project..."
	@pnpm clean

# Build the package
build: rmdist
	@echo "Building package..."
	@pnpm build

dev: rmdist
	@pnpm dev

# Build the package
serve:
	@pnpm serve

# Run tests
test:
	@echo "Running tests..."
	@pnpm test

# Update version
version-up:
	@echo "Updating version..."
	@pnpm version-up

# Run pre-commit checks
pre:
	@echo "Running pre-commit checks..."
	@pnpm pre-commit

# Run linter
lint:
	@echo "Running linter..."
	@pnpm lint

# Format code
format:
	@echo "Formatting code..."
	@pnpm format

# Run all checks
check: lint format
	@echo "Running all checks..."
	@pnpm check

# Help target
help:
	@echo "Available targets:"
	@echo "  clean          - Clean project (remove node_modules and lock file)"
	@echo "  rmdist         - Remove dist folder"
	@echo "  build          - Build the package"
	@echo "  test           - Run the test suite"
	@echo "  version-up     - Update version"
	@echo "  pre     		- Run pre-commit checks"
	@echo "  lint           - Run linter"
	@echo "  format         - Format code"
	@echo "  check          - Run all checks (lint and format)"
	@echo "  help           - Show this help message"

# Declare phony targets
.PHONY: clean rmdist build test version-up pre lint format check help

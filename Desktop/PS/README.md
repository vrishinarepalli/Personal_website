# Pokemon Team Generator

A competitive Pokemon team generator that analyzes the OU (OverUsed) metagame to create viable, competitive teams.

## Features
- Analyzes current OU metagame using Smogon usage statistics
- Generates competitive 6-Pokemon teams
- Provides movesets, EVs, items, and abilities
- Ensures type coverage and role diversity

## Installation

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Usage

```bash
# Update metagame data
python -m src.data_fetcher

# Generate a team
python team_gen.py generate --tier ou --archetype balance
```

## Project Status
Currently in Phase 1: Data Infrastructure

See [specs.md](specs.md) for detailed project specifications and roadmap.

## Current Scope
- **Tier**: OU (OverUsed) only
- **Generation**: Gen 9 (Scarlet/Violet)
- **Output**: Teams in Pokemon Showdown format

## Documentation
- [Project Specifications](specs.md) - Detailed project plan and architecture

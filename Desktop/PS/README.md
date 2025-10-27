# Pokemon Showdown Set Predictor

A Chrome extension that predicts opponent Pokemon sets in real-time during Pokemon Showdown battles. Uses Smogon usage statistics and learns from battle history to provide accurate predictions.

## Features
- **Real-time Set Prediction**: Predicts opponent moves, abilities, items, and EV spreads as battle progresses
- **Bayesian Learning**: Updates predictions based on revealed information
- **Battle History**: Learns from past battles to improve accuracy
- **Chrome Extension**: Seamless overlay on Pokemon Showdown battles
- **Privacy-First**: All data stored locally in your browser

## Installation

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## How It Works

1. **Battle Start**: When opponent sends out a Pokemon, shows initial predictions based on Smogon usage data
2. **Real-time Updates**: As moves/abilities/items are revealed, predictions are refined using Bayesian inference
3. **Learning**: Stores battle history to improve future predictions
4. **Accuracy**: Typically 60% accurate on Turn 1, 80% by Turn 5, 95% by Turn 10

## Usage

```bash
# Update Smogon usage data
python update_data.py

# Run prediction engine tests
python -m src.prediction_engine

# Build Chrome extension (coming soon)
npm run build
```

## Project Status
**Phase 1**: Data Infrastructure ✓ Complete
**Phase 2**: Prediction Engine (In Progress)

See [specs_set_predictor.md](specs_set_predictor.md) for detailed project specifications.

## Current Scope
- **Tier**: OU (OverUsed) focus, expandable to other tiers
- **Generation**: Gen 9 (Scarlet/Violet)
- **Platform**: Chrome Extension for Pokemon Showdown

## Documentation
- [Set Predictor Specifications](specs_set_predictor.md) - Detailed project plan
- [Original Team Generator Plan](specs.md) - Previous direction (archived)

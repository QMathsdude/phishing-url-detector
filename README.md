# Phishing URL Detector

Project for my course **WIE2003 — Introduction to Data Science**

## Project Structure

```
phishing-url-detector/
│
├── data/
│   └── urls.csv              # Dataset of legitimate and phishing URLs
│
├── notebooks/
│   └── 01_EDA.ipynb          # Exploratory Data Analysis
│
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Python 3.8+
- Jupyter Notebook or JupyterLab

### Installation

```bash
pip install pandas numpy matplotlib seaborn jupyter
```

### Running the Notebook

```bash
jupyter notebook notebooks/01_EDA.ipynb
```

## Dataset

`data/urls.csv` contains URLs labelled as either `legitimate` or `phishing`.

| Column | Description              |
|--------|--------------------------|
| `url`  | The full URL string      |
| `label`| `legitimate` or `phishing` |

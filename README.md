# 🎣 Phishing URL Detection
> **Project for my course WIE2003 — Introduction to Data Science**
>
> Uses machine learning to detect phishing URLs using only **lexical features**. (what can be seen by the user)

## 📖 Table of Contents
- [📌 Executive Summary](#-executive-summary)
- [🗂️ Dataset](#️-dataset)
- [⚙️ Methodology](#️-methodology)
- [📊 Data Product](#-data-product)
- [⚖️ License](#️-license)

## 📌 Executive Summary
![img1](/img/final-model-performance-metrics.png)


- This projects uses Random Forest model to classify a URL as `legitimate` (0), or `phishing` (1).
- Trained on 115,231 URLs with the following proportions:

| Label          | Count   | Proportion |
|----------------|---------|------------|
| Legitimate (0) | 98,641  | 85.6%      |
| Phishing (1)   | 16,590  | 14.4%      |

- Managed to trim down to 13 features compared to 22 features while maintaining high accuracy.

- Recall of 93.55% indicates that model successfully catches more than 9 out of 10 phishing URLs, with only about 6.4% slipping through.

---

## 🗂️ Dataset
- Dataset used (with no extra data added) was from following researcher:

    [Dam Minh, Linh; Tran Cong, Hung (2026), “URL-Phish: A Feature-Engineered Dataset for Phishing Detection”, Mendeley Data, V2, doi: 10.17632/65z9twcx3r.2](https://data.mendeley.com/datasets/65z9twcx3r/1)

- Researcher built the dataset using publically available data from the following sources:

    - ROR Data. (2025). Zenodo. [10.5281/ZENODO.6347574](https://doi.org/10.5281/ZENODO.6347574)

    - PhishTank. (n.d.). *Join the fight against phishing*. [https://phishtank.org](https://phishtank.org)

- Overall, the original dataset had the following composition:

| Label          | Count   | Proportion |
|----------------|---------|------------|
| Legitimate (0) | 100,000 | 85.8%      |
| Phishing (1)   | 16,600  | 14.2%      |

---

## ⚙️ Methodology
This project is split into two sections, EDA and ML.

### 🗺️ Part 1: EDA
- Data cleaning (duplicates, negative, NaN, etc).
- Split 22 features into six categories to be visualised:
    1. 📏 Length-Based
    2. 🧮 Character Composition
    3. ➗ Specific Special Character 
    4. ⭕ Structural and Hierarchical
    5. 🛡️ Protocol and Security Indicator
    6. 🌡️ Shanon Entropy
- Plot correlation matrix to see which features are too correlated.

### 🤖 Part 2: ML

![img2](/img/rf-importance.png)

- Step 1: Imbalance — Determine the best model (recall) of 22 features with various imbalance fixing methods:
    - Weighted class
    - Balanced RF
    - SMOTE
    - ADASYN 
- Step 2: Feature Trimming — Try make the model lightweight while maintaining high recall:
    - Correlation Matrix
    - Random Forest Importance
- Step 3: Tuning — Hyperparameter tuning model to make it the most optimized.
    - **Final model = RF + SMOTE + 13 Features**

---

## 📊 Data Product
- Data product link: 

- High level view of how data product works:
![img3](/img/high-level-process.png)

- Screenshots of data product:
![img4](/img/data-product-1.png)
![img5](/img/data-product-2.png)
![img6](/img/data-product-3.png)

---

## ⚖️ License
The content of this project is dual-licensed.
- **Code:** All Python scripts and code snippets are licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
- **Educational Materials:** All other content, including PDF slides and recorded videos, are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) license. See the [LICENSE.cc-by](LICENSE.cc-by) file for details.


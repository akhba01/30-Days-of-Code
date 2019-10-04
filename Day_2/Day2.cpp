#include <bits/stdc++.h>

using namespace std;

// Complete the solve function below.
void solve(double meal_cost, int tip_percent, int tax_percent) {
    
}

int main()
{
    string tmp;
    cin >> tmp;
    double mealCost = stod(tmp);

    cin >> tmp;
    int tipPercent = stoi(tmp);

    cin >> tmp;
    int taxPercent = stoi(tmp);

    double tip = tipPercent * mealCost / 100;
    double tax = taxPercent * mealCost / 100;

    int totalCost = (int) round(tip + tax + mealCost);
    cout<<totalCost;
    return 0;
}

class TabNN
{
private:
    int N;      // liczba elementów tablicy
    int *tab; //sama tablica

public:
    TabNN(int N, const int *tab);
    TabNN(const TabNN &p );
    ~TabNN();

    float GetMediana();
    int Minimum();
    int Maximum();
    float AVGArytm();
};
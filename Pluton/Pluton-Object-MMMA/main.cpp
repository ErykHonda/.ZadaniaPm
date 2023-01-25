#include <iostream>
#include "main.h"
#include <time.h>
#include <cstdlib>
#include <algorithm>

int Generate(int a, int b); // funkcja od generowania liczb

int main()
{                      // TabNN Nazwa(N,Tablica)
    srand(time(NULL)); // czynnik losowania
    int N = 10;        // ilośc elementów tablicy
    int tablica[N];    // tworzymy tablice N elementów

    for (int i = 0; i < N; i++)
    {
        tablica[i] = Generate(1, 100); // generujemy liczby dla tablicy
    }

    TabNN Kotecek(N, tablica); // tworzymy obiekt
    for (int i = 0; i < N; i++) // wypisujemy dane z obiektu
    {
        std::cout << i << " - " << Kotecek.tab[i] << "\n";
    }
    std::cout << " -- " << Kotecek.AVGArytm();
    return 0;
}

int Generate(int a, int b)
{
    return rand() % b + a; // generujemy liczby pseudo losowe
}

TabNN::TabNN(int N, const int *tab) // konstuktor
{
    this->N = N;
    this->tab = new int[this->N];

    for (int i = 0; i < this->N; i++)
    {
        this->tab[i] = tab[i];
    }

    std::sort(this->tab, this->tab + N);
}

TabNN::TabNN(const TabNN &p) // konstuktor
{
    this->N = p.N;
    this->tab = p.tab;
}

TabNN::~TabNN() // destruktor
{
    delete[] this->tab;
}

float TabNN::GetMediana()
{
    float mediana = 0.0;
    if (this->N % 2 == 0)
    {
        float x1 = this->tab[(this->N / 2) - 1] + 0.1;
        float x2 = this->tab[(this->N / 2)] + 0.1;
        return ((x1 + x2 - 0.2) / 2);
    }
    else
        return this->tab[(this->N / 2)];
}

int TabNN::Minimum()
{
    return this->tab[0];
}

int TabNN::Maximum()
{
    return this->tab[this->N - 1];
}

float TabNN::AVGArytm()
{
    float AVG;

    for (int i = 0; i < this->N; i++)
    {
        AVG += this->tab[i];
    }
    AVG = AVG / N;
    return AVG;
}
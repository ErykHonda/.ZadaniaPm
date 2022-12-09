#include "RezerwatoInator.h"
#include <iostream>
#include <string>
#include <cstdio>

int main()
{
	Biuro XDD(2);
	
	XDD.GiveRejestMysliwychAuto(1,"Aon","Trymenyjczk","31.01.1992","23.03.1992","AB 98456",3,"2431");
	XDD.GiveRejestMysliwychAuto(2,"Aon","Trymenyjczk","31.01.1992","23.03.1992","AB 98456",3,"2431");

	XDD.PrintIleRazyBylNaPolowaniu(1);
	

	/*
	
	
	
	std::cout<<XDD.RejestMysliwych[0][0]<<"\n";
	std::cout<<XDD.RejestMysliwych[0][1]<<"\n";
	std::cout<<XDD.RejestMysliwych[0][2]<<"\n";
	std::cout<<XDD.RejestMysliwych[0][3]<<"\n";
	std::cout<<XDD.RejestMysliwych[0][4]<<"\n";
	std::cout<<XDD.OcenyMysliwych[0]<<"\n";
	std::cout<<XDD.RejestMysliwych[0][5]<<"\n";
	
	
		XDD.GiveDaneBiuraAuto("BA 637","Jowisz","Almatur","1980");
		XDD.GetDaneBiura();
	
	
	Rezerwat Test(2,2);
	Test.GiveDaneRezerwatuAuto("AB 98465","1950");
	Test.GiveAdresRezerwatuAuto("Arbagellar", "Tentotamska");
	Test.GiveWlascicielAuto(1,"Wauwer","Antromach","1950");
	Test.GiveWlascicielAuto(2,"Wiron","Antromach","1980");
	Test.GivePrzegldAuto(1,1997,1,"Sciorg w fatalnym stanie, kurdle niedozywione, do przegladu");
	Test.GivePrzegldAuto(2,1998,3,"Zdecydowana Poprawa, rekultywacja sciorgu, zakupy nowych kurdli");
	Test.GetAllAbout();
	*/
	return 0;
}


//metody i konstruktory z klasy
Rezerwat::Rezerwat()
{
	this->IleJestW=1;
	this->IleByloP=1;
	
	
	//wlasciciele
	int ilu = 1;//liczba właścicieli
	int IND = 3;//1-imie 2-nazwisko 3-data
	this->Wlasciciele = new std::string* [ilu];
	for(int i =0 ; i<ilu;i++)
	{
		this->Wlasciciele[i] = new std::string[IND];
		this->Wlasciciele[i][0]="W-Brak-Imienia-Wlasciciela";
		this->Wlasciciele[i][1]="W-Brak-Nazwiska-Wlasciciela";
		this->Wlasciciele[i][2]="W-Brak-Roku-Dolonczenia";
	}
	//Przeglądy
	
		int IWP = 1;//liczba przeglądów
		int IPP = 3;//1-rok 2-wynik 3-uwagi 4-RokNastepnego
		this->UPrzeglady = new std::string [IWP];
		this->DanePrzegladow = new unsigned int* [IWP];
		for(int i =0 ; i<IWP;i++)
		{
			this->DanePrzegladow[i] = new unsigned int [IWP];
			this->DanePrzegladow[i][0] = 0;
			this->DanePrzegladow[i][1] = 0;
			this->DanePrzegladow[i][2] = 0;
			
			this->UPrzeglady[i]="P-Brak-Uwagi-Przegladu";
			
			
			
		}
	
	//Dane Pedyńcze
	this->DaneRezerwatu[0]="D-Brak-Numeru-Rezerwatu";
	this->DaneRezerwatu[1]="D-Brak-Roku-Zalozenia";
	
	this->AdresRezerwatu[0]="A-Brak-Miejscowosci";
	this->AdresRezerwatu[1]="A-Brak-Ulicy";
	
}

Rezerwat::Rezerwat(int IluW, int IluP)
{
	if(IluW>3)//Kryteria do wielkości właścicieli
	{
		this->IleJestW=3;
	}else if(IluW<1)
	{
		this->IleJestW=1;
	}else
	{
		this->IleJestW=IluW;
	}
	
	if(IluP<0)
	{
		IluP=0;
	}
	
	this->IleByloP=IluP;
	
	int ilu = IleJestW;//liczba właścicieli
	int IND = 3;//1-imie 2-nazwisko 3-data
	this->Wlasciciele = new std::string* [ilu];
	for(int i =0 ; i<ilu;i++)
	{
	
		this->Wlasciciele[i] = new std::string[IND];
		this->Wlasciciele[i][0]="Nie-Uzupelniono";
		this->Wlasciciele[i][1]="Nie-Uzupelniono";
		this->Wlasciciele[i][2]="Nie-Uzupelniono";
	}
	
	//dane dotyczące przeglądów
	
		int IWP = IleByloP;//liczba przeglądów
		int IPP = 3;
		this->UPrzeglady = new std::string [IWP];
		this->DanePrzegladow = new unsigned int* [IWP];
		for(int i =0 ; i<IWP;i++)
		{

			this->DanePrzegladow[i] = new unsigned int [IPP];
			this->DanePrzegladow[i][0] = 0;
			this->DanePrzegladow[i][1] = 0;
			this->DanePrzegladow[i][2] = 0;
			
			this->UPrzeglady[i]="P-Nie-Uzupelniono-Uwagi-Przegladu";
			
		}
		
		
	this->DaneRezerwatu[0]="D-Nie-Uzupelniono-Numeru-Rezerwatu";
	this->DaneRezerwatu[1]="D-Nie-Uzupelniono-Roku-Zalozenia";
	
	this->AdresRezerwatu[0]="A-Nie-Uzupelniono-Miejscowosci";
	this->AdresRezerwatu[1]="A-Nie-Uzupelniono-Ulicy";
		
}

Rezerwat::Rezerwat(const Rezerwat &kk)
{
	
	this->IleJestW=kk.IleJestW;
	std::cout<<"git \n";
	this->IleByloP=kk.IleByloP;
	std::cout<<"git \n";
	
	int ilu = this->IleJestW;//liczba właścicieli
	int IND = 3;//1-imie 2-nazwisko 3-data
	this->Wlasciciele = new std::string* [ilu];
	for(int i =0 ; i<ilu;i++)
	{
	
		this->Wlasciciele[i] = new std::string[IND];
		this->Wlasciciele[i][0]=kk.Wlasciciele[i][0];
		this->Wlasciciele[i][1]=kk.Wlasciciele[i][1];
		this->Wlasciciele[i][2]=kk.Wlasciciele[i][2];
	}
	
	//dane dotyczące przeglądów
	
		int IWP = this->IleByloP;//liczba przeglądów
		int IPP = 3;//1-rok 2-wynik 3-uwagi 4-RokNastepnego
		this->UPrzeglady = new std::string [IWP];
		this->DanePrzegladow = new unsigned int* [IWP];
		for(int i =0 ; i<IWP;i++)
		{
			this->DanePrzegladow[i] = new unsigned int [IPP];
			this->DanePrzegladow[i][0] = kk.DanePrzegladow[i][0];
			this->DanePrzegladow[i][1] = kk.DanePrzegladow[i][1];
			this->DanePrzegladow[i][2] = kk.DanePrzegladow[i][2];
			
			this->UPrzeglady[i] = kk.UPrzeglady[i];
			
		}
		
		
	this->DaneRezerwatu[0]=kk.DaneRezerwatu[0];
	this->DaneRezerwatu[1]=kk.DaneRezerwatu[0];
	
	this->AdresRezerwatu[0]=kk.AdresRezerwatu[0];
	this->AdresRezerwatu[1]=kk.AdresRezerwatu[0];
	
	
	
	
	
}

Rezerwat::~Rezerwat()
{

	
	delete[] this->Wlasciciele;
	Wlasciciele=NULL;
	
	delete[] this->UPrzeglady;
	UPrzeglady=NULL;
	
	delete[] this->DaneRezerwatu;
	DaneRezerwatu=NULL;
	
	delete[] this->AdresRezerwatu;
	AdresRezerwatu=NULL;
	
	delete[] this->DanePrzegladow;
	DanePrzegladow=NULL;
	
	std::cout<<"Delete\n";
}


//właściciele
void Rezerwat::GiveWlascicielHand(int KWZK)
{
	int XXX;
	if(KWZK>0)
	{
		XXX = KWZK-1;
	}else  
	{
		XXX = 0;	
	}
	
	
	std::string Notatka[3];
	
	Notatka[0]="Podaj Imie Wlasciciela -> ";
	Notatka[1]="Podaj Nazwisko Wlascicela -> ";
	Notatka[2]="Podaj Rok Dodania Wlascicela -> ";
	
	for(int i=0;i<3;i++)
	{
		std::cout<<Notatka[i];
		std::cin>>this->Wlasciciele[XXX][i];
	}
	
}

void Rezerwat::GiveWlascicielAuto(int KWZK, std::string imie, std::string nazwisko, std::string data)
{
	int XXX;
	if(KWZK>0)
	{
		XXX = KWZK-1;
	}else  
	{
		XXX = 0;	
	}
	
	this->Wlasciciele[XXX][0]=imie;
	this->Wlasciciele[XXX][1]=nazwisko;
	this->Wlasciciele[XXX][2]=data;
	
}

void Rezerwat::GetWlasciciele()
{
	std::string Notatka[3];
	
	Notatka[0]="Imie Wlasciciela -> ";
	Notatka[1]="Nazwisko Wlascicela -> ";
	Notatka[2]="Rok Dodania Wlascicela -> ";
	
	std::cout<<"+--------------------- Wlasciciele ---------------------+\n";
	
	for(int j = 0; j< this->IleJestW ;j++)
	{
		std::cout<<"Numer Wlasciciela "<<j+1<<"\n\n";
		for(int i=0;i<3;i++)
		{
			std::cout<<Notatka[i];
			std::cout<<Wlasciciele[j][i]<<"\n";
		}
		std::cout<<"\n+-------------------------------------------------------+\n";
	}
	
}


//przeglądy
void Rezerwat::GivePrzegldHand(int KPZK)
{
	int XXX;
	if(KPZK>0)
	{
		XXX = KPZK-1;
	}else  
	{
		XXX = 0;	
	}
	
	std::string Notatka[4];
	
	Notatka[0]="Podaj Rok Przegladu -> ";
	Notatka[1]="Podaj Wynik Przegladu -> ";
	Notatka[2]="Podaj Uwagi Do Przegladu -> ";
	Notatka[3]="Nastepny Przeglad Odpedzie Sie -> ";
	
	if(XXX-1>=0)
	{
		if(this->DanePrzegladow[XXX-1][0]==0)
		{
			std::cout<<Notatka[0];
			std::cin>>this->DanePrzegladow[XXX][0];
		}
		else
		{
			std::cout<<"Automatycznie Wprowadzono -> "<<DanePrzegladow[XXX-1][2]<<'\n';
			this->DanePrzegladow[XXX][0]=this->DanePrzegladow[XXX-1][2];
		}
	}else
	{
		std::cout<<Notatka[0];
		std::cin>>this->DanePrzegladow[XXX][0];	
	}
	
	
	

	std::cout<<Notatka[1];
	std::cin>>this->DanePrzegladow[XXX][1];
	
	std::cout<<Notatka[2];
	std::cin>>this->UPrzeglady[XXX];
	
	
	
	if(this->DanePrzegladow[XXX][1]>5) // limity na ocenie
	{
		this->DanePrzegladow[XXX][1]=5;
		
	}else if(this->DanePrzegladow[XXX][1]<0)
	{
		this->DanePrzegladow[XXX][1]=0;	
	}
	
	
	if(this->DanePrzegladow[XXX][1]==0)
	{
		this->DanePrzegladow[XXX][2]=0;
	}else if(this->DanePrzegladow[XXX][1]<3)
	{
		this->DanePrzegladow[XXX][2]=this->DanePrzegladow[XXX][0]+1;
	}else
	{
		this->DanePrzegladow[XXX][2]=this->DanePrzegladow[XXX][0]+2;
	}
	
	if(XXX-1>=0)
	{
		if(DanePrzegladow[XXX-1][1]==1)
		{
			this->DanePrzegladow[XXX][2]=0;
		}
	}
	
	std::cout<<Notatka[3]<<DanePrzegladow[XXX][2];
	
}

void Rezerwat::GivePrzegldAuto(int KPZK, unsigned int Rok, unsigned int Wynik, std::string Uwagi)
{
	int XXX;
	if(KPZK>0)
	{
		XXX = KPZK-1;
	}else  
	{
		XXX = 0;	
	}
	
	this->DanePrzegladow[XXX][0]=Rok;
	
	if(Wynik>5) // limity na ocenie
	{
		this->DanePrzegladow[XXX][1]=5;
		
	}else if(Wynik<0)
	{
		this->DanePrzegladow[XXX][1]=0;	
	}else
	{
		this->DanePrzegladow[XXX][1]=Wynik;
	}
	
	this->UPrzeglady[XXX]=Uwagi;
	
	
	
	
	
	if(this->DanePrzegladow[XXX][1]==0)
	{
		this->DanePrzegladow[XXX][2]=0;
	}else if(this->DanePrzegladow[XXX][1]<3)
	{
		this->DanePrzegladow[XXX][2]=this->DanePrzegladow[XXX][0]+1;
	}else
	{
		this->DanePrzegladow[XXX][2]=this->DanePrzegladow[XXX][0]+2;
	}
	
	if(XXX-1>=0)
	{
		if(DanePrzegladow[XXX-1][1]<3)
		{
			if(DanePrzegladow[XXX][1]==1)
			{
				this->DanePrzegladow[XXX][2]=0;
			}
		}
		
	}

}

void Rezerwat::GetPrzeglady()
{
	
	std::string Notatka[4];	
	
	Notatka[0]="Data Przegladu -> ";
	Notatka[1]="Ocena Przegladu -> ";
	Notatka[2]="Uwagi Do Przegladu -> ";
	Notatka[3]="Data Nastepnego Przegladu -> ";
	
	std::cout<<"+---------------------- Przeglady ----------------------+\n";
	for(int j =0; j < this->IleByloP ;j++)
	{
		std::cout<<"Numer Przegladu "<<j+1<<"\n\n";
		std::cout<<Notatka[0]<<this->DanePrzegladow[j][0]<<"\n";
		std::cout<<Notatka[1]<<this->DanePrzegladow[j][1]<<"\n";
		std::cout<<Notatka[1]<<this->UPrzeglady[j]<<"\n";
		std::cout<<Notatka[3]<<this->DanePrzegladow[j][2]<<"\n";
		std::cout<<"\n+-------------------------------------------------------+\n";
	}
	
	
}

//DaneRezerwatu
void Rezerwat::GiveDaneRezerwatuHand()
{
	std::string Notatka[2];
	Notatka[0]="Podaj Numer Rezerwatu -> ";
	Notatka[1]="Podaj Rok Zalozenia Rezerwatu -> ";
	for(int i=0; i<2;i++)
	{
		std::cout<<Notatka[i];
		DaneRezerwatu[i]="";
		char c;
		while( (c = getchar()) != '\n')
		{
			DaneRezerwatu[i] += c;
		}
	}
}

void Rezerwat::GiveDaneRezerwatuAuto(std::string Numer, std::string RokZ)
{
	this->DaneRezerwatu[0]=Numer;
	this->DaneRezerwatu[1]=RokZ;
}

void Rezerwat::GetDaneRezerwatu()
{
	std::cout<<"+-------------------- Dane Rezerwatu --------------------+\n\n";
	std::cout<<"Nr. Rezerwatu -> "<<this->DaneRezerwatu[0]<<"\n";
	std::cout<<"Rok Zalozenia -> "<<this->DaneRezerwatu[1]<<"\n";
	std::cout<<"\n+-------------------------------------------------------+\n";
}


//AdresRezerwatu
void Rezerwat::GiveAdresRezerwatuHand()
{
	std::string Notatka[2];
	Notatka[0]="Podaj Miejscowosc Rezerwatu -> ";
	Notatka[1]="Podaj Nazwe Ulicy Rezerwatu -> ";
	for(int i=0; i<2;i++)
	{
		std::cout<<Notatka[i];
		AdresRezerwatu[i]="";
		char c;
		while( (c = getchar()) != '\n')
		{
			AdresRezerwatu[i] += c;
		}
	}
}

void Rezerwat::GiveAdresRezerwatuAuto(std::string Miejsc, std::string Ulica)
{
	this->AdresRezerwatu[0]=Miejsc;
	this->AdresRezerwatu[1]=Ulica;
}

void Rezerwat::GetAdresRezerwatu()
{
	std::cout<<"+-------------------- Adres Rezerwatu ------------------+\n\n";
	std::cout<<"Rezerwat Miesci sie w Miejscowosc -> "<<this->AdresRezerwatu[0]<<"\n";
	std::cout<<"Ulica na ktorej lezy Rezerwat     -> "<<this->AdresRezerwatu[1]<<"\n";
	std::cout<<"\n+-------------------------------------------------------+\n";
}

//All About Object
void Rezerwat::GetAllAbout()
{
	std::cout<<"\n+---------------------- Wszystko ------------------------+\n\n";
	GetDaneRezerwatu();
	GetAdresRezerwatu();
	GetWlasciciele();
	GetPrzeglady();
	std::cout<<"\n               Wyswietlono Wszystkie Dane\n";
	std::cout<<"\n+----------------------- Koniec ------------------------+\n";
}


//     Metody DO BIURA

Biuro::Biuro()
{
	this->IleMysl=1;
	
	this->RejestMysliwych = new std::string* [IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->RejestMysliwych[i] = new std::string [6];
		for(unsigned int j=0; j<6 ; j++)
		{
			this->RejestMysliwych[i][j]="Brak-Danych";
		}
	}
	
	
	this->OcenyMysliwych = new unsigned int[IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->OcenyMysliwych[i] = 0;
	}
	
	this->DaneBiura=new std::string[4];
	for(unsigned int i = 0; i < 4; i++)
	{
	
		this->DaneBiura[i]="Brak-Danych";
	}
	
	
	
}

Biuro::Biuro(int IloscMysliwych)
{
	this->IleMysl=IloscMysliwych;
	
	this->RejestMysliwych = new std::string* [IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->RejestMysliwych[i] = new std::string [6];
		for(unsigned int j=0; j<6 ; j++)
		{
			this->RejestMysliwych[i][j]="Brak-Danych";
		}
	}
	
	
	this->OcenyMysliwych = new unsigned int[IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->OcenyMysliwych[i] = 0;
	}
	
	this->DaneBiura=new std::string[4];
	for(unsigned int i = 0; i < 4; i++)
	{
	
		this->DaneBiura[i]="Brak-Danych";
	}
}

Biuro::Biuro(const Biuro &kk)
{
	this->IleMysl=kk.IleMysl;
	
	this->RejestMysliwych = new std::string* [IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->RejestMysliwych[i] = new std::string [6];
		for(unsigned int j=0; j<6 ; j++)
		{
			this->RejestMysliwych[i][j]=kk.RejestMysliwych[i][j];
		}
	}
	
	
	this->OcenyMysliwych = new unsigned int[IleMysl];
	for(unsigned int i = 0; i < this->IleMysl; i++)
	{
		this->OcenyMysliwych[i] = kk.OcenyMysliwych[i];
	}
	
	this->DaneBiura=new std::string[4];
	for(unsigned int i = 0; i < 4; i++)
	{
	
		this->DaneBiura[i]=kk.DaneBiura[i];
	}
}

Biuro::~Biuro()
{
	
	delete[] DaneBiura;
	DaneBiura = NULL;

	delete[] RejestMysliwych;
	RejestMysliwych = NULL;

	delete[] OcenyMysliwych;
	OcenyMysliwych = NULL;

	std::cout<<"Delete1\n";
}


// metody do DaneBiura
//0-nr ident 1-planeta 2-nazwa 3-rok rejestracji
void Biuro::GiveDaneBiuraHand()
{
	std::string Notatka[4];
	Notatka[0]="Podaj Nr Identyfikacyjny Biura -> ";
	Notatka[1]="Podaj Planete Na Ktorej Lezy Biura -> ";
	Notatka[2]="Podaj Nazwe Biura -> ";
	Notatka[3]="Podaj Rok Rejestracji Biura -> ";
	
	for(unsigned int i=0; i<4;i++)
	{
		
		std::cout<<Notatka[i];
		this->DaneBiura[i]="";
		char c;
		while( (c = getchar()) != '\n')
		{
			this->DaneBiura[i] += c;
		}
	
	}
	
}

void Biuro::GiveDaneBiuraAuto(std::string Nriden, std::string Planeta, std::string Nazwa, std::string Rok )
{
		this->DaneBiura[0]=Nriden;
		this->DaneBiura[1]=Planeta;
		this->DaneBiura[2]=Nazwa;
		this->DaneBiura[3]=Rok;
}

void Biuro::GetDaneBiura()
{
	std::string Notatka[4];
	Notatka[0]="Nr Identyfikacyjny Biura     -> ";
	Notatka[1]="Planeta Na Ktorej Lezy Biuro -> ";
	Notatka[2]="Nazwa Biura                  -> ";
	Notatka[3]="Rok Rejestracji Biura        -> ";
	
	std::cout<<"+--------------------- Dane Biura ----------------------+\n\n";
	for(unsigned int i =0 ;i<4;i++)
	{
		std::cout<<Notatka[i];
		std::cout<<DaneBiura[i];
		std::cout<<"\n";
	}
	std::cout<<"\n+-------------------------------------------------------+\n";
}


//motody do RejestMysliwych

void Biuro::GiveRejestMysliwychHand(int IDMys)
{
	
	if(IDMys<0)
	{
		IDMys=0;
	}
	unsigned int XXX=IDMys-1;
	
	std::string Notatka[7];
	Notatka[0]="Podaj Imie Mysliwego -> ";
	Notatka[1]="Podaj Nazwisko Mysliwego -> ";
	Notatka[2]="Podaj Date Zgloszenia -> ";
	Notatka[3]="Podaj Date Polowania -> ";
	Notatka[4]="Podaj Nr Hodowli -> ";
	Notatka[5]="Podaj Nr przewodnika -> ";
	Notatka[6]="Ocene rezerwatu Przez Mysliwego -> ";
	
	for(unsigned int i=0;i<6;i++)
	{
		std::cout<<Notatka[i];
		this->RejestMysliwych[XXX][i]="";
		char c;
		while( (c = getchar()) != '\n')
		{
			this->RejestMysliwych[XXX][i] += c;
		}
	}
	std::cout<<Notatka[6];
	std::cin>>this->OcenyMysliwych[XXX];
	
	if(OcenyMysliwych[XXX]>5)
	{
		OcenyMysliwych[XXX]=5;
	}else if(OcenyMysliwych[XXX]<0)
	{
		OcenyMysliwych[XXX]=0;
	}
	
}

void Biuro::GiveRejestMysliwychAuto(int IDMys, std::string Imie, std::string Nazwisko, std::string DataZgl, std::string DataPow, std::string NrHodo, int Ocena, std::string NrPrze)
{
	if(IDMys<0)
	{
		IDMys=0;
	}
	unsigned int XXX=IDMys-1;
	
	this->RejestMysliwych[XXX][0]=Imie;
	this->RejestMysliwych[XXX][1]=Nazwisko;
	this->RejestMysliwych[XXX][2]=DataZgl;
	this->RejestMysliwych[XXX][3]=DataPow;
	this->RejestMysliwych[XXX][4]=NrHodo;
	this->RejestMysliwych[XXX][5]=NrPrze;
	this->OcenyMysliwych[XXX]=Ocena;
	
	if(this->OcenyMysliwych[XXX]>5)
	{
		this->OcenyMysliwych[XXX]=5;
	}else if(OcenyMysliwych[XXX]<0)
	{
		this->OcenyMysliwych[XXX]=0;
	}
}

void Biuro::GetRejestMysliwych()
{
	std::string Notatka[7];
	Notatka[0]="Podaj Imie Mysliwego            -> ";
	Notatka[1]="Podaj Nazwisko Mysliwego        -> ";
	Notatka[2]="Podaj Date Zgloszenia           -> ";
	Notatka[3]="Podaj Date Polowania            -> ";
	Notatka[4]="Podaj Nr Hodowli                -> ";
	Notatka[5]="Podaj Nr przewodnika            -> ";
	Notatka[6]="Ocene rezerwatu Przez Mysliwego -> ";
	
	std::cout<<"+----------------- Rejest Mysliwych -------------------+\n\n";
	for(unsigned int i=0;i<IleMysl;i++)
	{
		std::cout<<"ID Mysliwego -> "<<i+1<<"\n\n";
		std::cout<<Notatka[0];
		std::cout<<this->RejestMysliwych[i][0]<<"\n";
	
		std::cout<<Notatka[1];
		std::cout<<this->RejestMysliwych[i][1]<<"\n";
		
		std::cout<<Notatka[2];
		std::cout<<this->RejestMysliwych[i][2]<<"\n";
		
		std::cout<<Notatka[3];
		std::cout<<this->RejestMysliwych[i][3]<<"\n";
		
		std::cout<<Notatka[4];
		std::cout<<this->RejestMysliwych[i][4]<<"\n";
		
		std::cout<<Notatka[6];
		std::cout<<this->OcenyMysliwych[i]<<"\n";
		
		std::cout<<Notatka[5];
		std::cout<<this->RejestMysliwych[i][5]<<"\n";
		std::cout<<"\n+-------------------------------------------------------+\n\n";
	}
	
	
	
}

void Biuro::PrintIleRazyBylNaPolowaniu(int XXX)
{
	if(XXX<0)
	{
		XXX=0;
	}
	unsigned int iloscPolowan = 0;
	
	std::string Imie = RejestMysliwych[XXX][0];
	std::string Nazwisko = RejestMysliwych[XXX][1];
	
	for(unsigned int i=0;i<this->IleMysl;i++)
	{
		if(Imie == RejestMysliwych[i][0] && Nazwisko == RejestMysliwych[i][1])
		{
			iloscPolowan++;
		}
	}
	std::cout<<Imie<<" "<<"Byl na Polowaniu "<<iloscPolowan<<" Razy";
}

int Biuro::GetIleRazyBylNaPolowaniu(int XXX)
{
	if(XXX<0)
	{
		XXX=0;
	}
	unsigned int iloscPolowan = 0;
	
	std::string Imie = RejestMysliwych[XXX][0];
	std::string Nazwisko = RejestMysliwych[XXX][1];
	
	for(unsigned int i=0;i<this->IleMysl;i++)
	{
		if(Imie == RejestMysliwych[i][0] && Nazwisko == RejestMysliwych[i][1] && Imie == RejestMysliwych[i][0] && Nazwisko == RejestMysliwych[i][1])
		{
			iloscPolowan++;
		}
	}
	return iloscPolowan;
}

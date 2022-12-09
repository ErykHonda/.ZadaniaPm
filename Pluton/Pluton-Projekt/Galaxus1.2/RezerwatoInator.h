#ifndef _RezerwatoInator_h
#define _RezerwatoInator_h
#include <string>
class Rezerwat
{
	
	private:
		unsigned short int IleJestW;//liczba Właściciel 
		unsigned short int IleByloP;//Liczba Przeglądów
		
		std::string **Wlasciciele; //dane dotyczące właścicieli  
		unsigned int **DanePrzegladow; //przechowuje dane
		std::string *UPrzeglady;//uwagi dotyczące przeglądów
		std::string *DaneRezerwatu=new std::string[2];//0-NrRezerwatu 1-rokZalozenia
		std::string *AdresRezerwatu=new std::string[2];//0-Miejscowosc 1-NazwaUlicy
	
	public:
		
		Rezerwat();
		Rezerwat(int,int);
		Rezerwat(const Rezerwat &);
		~Rezerwat();
		
		void GiveWlascicielHand(int);
		void GiveWlascicielAuto(int, std::string, std::string, std::string);
		void GetWlasciciele();
		
		void GivePrzegldHand(int);
		void GivePrzegldAuto(int, unsigned int, unsigned int, std::string);
		void GetPrzeglady();
		
		void GiveDaneRezerwatuHand();
		void GiveDaneRezerwatuAuto(std::string, std::string);
		void GetDaneRezerwatu();
		
		void GiveAdresRezerwatuHand();
		void GiveAdresRezerwatuAuto(std::string, std::string);
		void GetAdresRezerwatu();
		
		void GetAllAbout();
		
};	

class Biuro
{
	private:
		public:
		unsigned int IleMysl;
		std::string *DaneBiura;//0-nr ident 1-planeta 2-nazwa 3-rok rejestracji
		std::string **RejestMysliwych;//6 pól
		unsigned int *OcenyMysliwych;// ocena od x-x
	
	
	public:
		Biuro();
		Biuro(int);
		Biuro(const Biuro &);
		~Biuro();
		
		void GiveDaneBiuraHand();
		void GiveDaneBiuraAuto(std::string,std::string,std::string,std::string);
		void GetDaneBiura();
		
		void GiveRejestMysliwychHand(int);
		void GiveRejestMysliwychAuto(int,std::string,std::string,std::string,std::string,std::string,int,std::string);
		void GetRejestMysliwych();
		
		void PrintIleRazyBylNaPolowaniu(int);
		int GetIleRazyBylNaPolowaniu(int);
};

#endif
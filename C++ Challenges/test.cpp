#include <iostream>
using namespace std;

int Recursion(int n){
    if (n == 1){
        return 1;
    } else {
        return n * Recursion(n-1);
    }
}

int Recursion2(int n){
      if (n == 1){
        return 1;
    } else {
        return n + Recursion(n-1);
    }
}

int main()
{

    cout << "More Configurations" << endl;

}
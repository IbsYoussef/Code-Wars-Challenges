#include <iostream>
#include <string>
#include <vector>

std::vector<int> reverseDigits(int number) {
    std::vector<int> Digits; // Vector to store reversed number in.

    std::string Words = std::to_string(number); // Converted number into string and reversed it.

    for (int i = Words.length()-1; i >= 0; i--) Digits.push_back(Words[i] - '0');

    return Digits;
}

int main()
{
    std::cout << "Enter a number:" << std::endl;
    int number;
    std::cin >> number;

    std::vector<int> result = reverseDigits(number);

    for (auto digit : result){
        std::cout << "Value: " << digit << std::endl;
    }
    std::cout << std::endl;

    return 0;
}
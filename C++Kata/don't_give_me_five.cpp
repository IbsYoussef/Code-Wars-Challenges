#include <string>
int dontGiveMeFive(int start, int end)
{
  int count = 0;
  
  for (int num = start; num <= end; num++){
    std::string numStr = std::to_string(num);
    bool contains5 = false;
    
    for (char digit : numStr){
      if (digit == '5'){
        contains5 = true;
        break;
      }
    }
    if (!contains5){
      count++;
    }
  }
  
  return count;
  
}
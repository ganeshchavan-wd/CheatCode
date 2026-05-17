const sampleData = [
  {
    id: 1,
    subject: 'Java',
    question: 'Reverse a String',
    code: `public class Reverse {
  public static void main(String[] args) {
    String str = "Hello";
    String rev = "";

    for(int i = str.length()-1; i >= 0; i--) {
      rev += str.charAt(i);
    }

    System.out.println(rev);
  }
}`
  },
  {
    id: 2,
    subject: 'Python',
    question: 'Factorial Program',
    code: `num = 5
fact = 1

for i in range(1, num+1):
    fact *= i

print(fact)`
  },
  {
    id: 3,
    subject: 'C++',
    question: 'Palindrome Number',
    code: `#include<iostream>
using namespace std;

int main() {
  int n = 121, rev = 0, temp = n;

  while(n > 0) {
    rev = rev * 10 + n % 10;
    n /= 10;
  }

  if(temp == rev)
    cout << "Palindrome";
}`
  }
]

export default sampleData
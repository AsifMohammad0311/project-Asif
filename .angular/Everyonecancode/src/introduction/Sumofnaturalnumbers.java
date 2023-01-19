package introduction;

import java.util.Scanner;

public class Sumofnaturalnumbers {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		int number=10,i,sum=0;
//		System.out.println("Enter any number:");
//		number=sc.nextInt();
		for(i=1;i<=number;i++) {
			sum+=i;
			
		}
		System.out.println("Sum of natural numbers is " + sum);
	}

}

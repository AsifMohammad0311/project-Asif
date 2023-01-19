package introduction;

import java.util.Scanner;

public class NaturalNumbers {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter mutliplication of number");
		int div= scanner.nextInt();
		System.out.println("Enter div of number");
		int num=scanner.nextInt();
		int var=(num*div*1+(div*num))/2;
		System.out.println(var);
		
	}

}

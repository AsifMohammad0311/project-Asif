package introduction;

import java.util.Scanner;

public class Greatestofthree {

	public static void main(String[] args) {
		
		System.out.println("Enter the  First number");
		Scanner sc= new Scanner(System.in);
		int num1=sc.nextInt();
		System.out.println("Enter the second number");
		int num2=sc.nextInt();
		System.out.println("Enter the Third number");
		int num3=sc.nextInt();
		
		 if((num1>=num2)&&(num1>=num3)){
	            System.out.println(num1+ " is max number");
	        }
	        else if((num2>=num1)&&(num2>=num3)){
	            System.out.println(num2+ " is max number");
	        }
	        else{
	        
	            System.out.println(num3+ " is max number");
	        }
	}

}
